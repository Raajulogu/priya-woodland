import React from "react";
import Link from "next/link";
import { businessConfig } from "@/config/business";

interface LogoProps {
  variant?: "horizontal" | "compact" | "mark";
  theme?: "light" | "dark";
  className?: string;
  isLink?: boolean;
}

export function Logo({
  variant = "horizontal",
  theme = "light",
  className = "",
  isLink = true,
}: LogoProps) {
  const isDark = theme === "dark";

  const textColor = isDark ? "#F7F4EE" : "#513B2D";
  const subColor = isDark ? "#DED7CA" : "#77765C";
  const ringPrimary = isDark ? "#F7F4EE" : "#513B2D";
  const ringSecondary = isDark ? "#DED7CA" : "#80664E";
  const ringAccent = isDark ? "#DED7CA" : "#77765C";

  const markSvg = (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-hidden="true"
    >
      {/* Outer organic ring */}
      <path
        d="M 32 4 C 47.5 4, 60 16.5, 60 32 C 60 47.5, 47.5 60, 32 60 C 16.5 60, 4 47.5, 4 32 C 4 16.5, 16.5 4, 32 4 Z"
        stroke={ringPrimary}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Middle ring with grain dashed texture */}
      <path
        d="M 32 11 C 43.6 11, 53 20.4, 53 32 C 53 43.6, 43.6 53, 32 53 C 20.4 53, 11 43.6, 11 32 C 11 20.4, 20.4 11, 32 11 Z"
        stroke={ringSecondary}
        strokeWidth="1.6"
        strokeDasharray="2 1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Inner grain ring */}
      <path
        d="M 32 18 C 39.7 18, 46 24.3, 46 32 C 46 39.7, 39.7 46, 32 46 C 24.3 46, 18 39.7, 18 32 C 18 24.3, 24.3 18, 32 18 Z"
        stroke={ringPrimary}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Heartwood center */}
      <circle
        cx="32"
        cy="32"
        r="6.5"
        stroke={ringAccent}
        strokeWidth="1.6"
        fill={ringPrimary}
        fillOpacity={isDark ? "0.2" : "0.12"}
      />
      <circle cx="32" cy="32" r="2.8" fill={ringPrimary} />
      {/* Cardinal craft markings */}
      <line x1="32" y1="4" x2="32" y2="8" stroke={ringSecondary} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="60" y1="32" x2="56" y2="32" stroke={ringSecondary} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="32" y1="60" x2="32" y2="56" stroke={ringSecondary} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="4" y1="32" x2="8" y2="32" stroke={ringSecondary} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );

  const content = (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {markSvg}
      {variant !== "mark" && (
        <div className="flex flex-col">
          <span
            className="font-serif font-semibold tracking-[0.14em] text-lg sm:text-xl leading-tight transition-colors"
            style={{ color: textColor }}
          >
            PRIYA WOODLAND
          </span>
          {variant === "horizontal" && (
            <div className="flex items-center gap-2 mt-0.5">
              <span
                className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-sans font-medium"
                style={{ color: subColor }}
              >
                AUROVILLE • HANDCRAFTED WOOD
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (!isLink) {
    return content;
  }

  return (
    <Link
      href="/"
      aria-label={`${businessConfig.name} - Home`}
      className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#513B2D] rounded-sm"
    >
      {content}
    </Link>
  );
}
