import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function RouteTransition({ children }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      const cards = Array.from(
        container.querySelectorAll("[data-animate-card]")
      ).slice(0, 12);

      gsap.set(container, { autoAlpha: 0, y: 14 });
      gsap.to(container, {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
        clearProps: "opacity,visibility,transform",
      });

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            delay: 0.08,
            stagger: 0.04,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
