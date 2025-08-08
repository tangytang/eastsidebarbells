"use client";
import { products } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../productCards/ProductCard";
import { Pagination } from "swiper/modules";

export default function RelatedProducts() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="mb_40 wow fadeInUp">You may be interested in…</h4>
            <Swiper
              dir="ltr"
              className="swiper tf-sw-latest"
              breakpoints={{
                0: { slidesPerView: 2 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd23",
              }}
            >
              {products.slice(0, 4).map((product, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}

              <div className="sw-pagination-latest sw-dots type-circle justify-content-center spd23" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
