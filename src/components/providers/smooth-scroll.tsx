"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    // Only enable Lenis on devices with a fine pointer (mice/trackpads).
    // On touch devices it hijacks the scroll loop, which on iOS Safari
    // causes the fixed nav to flicker/disappear during momentum scroll
    // and can swallow taps. Native scrolling on mobile is what we want.
    const supportsMatchMedia = typeof window.matchMedia === "function";
    const isFinePointer = supportsMatchMedia
      ? window.matchMedia("(pointer: fine) and (hover: hover)").matches
      : true;
    const isWideViewport = typeof window !== "undefined" && window.innerWidth >= 1024;
    if (!isFinePointer || !isWideViewport) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
