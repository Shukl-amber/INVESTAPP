"use client";
import { useState, useEffect } from "react";

export default function useViewport() {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(!e.matches);

    // initialize
    setIsMobile(!mql.matches);

    if (mql.addEventListener) mql.addEventListener("change", update);
    else mql.addListener(update);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", update);
      else mql.removeListener(update);
    };
  }, []);

  return { isMobile };
}
