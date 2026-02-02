"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

export default function PostEditor() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const isEditing = params.id && params.id !== 'new';

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "PERFORMANCE",
    readTime: "5 min read",
    image: "",
    published: false,
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content: formData.content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setFormData({ ...formData, content: editor.getHTML() });
    },
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    } else if (isEditing && status === "authenticated") {
      fetchPost();
    }
  }, [status, isEditing, router]);

  useEffect(() => {
    if (editor && formData.content && editor.getHTML() !== formData.content) {
      editor.commands.setContent(formData.content);
    }
  }, [formData.content, editor]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/posts`);
      const posts = await response.json();
      const post = posts.find((p: any) => p.id === params.id);
      
      if (post) {
        setFormData({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          readTime: post.readTime,
          image: post.image || "",
          published: post.published,
        });
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleImageUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(prev => ({ ...prev, image: data.url }));
      } else {
        alert('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageUpload(e.target.files[0]);
    }
  };

  const handleSave = async (publish: boolean) => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      alert('Please fill in all required fields');
      return;
    }

    setSaving(true);

    try {
      const dataToSave = {
        ...formData,
        published: publish,
      };

      const url = `/api/admin/posts`;
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(isEditing ? { ...dataToSave, id: params.id } : dataToSave),
      });

      if (response.ok) {
        router.push('/admin/dashboard');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to save post');
      }
    } catch (error) {
      console.error("Failed to save post:", error);
      alert('Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-2xl font-bold text-black">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-2 border-black bg-white sticky top-0 z-40">
        <div className="max-w-[1200px] mx-auto px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-black">
              {isEditing ? 'Edit Post' : 'New Post'}
            </h1>
            <p className="text-sm text-gray-600">
              {formData.published ? 'Published' : 'Draft'}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSave(false)}
              disabled={saving}
              className="px-4 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              Save Draft
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={saving}
              className="px-6 py-2 font-bold text-white bg-[#2D2DC3] border-2 border-black hover:bg-[#2525a5] transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Publish'}
            </button>
          </div>
        </div>
      </header>

      {/* Editor */}
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full px-4 py-3 border-2 border-black text-2xl font-bold text-black bg-white focus:outline-none focus:border-[#2D2DC3]"
                placeholder="Enter post title..."
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-bold text-black mb-2">
                URL Slug *
              </label>
              <div className="flex items-center">
                <span className="px-4 py-3 bg-gray-100 border-2 border-r-0 border-black text-gray-600">
                  /blog/
                </span>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="flex-1 px-4 py-3 border-2 border-black text-black bg-white focus:outline-none focus:border-[#2D2DC3]"
                  placeholder="post-url-slug"
                  required
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Excerpt *
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black text-black bg-white focus:outline-none focus:border-[#2D2DC3] resize-none"
                rows={3}
                placeholder="Brief description of the post..."
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Content *
              </label>
              {/* Toolbar */}
              <div className="border-2 border-b-0 border-black bg-gray-50 p-2 flex flex-wrap gap-1">
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                  className={`px-3 py-1 border border-black text-sm font-bold ${editor?.isActive('bold') ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  Bold
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                  className={`px-3 py-1 border border-black text-sm font-bold ${editor?.isActive('italic') ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  Italic
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                  className={`px-3 py-1 border border-black text-sm font-bold ${editor?.isActive('heading', { level: 2 }) ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  H2
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
                  className={`px-3 py-1 border border-black text-sm font-bold ${editor?.isActive('heading', { level: 3 }) ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  H3
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleBulletList().run()}
                  className={`px-3 py-1 border border-black text-sm font-bold ${editor?.isActive('bulletList') ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  Bullet List
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                  className={`px-3 py-1 border border-black text-sm font-bold ${editor?.isActive('orderedList') ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  Number List
                </button>
                <button
                  type="button"
                  onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
                  className={`px-3 py-1 border border-black text-sm font-bold ${editor?.isActive('codeBlock') ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  Code Block
                </button>
              </div>
              <EditorContent editor={editor} className="bg-white" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black text-black bg-white focus:outline-none focus:border-[#2D2DC3]"
              >
                <option value="PERFORMANCE">PERFORMANCE</option>
                <option value="FRAMEWORK">FRAMEWORK</option>
                <option value="CASE STUDY">CASE STUDY</option>
                <option value="STRATEGY">STRATEGY</option>
                <option value="ANALYTICS">ANALYTICS</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Read Time
              </label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                className="w-full px-4 py-3 border-2 border-black text-black bg-white focus:outline-none focus:border-[#2D2DC3]"
                placeholder="5 min read"
              />
            </div>

            {/* Featured Image Upload */}
            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Featured Image
              </label>
              
              {/* Drag & Drop Zone */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed ${
                  dragActive ? 'border-[#2D2DC3] bg-blue-50' : 'border-gray-300'
                } rounded p-6 text-center transition-colors ${uploading ? 'opacity-50' : ''}`}
              >
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleFileInput}
                  className="hidden"
                  disabled={uploading}
                />
                
                {uploading ? (
                  <div className="text-gray-600">
                    <div className="text-2xl mb-2">⏳</div>
                    <p className="font-bold">Uploading...</p>
                  </div>
                ) : formData.image ? (
                  <div>
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-48 object-cover border-2 border-black mb-4"
                    />
                    <button
                      onClick={() => setFormData({ ...formData, image: '' })}
                      className="px-4 py-2 font-bold border-2 border-red-500 text-red-500 hover:bg-red-50 transition-colors"
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-4">📷</div>
                    <p className="text-gray-600 mb-2">
                      <label htmlFor="image-upload" className="text-[#2D2DC3] font-bold cursor-pointer hover:underline">
                        Click to upload
                      </label>{' '}
                      or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border-2 border-black bg-gray-50">
              <h3 className="font-bold text-black mb-2">Publication Status</h3>
              <p className="text-sm text-gray-600 mb-4">
                {formData.published 
                  ? 'This post is live and visible to everyone.' 
                  : 'This post is saved as a draft.'}
              </p>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4"
                />
                <span className="text-sm font-bold text-black">Publish immediately</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}