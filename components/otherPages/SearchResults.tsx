"use client";
import Link from "next/link";

import { products } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../productCards/ProductCard";
import { Pagination } from "swiper/modules";

export default function SearchResults() {
  return (
    <>
      {/* section-wishlist */}
      <section className="flat-spacing pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <form
                className="form-search mb_12"
                onSubmit={(e) => e.preventDefault()}
              >
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Searching..."
                    className=""
                    name="text"
                    tabIndex={0}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <button className="" type="submit">
                  <i className="icon icon-search" />
                </button>
              </form>
              <div className="tf-col-quicklink">
                <span className="title fw-5">Quick link:</span>
                <Link className="link" href={`/shop-default`}>
                  Chair
                </Link>
                ,
                <Link className="link" href={`/shop-default`}>
                  Men
                </Link>
                ,
                <Link className="link" href={`/shop-default`}>
                  Women
                </Link>
                ,
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-wishlist */}
      {/* Related Products */}
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
                  el: ".spd24",
                }}
              >
                {products.slice(0, 4).map((product, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}

                <div className="sw-pagination-latest sw-dots type-circle justify-content-center spd24" />
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* /Related Products */}
    </>
  );
}
