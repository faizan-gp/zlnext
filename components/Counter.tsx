"use client"; 

import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    // Initialize counter
    let storedValue = localStorage.getItem("visitCount");
    let newValue = storedValue ? parseInt(storedValue, 10) + 1 : 1;
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
    (window as any).resetCounter = () => {
      localStorage.setItem("visitCount", "0");
      setCount(0);
      console.log("✅ Counter reset to 0");
    };

    return () => {
      window.removeEventListener("storage", handleStorage);
      delete (window as any).resetCounter;
    };
  }, []);

  return (
      <p className="">{count}</p>
  );
}