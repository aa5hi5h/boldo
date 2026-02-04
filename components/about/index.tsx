const AboutSection = () => {
  return (
    <section id="aboutus" className="bg-[#17171A]">
      <div className="max-w-[1536px] flex flex-col xl:gap-0 mx-auto relative md:p-[100px] px-[24px] py-[60px]">
        <header className="w-full relative">
          <span className="text-[15px] uppercase">About us</span>
          <h2 className="relative font-gb capitalize sm:pt-[0px] pt-[10px] lg:text-[96px] z-50 md:text-[70px] text-[45px] lg:leading-[100px] md:leading-[80px] leading-[50px] font-bold  ">
            <span className="relative z-10">
              We don't run ads. <br />
              We build <br /> scalable growth <br /> systems.
            </span>

            <img
              src="/assets/decoration/paint-brush.svg"
              className="absolute bottom-0 xl:w-auto w-[80%] translate-y-[40%] z-0"
              alt="paint-decoration"
            />
          </h2>

          <img
            className="absolute xl:block aspect-square object-cover w-[650px] z-10 hidden top-0 right-0"
            src="/assets/decoration/stellix-growth.svg"
            alt="Stellix-grid"
          />
        </header>

        <img
          className="w-full mt-[70px]  xl:hidden block"
          src="/assets/decoration/stellix-growth.svg"
          alt="Stellix-grid"
        />

        <div className="xl:mt-[80px] md:w-1/3 relative z-40 mt-[33px] md:text-[20px] text-[15px]">
          <p>
            At Stellix, we don't run ads. We build{" "}
            <span className="font-bold">scalable growth systems</span>. From{" "}
            <span className="font-bold">customer acquisition</span> to{" "}
            <span className="font-bold">lifetime value optimization</span>, we
            engineer marketing engines that{" "}
            <span className="font-bold">perform under pressure</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;