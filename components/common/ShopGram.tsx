"use client";
import Link from "next/link";
import { galleryItems } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function ShopGram() {
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
            <Swiper
              className="swiper tf-sw-shop-gallery"
              spaceBetween={8}
              breakpoints={{
                0: { slidesPerView: 2 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd8",
              }}
            >
              {galleryItems.map((item) => (
                <SwiperSlide className="swiper-slide" key={item.id}>
                  <div
                    className="gallery-item hover-overlay hover-img wow fadeInUp"
                    data-wow-delay={item.delay}
                  >
                    <div className="img-style">
                      <Image
                        className="lazyload img-hover"
                        data-src={item.imgSrc}
                        src={item.imgSrc}
                        alt="image-gallery"
                        width={500}
                        height={500}
                      />
                    </div>
                    <Link
                      href={`/product-detail/${item.id}`}
                      className="box-icon hover-tooltip"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">View Product</span>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-pagination-gallery sw-dots type-circle justify-content-center spd8" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
