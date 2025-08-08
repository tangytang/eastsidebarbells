"use client";
import ProductCard from "@/components/productCards/ProductCard";
import { products3 } from "@/data/products";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Top Picks You’ll Love</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Fresh styles just in! Elevate your look.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="swiper tf-sw-products style-full slider-nav-sw"
        loop
        centeredSlides
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 1.5 },
          575: {
            slidesPerView: 1.5,
          },
          768: {
            spaceBetween: 30,
            slidesPerView: 1.5,
          },
          1200: {
            slidesPerView: 4.4,
            spaceBetween: 30,
          },
        }}
        initialSlide={1}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: ".spd11",
        }}
        navigation={{
          prevEl: ".snbp11",
          nextEl: ".snbn11",
        }}
      >
        {[...products3, ...products3].map((product, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        <div className="wrap-pagination d-lg-none d-block">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sw-pagination-products sw-dots type-circle d-flex justify-content-center spd11" />
              </div>
            </div>
          </div>
        </div>
        <div className="sw-button swiper-button-next nav-prev-products d_lg_none snbp11" />
        <div className="sw-button swiper-button-prev nav-next-products d_lg_none snbn11" />
      </Swiper>
    </section>
  );
}
