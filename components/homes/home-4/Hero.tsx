"use client";

import { sliderData } from "@/data/heroSlides";
import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="tf-slideshow style-4 slider-nav-sw slider-effect-fade">
      <Swiper
        dir="ltr"
        className="swiper tf-sw-slideshow"
        autoplay
        spaceBetween={15}
        effect="fade"
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        pagination={{
          clickable: true,
          el: ".spd16",
        }}
        navigation={{
          prevEl: ".snbp16",
          nextEl: ".snbn16",
        }}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="wrap-slider">
              <div className="content-left">
                <div className="box-content">
                  <div className="box-title">
                    <div className="text-display fade-item fade-item-1">
                      {slide.title}
                    </div>
                    <p className="text-body-1 fade-item fade-item-2">
                      {slide.description}
                    </p>
                  </div>
                  <div className="fade-item fade-item-3">
                    <a href="#" className="tf-btn btn-onsurface">
                      Explore Collection <i className="icon-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="img-style">
                <Image
                  className="lazyload"
                  data-src={slide.imgSrc}
                  alt="banner-cls"
                  src={slide.imgSrc}
                  width={960}
                  height={800}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots sw-pagination-slider type-circle white-circle-line justify-content-center d-xl-none d-flex spd16" />
          </div>
        </div>
        <div className="sw-button swiper-button-next navigation-next-slider d-xl-flex d-none snbp16" />
        <div className="sw-button swiper-button-prev navigation-prev-slider d-xl-flex d-none snbn16" />
      </Swiper>
    </div>
  );
}
