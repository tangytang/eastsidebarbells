"use client";
import { products, products3 } from "@/data/products";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../productCards/ProductCard";

export default function RelatedProducts() {
  return (
    <section className="flat-spacing-7">
      <div className="container flat-animate-tab">
        <ul
          className="tab-product justify-content-center wow fadeInUp"
          data-wow-delay="0s"
          role="tablist"
        >
          <li className="nav-tab-item" role="presentation">
            <a
              href="#relatedProducts"
              className="active h4"
              data-bs-toggle="tab"
            >
              Related Products
            </a>
          </li>
          <li className="nav-tab-item" role="presentation">
            <a href="#recentlyViewed" className="h4" data-bs-toggle="tab">
              Recently Viewed
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane active show"
            id="relatedProducts"
            role="tabpanel"
          >
            <Swiper
              className="swiper tf-sw-collection"
              loop
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
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd77",
              }}
            >
              {products.slice(0, 4).map((product, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}

              <div className="wrap-pagination d-lg-none d-block">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="sw-pagination-collection sw-dots type-circle d-flex justify-content-center spd77" />
                    </div>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
          <div className="tab-pane" id="recentlyViewed" role="tabpanel">
            <Swiper
              className="swiper tf-sw-collection"
              loop
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
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd7",
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
                      <div className="sw-pagination-collection sw-dots type-circle d-flex justify-content-center spd7" />
                    </div>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
