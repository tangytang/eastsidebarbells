"use client";

import Link from "next/link";
import { collections } from "@/data/collections";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface CollectionsProps {
  parentClass?: string;
}

export default function Collections({
  parentClass = "flat-spacing-2 pt-0",
}: CollectionsProps) {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const offsetX = 20;
    const offsetY = 20;

    containerRefs.current.forEach((container) => {
      if (!container) return;

      const hoverImage = container.querySelector<HTMLElement>(".hover-image");
      if (!hoverImage) return;

      const handleMouseMove = (e: MouseEvent) => {
        hoverImage.style.top = `${e.clientY + offsetY}px`;
        hoverImage.style.left = `${e.clientX + offsetX}px`;
      };

      const handleMouseEnter = () => {
        hoverImage.style.transform = "scale(1)";
        hoverImage.style.opacity = "1";
      };

      const handleMouseLeave = () => {
        hoverImage.style.transform = "scale(0)";
        hoverImage.style.opacity = "0";
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup on unmount
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section className={parentClass}>
      <div className="section-box-cls">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section style-white">
                <h3 className="wow fadeInUp">
                  Discover Our Signature Interior Collections
                </h3>
                <p
                  className="text-body-default wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Explore our carefully crafted interior design collections,
                  each tailored to bring elegance and <br />
                  functionality to your spaces.
                </p>
              </div>
              <ul className="tab-banner">
                {collections.map((item, index) => (
                  <li
                    key={index}
                    className="nav-tab-item wow fadeInUp"
                    {...(item.delay ? { "data-wow-delay": item.delay } : {})}
                  >
                    <div
                      className="nav-tab-link hover-cursor-img"
                      ref={(el) => {
                        containerRefs.current[index] = el;
                      }}
                    >
                      <h3 className="title text-line-clamp-1">
                        <span className="text-title">{item.id}.</span>
                        {item.title}
                      </h3>
                      <Link href={`/shop-default`} className="arr-link">
                        <span className="text-button-small text-more">
                          View More
                        </span>
                        <i className="icon icon-arrow-up-right" />
                      </Link>
                      <div className="hover-image">
                        <Image
                          alt="Hover Image"
                          src={item.image}
                          width={441}
                          height={242}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
