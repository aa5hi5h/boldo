"use client";

import { useEffect, useState } from "react";
import DotsBackground from "../blog/DotsBackground";
import Link from "next/link";

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

const BlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      // Get only the first 3 posts for the homepage
      setPosts(data.slice(0, 3));
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <section id="news" className="bg-white text-black relative overflow-hidden">
      {/* Background Pattern - Using DotsBackground Component */}
      <DotsBackground 
        className="absolute inset-0" 
        dotSize={4} 
        gap={40} 
        dotColor="rgba(51, 65, 85, 0.2)" 
      />

      <div className="md:p-[100px] px-[24px] py-[60px] mx-auto max-w-[1536px] relative">
        <div className="tracking-[-1%] flex md:flex-row flex-col justify-between md:items-center mb-[60px]">
          <div className="font-gb">
            <p className="uppercase text-[16px] pb-[10px] font-semibold">
              Latest Insights
            </p>

            <h2 className="md:text-[54px] tracking-tight text-[32px] font-bold leading-[100%]">
              Growth strategies <br className="md:inline-block hidden" />
              that actually work
            </h2>
          </div>

          <div className="md:w-[640px] font-sg w-full md:text-[20px] mt-[24px] md:leading-[24px] leading-[18px] md:mt-0 text-[15px]">
            <p>
              Deep dives into{" "}
              <span className="font-bold">performance marketing</span>,{" "}
              <span className="font-bold">scaling frameworks</span>, and the
              strategies behind our best client results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] relative">
          {loading ? (
            // Loading skeleton
            [1, 2, 3].map((i) => (
              <div key={i} className="h-[500px] bg-gray-200 animate-pulse border-2 border-black" />
            ))
          ) : posts.length === 0 ? (
            <div className="col-span-3 text-center py-20">
              <p className="text-xl font-gb font-bold text-gray-600">
                No posts available yet.
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <BlogCard key={post.id} post={post} formatDate={formatDate} />
            ))
          )}
        </div>

        <div className="mt-[60px] text-center">
          <Link href="/blog">
            <button className="font-sg translate-x-1 font-medium group relative text-white px-6 md:text-lg py-3">
              <div className="absolute -bottom-1 -left-1 w-full h-full bg-black z-0"></div>
              <div className="absolute group-active:translate-y-1 group-active:-translate-x-1 transition-all inset-0 bg-[#2D2DC3] z-10"></div>
              <span className="relative inline-block transition-all duration-300 z-20 group-active:-translate-x-1 group-active:translate-y-1">
                View All Articles
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface BlogCardProps {
  post: Post;
  formatDate: (date: string) => string;
}

const BlogCard = ({ post, formatDate }: BlogCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative bg-white border-2 border-black overflow-hidden transition-all duration-500 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 flex flex-col h-full cursor-pointer">
        {/* Image with Overlay Effect */}
        <div className="relative h-[280px] overflow-hidden bg-gray-200">
          {post.image && !imageError ? (
            <>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                onError={() => setImageError(true)}
              />
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2D2DC3] via-[#1e96fc] to-[#0ea5e9] flex items-center justify-center">
              <span className="text-white font-gb text-5xl font-bold drop-shadow-lg">
                {post.category?.charAt(0) || "U"}
              </span>
            </div>
          )}

          {/* Category Badge with Animation */}
          <div className="absolute top-5 left-5 bg-black text-white px-4 py-2 text-xs font-bold font-gb uppercase tracking-wider transform transition-all duration-300 group-hover:bg-[#2D2DC3] group-hover:scale-105">
            {post.category || "Uncategorized"}
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#1e96fc]/20 transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500" />
        </div>

        {/* Content with Better Spacing */}
        <div className="p-[28px] flex flex-col flex-grow bg-white relative">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#2D2DC3] to-[#1e96fc] group-hover:w-full transition-all duration-500" />

          {/* Meta Information */}
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 font-sg font-medium">
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title with Better Typography */}
          <h3 className="text-xl md:text-2xl font-bold font-gb mb-4 leading-[1.2] text-gray-900 group-hover:text-[#2D2DC3] transition-colors duration-300 line-clamp-3">
            {post.title}
          </h3>

          {/* Excerpt with Line Clamp */}
          <p className="text-[15px] md:text-base font-sg text-gray-600 leading-relaxed mb-6 flex-grow line-clamp-3">
            {post.excerpt}
          </p>

          {/* Enhanced Read More Link */}
          <div className="inline-flex items-center gap-2 text-sm font-bold font-gb text-black group-hover:text-[#2D2DC3] transition-all duration-300 mt-auto pt-4 border-t border-gray-100">
            <span className="relative">
              Read Full Article
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2D2DC3] group-hover:w-full transition-all duration-300" />
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

        {/* Animated Corner Accent */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-[#2D2DC3] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-l-[50px] group-hover:border-b-[50px]">
          <div className="absolute bottom-[-35px] right-[-5px] w-6 h-6 bg-white rounded-full" />
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D2DC3]/5 via-transparent to-[#1e96fc]/5" />
        </div>
      </article>
    </Link>
  );
};

export default BlogSection;