interface StrategyCardProps {
    number: string;
    label: string;
    title: string;
    description: string;
    linkText?: string;
    linkHref?: string;
  }
  
  const StrategyCard = ({
    number,
    label,
    title,
    description,
  }: StrategyCardProps) => {
    return (
      <div className="relative md:w-[284px] w-full mx-auto flex flex-col justify-between">
        <span className="text-white/80 text-[14px] pb-[20px] font-medium border-b border-neutral-600 tracking-wide">
          {number}. {label}
        </span>
  
        <div className="space-y-6 pt-[20px]">
          <h2 className="text-white md:text-[25px] text-[20px] font-bold leading-tight">
            {title}
          </h2>
  
          <p className="text-white/80 text-[16px] leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  export default StrategyCard;