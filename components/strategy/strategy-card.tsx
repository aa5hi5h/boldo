"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StrategyCardProps {
  number: string;
  label: string;
  title: string;
  description: string;
  details?: string[];
  linkText?: string;
  linkHref?: string;
}

const StrategyCard = ({
  number,
  label,
  title,
  description,
  details,
}: StrategyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

        {details && details.length > 0 && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-white/60 hover:text-white transition-colors duration-200"
            >
              <span>{isExpanded ? "Show less" : "What's included"}</span>
              <motion.svg
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 pt-2">
                    {details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="text-white/70 text-[14px] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#1e96fc] mt-1.5 flex-shrink-0">
                          •
                        </span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
};

export default StrategyCard;