"use client";

import { useEffect, useState } from "react";

// Extend Window interface to include resetCounter
declare global {
  interface Window {
    resetCounter?: () => void;
  }
}

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Initialize counter
    const storedValue = localStorage.getItem("visitCount");
    const newValue = storedValue ? parseInt(storedValue, 10) + 1 : 1;
    localStorage.setItem("visitCount", newValue.toString());
    setCount(newValue);

    // Listen for localStorage changes
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "visitCount" && event.newValue) {
        setCount(parseInt(event.newValue, 10));
      }
    };
    window.addEventListener("storage", handleStorage);

    // Expose reset function to console
    window.resetCounter = () => {
      localStorage.setItem("visitCount", "0");
      setCount(0);
      console.log("✅ Counter reset to 0");
    };

    return () => {
      window.removeEventListener("storage", handleStorage);
      delete window.resetCounter;
    };
  }, []);

  return <p className="">{count}</p>;
}
