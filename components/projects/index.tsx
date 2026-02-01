import { JSX } from "react";

interface MethodItem {
  letter: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const StellarMethodSection = () => {
  const methodItems: MethodItem[] = [
    {
      letter: "S",
      title: "Scale Testing",
      description:
        "Rapid experimentation framework to identify winning strategies and scale what works across channels.",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 5L35 20H45L37 28L41 43L30 35L19 43L23 28L15 20H25L30 5Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M30 10V15M30 45V50M10 30H15M45 30H50" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      letter: "T",
      title: "Tracking Architecture",
      description:
        "Precise analytics infrastructure that captures every touchpoint and optimizes attribution models.",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="15" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M10 25H50M20 15V45M30 15V45M40 15V45" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <circle cx="25" cy="35" r="3" fill="currentColor" />
          <circle cx="35" cy="30" r="3" fill="currentColor" />
          <path d="M25 35L35 30" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      letter: "E",
      title: "Experiment Velocity",
      description:
        "High-speed testing cycles that compress months of learning into weeks through systematic iteration.",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path d="M30 15V30L40 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <path d="M40 20L45 15M45 15L40 10M45 15H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      letter: "L",
      title: "Lifecycle Optimization",
      description:
        "Strategic nurturing at every customer stage from awareness to advocacy, maximizing lifetime value.",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="30" cy="30" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
          <path
            d="M30 10L32 18L40 16L35 24L43 28L35 32L40 40L32 38L30 46L28 38L20 40L25 32L17 28L25 24L20 16L28 18L30 10Z"
            fill="currentColor"
            opacity="0.2"
          />
        </svg>
      ),
    },
    {
      letter: "L",
      title: "Landing Page Intelligence",
      description:
        "Conversion-optimized pages engineered with behavioral psychology and data-driven design principles.",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="12" y="10" width="36" height="40" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="18" y="16" width="24" height="4" fill="currentColor" opacity="0.3" />
          <rect x="18" y="24" width="18" height="3" fill="currentColor" opacity="0.5" />
          <rect x="18" y="30" width="20" height="3" fill="currentColor" opacity="0.5" />
          <rect x="18" y="38" width="14" height="6" rx="1" fill="currentColor" />
          <path d="M35 41L38 44L44 36" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      letter: "A",
      title: "Audience Modeling",
      description:
        "Sophisticated segmentation and targeting using behavioral data to reach high-intent prospects.",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="30" cy="22" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d="M15 45C15 37 21 32 30 32C39 32 45 37 45 45"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="18" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
          <circle cx="42" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M8 42C8 38 11 35 15 35" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <path d="M52 42C52 38 49 35 45 35" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        </svg>
      ),
    },
    {
      letter: "R",
      title: "Revenue Expansion",
      description:
        "Strategic upsell, cross-sell, and retention programs that compound customer value exponentially.",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 45L18 35L26 40L34 28L42 32L50 15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M44 15H50V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="35" r="2.5" fill="currentColor" />
          <circle cx="26" cy="40" r="2.5" fill="currentColor" />
          <circle cx="34" cy="28" r="2.5" fill="currentColor" />
          <circle cx="42" cy="32" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white text-black relative overflow-hidden">
      {/* Enhanced Background Pattern with larger dots only */}
      <div className="absolute inset-0 opacity-100">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="stellar-dots"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              {/* Large dots at intersections */}
              <circle cx="0" cy="0" r="3" fill="#334155" opacity="0.4" />
              <circle cx="25" cy="25" r="2.5" fill="#1e293b" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stellar-dots)" />
        </svg>
      </div>

      {/* Additional layered dot pattern for more depth */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 3px 3px, #0f172a 3px, transparent 0)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="md:p-[100px] px-[24px] py-[60px] mx-auto max-w-[1536px] relative">
        <div className="tracking-[-1%] flex md:flex-row flex-col justify-between md:items-center">
          <div className="font-gb">
            <p className="uppercase text-[16px] pb-[10px] font-semibold">
              The Stellix Method
            </p>

            <h2 className="md:text-[54px] tracking-tight text-[32px] font-bold leading-[100%]">
              The STELLAR <br className="md:inline-block hidden" />
              Framework
            </h2>
          </div>

          <div className="md:w-[640px] font-sg w-full md:text-[20px] mt-[24px] md:leading-[24px] leading-[18px] md:mt-0 text-[16px]">
            <p>
              A{" "}
              <span className="font-bold">
                proven methodology
              </span>{" "}
              engineered for{" "}
              <span className="font-bold">rapid, sustainable growth</span> that
              transforms brands into category leaders.
            </p>
          </div>
        </div>

        <div className="grid pt-[60px] grid-cols-1 md:grid-cols-3 gap-[30px] py-8">
          {methodItems.map((item, index) => (
            <div
              key={`${item.letter}-${index}`}
              className="group relative bg-[#f8f8f8] hover:bg-white border-2 border-black h-[280px] md:h-[320px] overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Letter Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-black text-white flex items-center justify-center font-gb font-bold text-2xl">
                {item.letter}
              </div>

              <div className="p-[24px] md:p-[32px] h-full flex flex-col">
                {/* Icon */}
                <div className="text-black mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold font-gb mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base font-sg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-[#2D2DC3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StellarMethodSection;