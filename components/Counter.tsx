"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    resetServerCounter?: () => Promise<void>;
  }
}

export default function Counter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Increment on page load (server-side)
    fetch("/api/visits", { method: "POST" })
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => setCount(0));

    // Console command to reset
    window.resetServerCounter = async () => {
      const res = await fetch("/api/visits", { method: "GET" });
      const data = await res.json();
      setCount(data.count);
      console.log("✅ Server Count: ", data.count);
    };

    // Optional polling to reflect updates from other users/tabs
    const id = setInterval(async () => {
      try {
        const r = await fetch("/api/visits", { method: "GET", cache: "no-store" });
        const d = await r.json();
        setCount(d.count);
      } catch {}
    }, 5000);

    return () => {
      clearInterval(id);
      delete window.resetServerCounter;
    };
  }, []);

  return <p className="text-[10px]">{count ?? "…"}</p>;
}
