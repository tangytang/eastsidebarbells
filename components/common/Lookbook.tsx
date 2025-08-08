"use client";

import Image from "next/image";
import ProductCard from "@/components/productCards/ProductCard";
import { products2 } from "@/data/products";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LookBookCard from "../productCards/LookBookCard";
import type { Swiper as SwiperType } from "swiper";

export default function Lookbook() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="section-lookbook">
      <div className="left-img">
        <div className="cls-lookbook">
          <div className="img-style">
            <Image
              className="lazyload"
              data-src="/images/banner/banner-lookbook-1.jpg"
              alt="banner-cls"
              src="/images/banner/banner-lookbook-1.jpg"
              width={1184}
              height={876}
            />
          </div>
          <div
            className="lookbook-item position1 swiper-button"
            onMouseOver={() => swiperRef.current?.slideTo(0)}
          >
            <div className="dropup-center dropup">
              <div className="tf-pin-btn style-2">
                <span />
              </div>
              <div className="loobook-product-wrap">
                <LookBookCard product={products2[0]} />
              </div>
            </div>
          </div>
          <div
            className="lookbook-item position2 swiper-button"
            onMouseOver={() => swiperRef.current?.slideTo(1)}
          >
            <div className="dropup-center dropup">
              <div className="tf-pin-btn style-2">
                <span />
              </div>
              <div className="loobook-product-wrap">
                <LookBookCard product={products2[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-product">
        <div className="heading-section">
          <h3 className="wow fadeInUp">
            Start With These <br />
            Curated Spaces
          </h3>
          <p
            className="text-body-default text_secondary wow fadeInUp"
            data-wow-delay="0s"
          >
            Comfort and style meet to blissful perfection
          </p>
        </div>
        <Swiper
          className="swiper tf-sw-lookbook sw-lookbook-wrap"
          loop
          spaceBetween={10}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: {
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd5",
          }}
        >
          {products2.map((product, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
          <div className="sw-pagination-lookbook sw-dots type-circle justify-content-center spd5" />
        </Swiper>
      </div>
    </section>
  );
}
