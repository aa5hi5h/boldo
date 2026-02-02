"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import FooterSection from "@/components/footer";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  createdAt: string;
  readTime: string;
  image: string | null;
  author: {
    name: string | null;
  };
}

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug as string);
    }
  }, [params.slug]);

  const fetchPost = async (slug: string) => {
    try {
      const response = await fetch(`/api/posts/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  };

  if (loading) {
    return (
      <main className="bg-black min-h-screen">
        <Navbar />
        <div className="max-w-[900px] mx-auto px-[24px] py-[100px]">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded w-1/4 mb-8" />
            <div className="h-16 bg-gray-800 rounded w-full mb-4" />
            <div className="h-4 bg-gray-800 rounded w-3/4 mb-8" />
            <div className="h-[400px] bg-gray-800 rounded mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-800 rounded" />
              <div className="h-4 bg-gray-800 rounded" />
              <div className="h-4 bg-gray-800 rounded w-5/6" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="bg-black min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-gb font-bold mb-4 text-white">Post Not Found</h1>
          <Link href="/blog" className="text-[#1e96fc] font-sg font-bold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Article Container */}
      <div className="max-w-[900px] mx-auto px-[24px] md:pt-[140px] pt-[80px] pb-[80px]">
        
        {/* Back Button */}
        <div className="flex items-center gap-4">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-sg font-medium text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Category */}
        <div className="inline-block bg-[#1e96fc]  text-white px-4 py-1.5 text-xs font-bold font-gb uppercase tracking-wider mb-6">
          {post.category}
        </div>

        </div>

        {/* Title */}
        <h1 className="md:text-[56px] text-[36px] font-gb font-bold leading-[1.1] mb-6 text-white">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-sg text-gray-400 mb-10 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span>{formatDate(post.createdAt)}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Excerpt */}
        <div className="text-xl font-sg text-gray-300 leading-relaxed mb-10 pb-10 border-b border-gray-800">
          {post.excerpt}
        </div>

        {/* Content */}
        <article 
          className="prose prose-lg prose-invert max-w-none font-sg
            prose-headings:font-gb prose-headings:font-bold prose-headings:text-white
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#1e96fc] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-300 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#1e96fc] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-400
            prose-code:bg-gray-900 prose-code:text-[#1e96fc] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-pre:text-white prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to Blog Button */}
        <div className="mt-16 pt-10 border-t border-gray-800 text-center">
          <Link href="/blog">
            <button className="bg-white text-black px-8 py-3 font-sg font-semibold hover:bg-gray-200 transition-colors">
              ← View All Articles
            </button>
          </Link>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}