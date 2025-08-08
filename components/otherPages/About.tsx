"use client";
import { swiperSlides } from "@/data/features";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function About() {
  return (
    <section className="flat-spacing-2 about-us-main pb-0">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="heading-section text-center spacing-2">
              <h1 className="wow fadeInUp">We Are GearO</h1>
              <p
                className="text-body-1 text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                We create unique furniture that improves the new ways in which
                people live, work and play. For more than 70 years, we've
                collaborated with the world's best designers to create furniture
                renowned for its modularity, functionality, and uncompromising
                quality.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="img-wrap">
              <Image
                className="lazyload effect-paralax"
                src="/images/section/section-about.jpg"
                data-=""
                alt=""
                width={1935}
                height={1089}
              />
            </div>
            <div className="main-content">
              <div className="left">
                <h3 className="mb_11 wow fadeInUp">Our Mission</h3>
                <p
                  className="text_secondary text-body-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  To create growth opportunities through education, community
                  engagement, and innovative solutions. Our mission is to uplift
                  the lives of people in Odisha by driving positive social
                  change, enhancing access to resources, and fostering equitable
                  development across the region.
                </p>
              </div>
              <div className="right">
                <h3 className="mb_11 wow fadeInUp">Our Vision</h3>
                <p
                  className="text_secondary text-body-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  To empower the people of Odisha by promoting sustainable
                  development, preserving cultural heritage, and fostering
                  innovation. Our vision is to build a thriving community where
                  economic growth and social progress go hand in hand, ensuring
                  a brighter future for all.
                </p>
              </div>
            </div>
          </div>
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
                el: ".spd22",
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
              <div className="sw-pagination-iconbox sw-dots type-circle d-flex justify-content-center spd22" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
