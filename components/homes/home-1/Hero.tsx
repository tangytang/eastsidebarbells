"use client";
import Link from "next/link";
import { slidesData } from "@/data/heroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <div className="tf-slideshow style-default slider-nav-sw slider-effect-fade efect-2">
      <Swiper
        dir="ltr"
        className="swiper tf-sw-slideshow"
        centeredSlides
        loop
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.2,
          },
          1200: {
            slidesPerView: 1.428,
          },
        }}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: ".spd10",
        }}
        navigation={{
          prevEl: ".snbp10",
          nextEl: ".snbn10",
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className={`wrap-slider ${slide.slideClass}`}>
              <div className="img-style">
                <Image
                  className="lazyload"
                  data-src={slide.image}
                  alt="banner-cls"
                  src={slide.image}
                  width={1330}
                  height={702}
                  priority
                />
              </div>
              <div className="box-content">
                <div className="box-title">
                  <h1 className="text-white fade-item fade-item-1">
                    {slide.title}
                  </h1>
                  <p className="text-body-1 text-white fade-item fade-item-2">
                    {slide.description}
                  </p>
                </div>
                <Link
                  href={`/shop-default`}
                  className="tf-btn btn-white fade-item fade-item-3"
                >
                  Explore Collection <i className="icon-arrow-up-right" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots sw-pagination-slider type-dot-line justify-content-center spd10" />
          </div>
        </div>
        <div className="sw-button swiper-button-next navigation-next-slider snbp10" />
        <div className="sw-button swiper-button-prev navigation-prev-slider snbn10" />
      </Swiper>
    </div>
  );
}
