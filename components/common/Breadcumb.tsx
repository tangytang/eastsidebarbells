"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

interface BreadcumbProps {
  pageTitle?: string;
  pageName?: string;
  parentPage?: string;
  imgSrc?: string;
}

export default function Breadcumb({
  pageTitle = "About Us",
  pageName = "About Us",
  parentPage = "Pages",
  imgSrc = "/images/page-title/page-title-6.jpg",
}: BreadcumbProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxRef.current) {
      import("jarallax").then(({ jarallax }) => {
        jarallax(parallaxRef.current!, {
          speed: 0.8,
          imgSize: "cover",
          imgPosition: "50% 0%",
          imgRepeat: "no-repeat",
        });
      });
    }
  }, []);

  return (
    <div className="page-title relative">
      <div
        ref={parallaxRef}
        className="paralaximg"
        data-parallax="scroll"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="title">{pageTitle}</h3>
              <ul className="breadcrumb">
                <li>
                  <Link href="/">Homepage</Link>
                </li>
                {parentPage && <li>{parentPage}</li>}
                <li>{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
