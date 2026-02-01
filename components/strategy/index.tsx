import StrategyCard from "./strategy-card";

const strategies = [
  {
    number: "1",
    label: "PAID GROWTH",
    title: "Paid Social Growth",
    description:
      "We build, test, and scale paid social campaigns designed for aggressive, sustainable growth across all major platforms.",
    details: [
      "Full-funnel Meta & TikTok ad strategy",
      "Scalable campaign structures",
      "Creative testing systems",
      "Budget scaling frameworks",
      "Geo expansion playbooks",
      "CPA & ROAS optimization"
    ]
  },
  {
    number: "2",
    label: "CREATIVE",
    title: "Performance Creative Systems",
    description:
      "In high-competition markets, creative is the targeting. We develop data-backed ad concepts designed to stop scrolls and drive action.",
    details: [
      "Creative strategy & angles",
      "Ad scripting & hooks",
      "Static + motion ad direction",
      "UGC-style performance concepts",
      "Rapid creative testing cycles",
      "Performance-based creative iteration"
    ]
  },
  {
    number: "3",
    label: "CONVERSION",
    title: "Conversion & Funnel Optimization",
    description:
      "Scaling traffic means nothing if the funnel leaks. We optimize every step of the journey from click to signup to revenue.",
    details: [
      "Landing page performance audits",
      "Conversion rate optimization (CRO)",
      "Funnel drop-off analysis",
      "Offer positioning tests",
      "UX adjustments for higher conversions"
    ]
  },
  {
    number: "4",
    label: "INTELLIGENCE",
    title: "Tracking & Performance Intelligence",
    description:
      "Growth decisions should be based on real data, not platform guesses. We build tracking infrastructure that tells the truth.",
    details: [
      "Pixel & event tracking setup",
      "Conversion API alignment",
      "Funnel tracking audits",
      "Data validation & performance reporting",
      "Insight-driven optimization loops"
    ]
  },
  {
    number: "5",
    label: "EXPANSION",
    title: "Global Market Scaling",
    description:
      "We help brands move from single-market success to multi-geo performance growth with localized strategies that scale.",
    details: [
      "New market launch strategy",
      "Localization of creatives",
      "Geo-specific performance testing",
      "Budget allocation across markets",
      "Scaling winners internationally"
    ]
  },
  {
    number: "6",
    label: "SOCIAL",
    title: "Social Media Management",
    description:
      "Not vanity posting - strategic social presence that supports paid growth and builds brand authority across platforms.",
    details: [
      "Content strategy & monthly calendars",
      "Brand voice development",
      "Post design & captions",
      "Reel & short-form video direction",
      "Community engagement guidance",
      "Organic + paid synergy planning"
    ]
  },
];

const StrategySection = () => {
  return (
    <section
      id="services"
      className="overflow-hidden h-auto relative bg-[#161619]"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "13px 13px",
        }}
      />

      <div className="max-w-[1536px] relative mx-auto md:px-[100px] px-[24px] md:py-[150px] gap-[50px] py-[60px] grid-cols-1 grid md:grid-cols-2">
        <img
          className="absolute z-[0] top-[68%] lg:block hidden left-[118px] scale-[1.05] -translate-y-1/2 "
          src="/assets/decoration/decoration-text.svg"
          alt="decoration-text"
        />

        <div className="w-fit">
          <div className="w-fit">
            <p className="uppercase font-gb text-[16px] font-semibold pb-[10px]">
              Stellix Services
            </p>

            <h2 className="md:text-[50px] w-fit font-gb text-[32px] mt-[24px] font-bold leading-tight">
              Performance-driven{" "}
              <br className="md:block hidden" />
              growth solutions{" "}
              <br className="md:block hidden" />
              engineered for{" "}
              <br className="md:block hidden" />
              scale & speed.
            </h2>
          </div>

          <button className="font-sg translate-x-1 mt-8 group relative text-black font-semibold px-4 text-lg py-2">
            <div className="absolute -bottom-1 -left-1 w-full h-full bg-black z-0"></div>
            <div className="absolute group-active:translate-y-1 group-active:-translate-x-1 transition-all inset-0 bg-white z-10"></div>
            <a
              href="#contact"
              className="relative inline-block transition-all  duration-300 z-20 group-active:-translate-x-1 group-active:translate-y-1"
            >
              Get Started
            </a>
          </button>
        </div>

        <div className="lg:w-[600px] flex-1 flex-shrink-0 lg:pt-[0px] pt-[50px] w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[60px] gap-[30px] w-fit  ">
            {strategies.map((strategy, index) => (
              <StrategyCard
                key={index}
                label={strategy.label}
                number={strategy.number}
                title={strategy.title}
                description={strategy.description}
                details={strategy.details}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;