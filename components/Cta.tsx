"use client";

import { track } from "@/lib/ga";
import { fbqTrack } from "@/lib/meta";
import { BOOKING_URL, EXPERIENCE_URL } from "@/lib/navData";
import React, { useEffect } from "react";
import YouTubeEmbed from "./YoutubeEmbed";

export default function CTA() {


    const handleClick = () => {
        track('challenge', { link_url: EXPERIENCE_URL });
        fbqTrack('challenge', { value: 0, currency: 'USD' });
        setTimeout(() => {
          window.open(EXPERIENCE_URL, '_blank', 'noopener,noreferrer');
        }, 500);
      };

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <section
      className="fixed inset-0 flex h-dvh w-screen items-center justify-center text-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center blur-2xl scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl font-poppins text-stroke-blue font-black sm:text-6xl">
          NOT JUST VIRTUAL
        </h1>
        <h2 className="text-5xl font-montserrat font-black text-white sm:text-7xl">
          TRULY REAL
        </h2>
        <div className="relative w-full overflow-hidden rounded-2xl border mt-10 border-white/10 bg-black/20">
                      <div className="aspect-[16/9]">
                        <YouTubeEmbed videoId="1_1-uJXPIRE" />
                      </div>
                    </div>
        <button
          onClick={handleClick}
          rel="noopener noreferrer"
          className="btn text-xl p-8 mt-10 btn-outline text-white rounded-3xl border-[#00bcd4]"
        >
          TAKE THE CHALLENGE
        </button>
      </div>
    </section>
  );
}
