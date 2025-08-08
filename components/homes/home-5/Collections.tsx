"use client";
import Link from "next/link";
import { collectionSlides } from "@/data/collections";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Collections() {
  return (
    <section className="flat-spacing-2">
      <div className="container-2">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb_43">
              <h3 className="wow fadeInUp">Shop By Collections</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Browse our Top Trending: the hottest picks loved by all.
              </p>
            </div>
            <Swiper
              className="swiper tf-sw-collection"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd20",
              }}
              navigation={{
                prevEl: ".snbp20",
                nextEl: ".snbn20",
              }}
            >
              {collectionSlides.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className={`collection-position hover-img style-4 wow fadeInUp`}
                    {...(slide.wowDelay
                      ? { "data-wow-delay": slide.wowDelay }
                      : {})}
                  >
                    <a href="#" className="img-style">
                      <Image
                        className="lazyload"
                        data-src={slide.imgSrc}
                        alt="banner-cls"
                        src={slide.imgSrc}
                        width={slide.width}
                        height={slide.height}
                      />
                    </a>
                    <div className="content cls-content">
                      <h4>
                        <a href="#" className="link">
                          {slide.title}
                        </a>
                      </h4>
                      <h6>{slide.productCount}</h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="wrap-pagination d-block">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="sw-dots sw-pagination-collection type-circle d-flex d-md-none justify-content-center spd20" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sw-button swiper-button-next nav-next-collection md-none snbp20" />
              <div className="sw-button swiper-button-prev nav-prev-collection md-none snbn20" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
