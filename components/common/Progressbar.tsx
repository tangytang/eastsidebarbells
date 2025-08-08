"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

interface ProgressBarComponentProps {
  max: number;
  children: ReactNode;
}

const ProgressBarComponent: React.FC<ProgressBarComponentProps> = ({
  max,
  children,
}) => {
  const [counted, setCounted] = useState(0);
  const targetElement = useRef<HTMLDivElement | null>(null);

  const startCountup = () => {
    const intervalId = setInterval(() => {
      setCounted((prevCounted) => {
        const newCounted = prevCounted + 1;
        if (newCounted >= max) {
          clearInterval(intervalId);
        }
        return newCounted;
      });
    }, 2000 / max);
  };

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      if (targetElement.current) {
        observer.unobserve(targetElement.current);
      }
    };
  }, [max]);

  return (
    <div
      ref={targetElement}
      className="value"
      style={{ width: `${counted}%`, transition: "0s" }}
    >
      {children}
    </div>
  );
};

export default ProgressBarComponent;
