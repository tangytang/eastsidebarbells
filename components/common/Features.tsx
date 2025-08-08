"use client";
import { swiperSlides } from "@/data/features";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features({ parentClass = "flat-spacing-2 pt-0" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              dir="ltr"
              className="swiper tf-sw-iconbox"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
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
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd2",
              }}
            >
              {swiperSlides.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="tf-box-icon">
                    <div className="icon">
                      <i className={slide.iconClass} />
                    </div>
                    <div className="content">
                      <h5 className="title">{slide.title}</h5>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-pagination-iconbox sw-dots type-circle d-flex justify-content-center spd2" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
