"use client";
import Link from "next/link";
import { galleryItems } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Shopgram() {
  return (
    <section className="flat-spacing-2 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Shop Instagram</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Elevate your wardrobe with fresh finds today!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="swiper tf-sw-shop-gallery md-px-15"
        loop
        centeredSlides
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 2 },
          575: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5.7,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".spd12",
        }}
      >
        {[...galleryItems, ...galleryItems].map((product, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <div className="gallery-item hover-overlay hover-img">
              <div className="img-style">
                <Image
                  className="lazyload img-hover"
                  alt="image-gallery"
                  src={product.imgSrc}
                  width={500}
                  height={500}
                />
              </div>
              <Link
                href={`/product-detail/${product.id}`}
                className="box-icon hover-tooltip"
              >
                <span className="icon icon-eye" />
                <span className="tooltip">View Product</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        <div className="sw-pagination-gallery sw-dots d-lg-none d-flex type-circle justify-content-center spd12" />
      </Swiper>
    </section>
  );
}
