"use client";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/productCards/ProductCard";
import { products3 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Products2({ parentClass = "flat-spacing-5" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-2">
              <div className="left">
                <h3 className="wow fadeInUp">Shop Top Sellers</h3>
                <p
                  className="text-body-default text_secondary wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Fresh styles just in! Elevate your look.
                </p>
              </div>
              <div className="right wow fadeInUp">
                <Link href={`/shop-default`} className="btn-line">
                  <span>View All Products</span>
                </Link>
              </div>
            </div>
            <div className="sw-button-over">
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
                modules={[Navigation, Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd7",
                }}
                navigation={{
                  prevEl: ".snbp7",
                  nextEl: ".snbn7",
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
              <div className="sw-button swiper-button-next nav-next-collection has-border d_lg_none snbp7" />
              <div className="sw-button swiper-button-prev nav-prev-collection has-border d_lg_none snbn7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
