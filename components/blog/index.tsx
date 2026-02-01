"use client";

import { useState } from "react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Why Creative Velocity Beats Creative Quality in Performance Marketing",
      excerpt:
        "In high-volume paid social campaigns, iteration speed often matters more than perfection. Learn how rapid testing cycles compound into massive performance gains.",
      category: "PERFORMANCE",
      date: "Jan 28, 2026",
      readTime: "5 min read",
      image: "/assets/blog/blog-1.webp",
    },
    {
      title: "The STELLAR Framework: Engineering Growth at Scale",
      excerpt:
        "A deep dive into our proprietary methodology for building sustainable growth systems that perform under pressure and scale across markets.",
      category: "FRAMEWORK",
      date: "Jan 25, 2026",
      readTime: "8 min read",
      image: "/assets/blog/blog-2.webp",
    },
    {
      title: "From $10K to $1M/Month: Scaling Paid Social Without Breaking Attribution",
      excerpt:
        "Most brands hit scaling walls at $50K-$100K/month. Here's how we engineer tracking infrastructure and campaign architecture to break through.",
      category: "CASE STUDY",
      date: "Jan 22, 2026",
      readTime: "10 min read",
      image: "/assets/blog/blog-3.webp",
    },
  ];

  return (
    <section className="bg-white text-black relative overflow-hidden">
      {/* Background Pattern - Dots only */}
      <div className="absolute inset-0 opacity-100">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="blog-dots"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="0" cy="0" r="3" fill="#334155" opacity="0.4" />
              <circle cx="25" cy="25" r="2.5" fill="#1e293b" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-dots)" />
        </svg>
      </div>

      {/* Additional layered dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 3px 3px, #0f172a 3px, transparent 0)",
          backgroundSize: "80px 80px",
        }}
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
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>

        <div className="mt-[60px] text-center">
          <button className="font-sg translate-x-1 font-medium group relative text-white px-6 md:text-lg py-3">
            <div className="absolute -bottom-1 -left-1 w-full h-full bg-black z-0"></div>
            <div className="absolute group-active:translate-y-1 group-active:-translate-x-1 transition-all inset-0 bg-[#2D2DC3] z-10"></div>
            <a
              href="/blog"
              className="relative inline-block transition-all duration-300 z-20 group-active:-translate-x-1 group-active:translate-y-1"
            >
              View All Articles
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group relative bg-[#f8f8f8] hover:bg-white border-2 border-black overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden bg-gray-200">
        {!imageError ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#2D2DC3] to-[#1e96fc] flex items-center justify-center">
            <span className="text-white font-gb text-4xl font-bold">
              {post.category.charAt(0)}
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold font-gb">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-[24px] flex flex-col flex-grow">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-600 mb-3 font-sg">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold font-gb mb-3 leading-tight group-hover:text-[#2D2DC3] transition-colors duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm md:text-base font-sg text-gray-700 leading-relaxed mb-4 flex-grow">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <a
          href={`/blog/${index + 1}`}
          className="inline-flex items-center gap-2 text-sm font-bold font-gb text-black hover:text-[#2D2DC3] transition-colors duration-300 group/link"
        >
          <span>Read Article</span>
          <svg
            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[30px] border-r-transparent border-b-[30px] border-b-[#1e96fc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
};

export default BlogSection;