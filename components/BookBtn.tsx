"use client";

import { BOOKING_URL } from "@/lib/navData";
import { track } from "@/lib/ga";

export default function BookGameButton({
  className = "",
  label = "BOOK A GAME",
  source = "header",
}: {
  className?: string;
  label?: string;
  source?: string; // where the CTA lives (header/hero/footer)
}) {
  function handleClick() {
    try {
      track?.("cta_click", { source, label });
    } catch {}
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      onClick={handleClick}
      className={`btn btn-outline rounded-4xl mt-4 text-xl p-6 border-[#00bcd4] ${className}`}
    >
      {label}
    </button>
  );
}
