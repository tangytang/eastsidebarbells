"use client";

import { useEffect, useRef } from "react";

export default function Breadcumb() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the element exists and we are in the browser
    if (parallaxRef.current) {
      import("jarallax").then(({ jarallax }) => {
        jarallax(parallaxRef.current!, {
          speed: 0.8,
          imgSize: "cover",
          imgPosition: "50% 50%",
          imgRepeat: "no-repeat",
        });
      });
    }
  }, []);

  return (
    <div className="page-title relative style-2">
      <div
        ref={parallaxRef}
        className="paralaximg"
        data-parallax="scroll"
        style={{
          backgroundImage: "url(/images/page-title/page-title-2.jpg)",
        }}
      />
    </div>
  );
}
