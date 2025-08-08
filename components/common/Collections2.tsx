"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { categories } from "@/data/collections";
import Link from "next/link";
export default function Collections2() {
  return (
    <section className="flat-spacing-2">
      <Swiper
        className="swiper tf-sw-cls swiper-auto"
        {...{
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          observer: true,
          observeParents: true,

          slidesPerView: "auto",
          loop: true,
          spaceBetween: 40,
          speed: 10000,
        }}
        modules={[Autoplay]}
      >
        {categories.map((item, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <Link href={`/shop-default`} className="cls-item">
              <div className="image">
                <Image
                  className="lazyload"
                  data-src={item.image}
                  src={item.image}
                  alt=""
                  width={380}
                  height={380}
                />
              </div>
              <h3 className="title">{item.title}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
