import Navbar from "@/components/ui/navbar";
import FooterSection from "@/components/footer";
import { gotham_font, spaceGrotesk } from "@/config/font";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How We Scaled a SaaS Brand from $0 to $500K MRR in 8 Months",
    excerpt:
      "A deep dive into the exact paid social strategy, creative testing framework, and funnel optimization tactics we used to achieve explosive growth.",
    category: "Case Study",
    readTime: "8 min read",
    date: "Jan 28, 2026",
    author: "Stellix Team",
    image: "/assets/blog/blog-1.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "The STELLAR Framework: Engineering Growth Systems That Scale",
    excerpt:
      "Why most agencies chase tactics while we build systems. Learn the 7-step framework behind every successful Stellix campaign.",
    category: "Strategy",
    readTime: "12 min read",
    date: "Jan 25, 2026",
    author: "Stellix Team",
    image: "/assets/blog/blog-2.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Creative is the New Targeting: Meta Ads in 2026",
    excerpt:
      "Platform privacy changes killed traditional targeting. Here's how performance creative became the most important lever for scaling Meta ads.",
    category: "Paid Social",
    readTime: "6 min read",
    date: "Jan 22, 2026",
    author: "Stellix Team",
    image: "/assets/blog/blog-3.jpg",
  },
  {
    id: "4",
    title: "From Single Market to Global: Scaling Across 12 Countries",
    excerpt:
      "The exact playbook we used to take a US-only brand international, including localization strategies and budget allocation frameworks.",
    category: "Expansion",
    readTime: "10 min read",
    date: "Jan 20, 2026",
    author: "Stellix Team",
    image: "/assets/blog/blog-4.jpg",
  },
  {
    id: "5",
    title: "Conversion Rate Optimization: The 20% That Drives 80% of Results",
    excerpt:
      "Traffic is expensive. Here are the high-impact CRO tests that consistently lift conversion rates by 30-50% across our client portfolio.",
    category: "Conversion",
    readTime: "7 min read",
    date: "Jan 18, 2026",
    author: "Stellix Team",
    image: "/assets/blog/blog-5.jpg",
  },
  {
    id: "6",
    title: "Why Your Tracking Setup is Lying to You (And How to Fix It)",
    excerpt:
      "Attribution is broken. Learn how to build a tracking infrastructure that actually tells you where your revenue is coming from.",
    category: "Analytics",
    readTime: "9 min read",
    date: "Jan 15, 2026",
    author: "Stellix Team",
    image: "/assets/blog/blog-6.jpg",
  },
];

const BlogPage = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main
      className={`${gotham_font.variable} ${spaceGrotesk.variable} overflow-hidden bg-black text-white`}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="bg-black pt-[140px] pb-[80px] md:px-24 px-4">
        <div className="max-w-[1536px] mx-auto">
          <div className="relative">
            <p className="uppercase font-gb text-[16px] font-semibold pb-[10px] text-white/80">
              Stellix Insights
            </p>
            <h1 className="relative md:text-7xl text-5xl mt-4 font-gb font-bold">
              <span className="z-30 relative">Growth Playbooks</span>
              <div className="inset-0 absolute bg-white z-20" />
              <div className="inset-0 absolute bg-[#1e96fc] translate-x-2 translate-y-2 z-10" />
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 font-sg max-w-2xl">
              Deep dives, case studies, and frameworks from the frontlines of
              performance marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Dot Pattern Background */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Featured Posts */}
      <section className="bg-[#161619] relative py-[80px] md:px-24 px-4">
        <div className="max-w-[1536px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-gb font-bold mb-12">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.id}`}
                className="group relative bg-white/5 border-2 border-white/10 hover:border-[#1e96fc] transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-[#2D2DC3] to-[#1e96fc] relative overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-gb text-2xl">
                    Featured
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <span className="px-3 py-1 bg-[#1e96fc]/20 text-[#1e96fc] font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-gb font-bold mb-4 group-hover:text-[#1e96fc] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 font-sg leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#1e96fc] font-medium">
                    <span>Read article</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="bg-black relative py-[80px] md:px-24 px-4">
        <div className="max-w-[1536px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-gb font-bold mb-12">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.id}`}
                className="group relative bg-white/5 border-2 border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-gb text-xl">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-white/60 mb-3">
                    <span className="px-2 py-1 bg-white/10 text-white/80 font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-gb font-bold mb-3 group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/60 font-sg text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-sm text-white/50">
                    {post.date}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D2DC3] relative py-[80px] md:px-24 px-4">
        <div className="max-w-[1536px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-gb font-bold mb-6">
            Ready to Build Your Growth Engine?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's turn these strategies into results for your brand.
          </p>
          <button className="font-sg translate-x-1 font-medium group relative text-white px-6 md:text-lg py-3">
            <div className="absolute -bottom-1 -left-1 w-full h-full bg-white z-0"></div>
            <div className="absolute group-active:translate-y-1 group-active:-translate-x-1 transition-all inset-0 bg-black z-10"></div>
            <a
              href="#contact"
              className="relative inline-block transition-all duration-300 z-20 group-active:-translate-x-1 group-active:translate-y-1"
            >
              Book a Strategy Call
            </a>
          </button>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default BlogPage;