"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    } else if (status === "authenticated") {
      fetchPosts();
    }
  }, [status, router]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`/api/admin/posts?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts(posts.filter(p => p.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
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
        <div className="max-w-[1536px] mx-auto px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-black">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Welcome back, {session.user?.name || session.user?.email}</p>
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <button className="px-4 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors">
                View Site
              </button>
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-4 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
            <Link href="/admin/posts/new">
              <button className="px-6 py-2 font-bold text-white bg-[#2D2DC3] border-2 border-black hover:bg-[#2525a5] transition-colors">
                New Post
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Posts List */}
      <div className="max-w-[1536px] mx-auto px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">All Posts</h2>
          <p className="text-gray-600">Manage your blog content</p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 border-2 border-black bg-white">
            <p className="text-xl font-bold text-gray-600 mb-4">
              No posts yet
            </p>
            <Link href="/admin/posts/new">
              <button className="font-bold text-[#2D2DC3] hover:underline">
                Create your first post →
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border-2 border-black p-6 flex justify-between items-center bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-black">{post.title}</h3>
                    {!post.published && (
                      <span className="px-2 py-1 text-xs font-bold bg-gray-200 text-gray-700 border border-black">
                        DRAFT
                      </span>
                    )}
                    {post.published && (
                      <span className="px-2 py-1 text-xs font-bold bg-green-200 text-green-700 border border-black">
                        PUBLISHED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{formatDate(post.createdAt)}</span>
                    <span>•</span>
                    <span className="font-mono">/{post.slug}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href={`/admin/posts/${post.id}`}>
                    <button className="px-4 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors">
                      Edit
                    </button>
                  </Link>
                  {post.published && (
                    <Link href={`/blog/${post.slug}`} target="_blank">
                      <button className="px-4 py-2 font-bold border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors">
                        View
                      </button>
                    </Link>
                  )}
                  <button
                    onClick={() => deletePost(post.id)}
                    className="px-4 py-2 font-bold border-2 border-red-500 bg-white text-red-500 hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}