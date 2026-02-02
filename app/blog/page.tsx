"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DotsBackground from "@/components/blog/DotsBackground";
import Navbar from "@/components/ui/navbar";
import FooterSection from "@/components/footer";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  createdAt: string;
  readTime: string;
  image: string | null;
  author: {
    name: string | null;
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "ALL", 
    ...Array.from(new Set(posts.map(p => p.category || "Uncategorized").filter(Boolean)))
  ];
  
  const filteredPosts = selectedCategory === "ALL" 
    ? posts 
    : posts.filter(p => (p.category || "Uncategorized") === selectedCategory);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-2 border-white">
        <div className="max-w-[1536px] mx-auto relative md:p-[100px] px-[24px] py-[80px]">
          <div className="max-w-[800px]">
            <p className="uppercase text-[16px] pb-[10px] font-semibold font-gb text-gray-400">
              Stellix Blog
            </p>
            <h1 className="md:text-[64px] text-[40px] font-gb font-bold leading-[1.1] mb-6 text-white">
              Growth strategies <br />
              that actually work
            </h1>
            <p className="md:text-[20px] text-[16px] font-sg text-gray-300">
              Deep dives into performance marketing, scaling frameworks, and the strategies behind our best client results.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b-2 border-white bg-black sticky top-0 z-40">
        <div className="max-w-[1536px] mx-auto md:px-[100px] px-[24px] py-6">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-gb font-bold text-sm whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative">
        <DotsBackground 
          className="absolute inset-0" 
          dotSize={4} 
          gap={40} 
          dotColor="rgba(255, 255, 255, 0.05)" 
        />

        <div className="max-w-[1536px] mx-auto relative md:p-[100px] px-[24px] py-[60px]">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[500px] bg-gray-800 animate-pulse border-2 border-white" />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl font-gb font-bold text-gray-400">
                No posts found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} formatDate={formatDate} />
              ))}
            </div>
          )}
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

interface BlogCardProps {
  post: Post;
  formatDate: (date: string) => string;
}

const BlogCard = ({ post, formatDate }: BlogCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative bg-black border-2 border-white overflow-hidden transition-all duration-500 hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 flex flex-col h-full cursor-pointer">
        {/* Image */}
        <div className="relative h-[280px] overflow-hidden bg-gray-900">
          {post.image && !imageError ? (
            <>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2D2DC3] via-[#1e96fc] to-[#0ea5e9] flex items-center justify-center">
              <span className="text-white font-gb text-5xl font-bold drop-shadow-lg">
                {post.category?.charAt(0) || "U"}
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-5 left-5 bg-white text-black px-4 py-2 text-xs font-bold font-gb uppercase tracking-wider transform transition-all duration-300 group-hover:bg-[#2D2DC3] group-hover:text-white group-hover:scale-105">
            {post.category}
          </div>

          <div className="absolute top-0 right-0 w-16 h-16 bg-[#1e96fc]/20 transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="p-[28px] flex flex-col flex-grow bg-black relative">
          <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2D2DC3] to-[#1e96fc] group-hover:w-full transition-all duration-500" />

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-sg font-medium">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <span className="text-gray-600">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold font-gb mb-4 leading-[1.2] text-white group-hover:text-[#1e96fc] transition-colors duration-300 line-clamp-3">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[15px] md:text-base font-sg text-gray-300 leading-relaxed mb-6 flex-grow line-clamp-3">
            {post.excerpt}
          </p>

          {/* Read More */}
          <div className="inline-flex items-center gap-2 text-sm font-bold font-gb text-white group-hover:text-[#1e96fc] transition-all duration-300 mt-auto pt-4 border-t border-gray-800">
            <span className="relative">
              Read Full Article
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1e96fc] group-hover:w-full transition-all duration-300" />
            </span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-[#2D2DC3] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-l-[50px] group-hover:border-b-[50px]">
          <div className="absolute bottom-[-35px] right-[-5px] w-6 h-6 bg-black rounded-full" />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D2DC3]/10 via-transparent to-[#1e96fc]/10" />
        </div>
      </article>
    </Link>
  );
};