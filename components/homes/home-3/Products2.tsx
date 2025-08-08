"use client";
import ProductCard from "@/components/productCards/ProductCard";
import { products3 } from "@/data/products";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <section className="flat-spacing-2 section-tTop-sellers">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Shop Top Sellers</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Fresh styles just in! Elevate your look.
              </p>
            </div>
            <div className="sw-button-over">
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
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[Navigation, Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd14",
                }}
                navigation={{
                  prevEl: ".snbp14",
                  nextEl: ".snbn14",
                }}
              >
                {products3.map((product, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
                <div className="wrap-pagination d-lg-none d-block">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="sw-pagination-collection sw-dots type-circle d-flex justify-content-center spd14" />
                      </div>
                    </div>
                  </div>
                </div>
              </Swiper>
              <div className="sw-button swiper-button-next nav-next-collection has-border d_lg_none snbp14" />
              <div className="sw-button swiper-button-prev nav-prev-collection has-border d_lg_none snbn14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
