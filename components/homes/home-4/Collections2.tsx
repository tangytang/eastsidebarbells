import Link from "next/link";
import { collectionData } from "@/data/collections";
import React from "react";
import Image from "next/image";
export default function Collections2() {
  return (
    <section>
      <div className="flat-img-with-text-6">
        {collectionData.map((item, index) => (
          <div className="collection-position hover-img style-6" key={index}>
            <div className="img-style">
              <Image
                className="lazyload effect-paralax"
                data-src={item.imgSrc}
                alt="banner-cls"
                src={item.imgSrc}
                width={item.imgWidth}
                height={item.imgHeight}
              />
            </div>
            <div className="content cls-content w-full">
              <div className="cls-heading gap-8 mb_17">
                <h3>
                  <a href="#" className="link text_white wow fadeInUp">
                    {item.title}
                  </a>
                </h3>
                <p
                  className="text_white text-body-default wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {item.description}
                </p>
              </div>
              <a
                href="#"
                className="tf-btn btn-white mx-auto wow fadeInUp"
                data-wow-delay="0.2s"
              >
                {item.buttonText} <i className="icon-arrow-up-right" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
