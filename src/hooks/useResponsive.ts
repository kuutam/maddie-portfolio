"use client";

import { useState, useEffect } from "react";

export function useResponsive() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return {
    isMobile: width < 768,       // 👈 sin el w > 0, 0 < 768 = true = mobile por defecto
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    isReady: width > 0,
    width,
  };
}