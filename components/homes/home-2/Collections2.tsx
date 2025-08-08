import { bannerData } from "@/data/collections";
import React from "react";
import Image from "next/image";
export default function Collections2() {
  return (
    <section>
      <div className="flat-img-with-text-5">
        {bannerData.map((banner, index) => (
          <div className="collection-position hover-img style-6" key={index}>
            <div className="img-style">
              <Image
                className="lazyload effect-paralax"
                data-src={banner.imgSrc}
                alt="banner-cls"
                src={banner.imgSrc}
                width={950}
                height={640}
              />
            </div>
            <div className="content cls-content w-full">
              <div className="cls-heading gap-8 mb_22">
                <h3>
                  <a href={"#"} className="link text_white wow fadeInUp">
                    {banner.title}
                  </a>
                </h3>
                <p
                  className="text_white text-body-default wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {banner.description}
                </p>
              </div>
              <a href={"#"} className="tf-btn btn-white mx-auto">
                <span>{banner.linkText}</span>
                <i className="icon-arrow-up-right" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
