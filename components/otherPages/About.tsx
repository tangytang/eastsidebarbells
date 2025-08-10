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
              <h1 className="wow fadeInUp">We Are Eastsidebarbells</h1>
              <p
                className="text-body-1 text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                At Eastsidebarbells, we’re passionate about strength training.
                From heavy-duty powerlifting bars and calibrated steel plates to
                competition-grade bumper plates for CrossFit and Olympic
                weightlifting, we provide athletes and home gym owners in
                Singapore with premium equipment designed for peak performance.
                Whether you train in a gym or in your garage, our gear is built
                to withstand the toughest lifts — deadlifts, squats, cleans,
                snatches, and everything in between.
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="img-wrap">
              <Image
                className="lazyload effect-paralax"
                src="/images/banner/eastside-banner.webp"
                alt="Eastsidebarbells gym equipment"
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
                  To equip every lifter — from beginner to elite athlete — with
                  durable, competition-standard gear that inspires confidence in
                  every rep. We aim to grow the strength sports community in
                  Singapore by making professional-grade barbells, plates,
                  racks, and platforms accessible and affordable.
                </p>
              </div>

              <div className="right">
                <h3 className="mb_11 wow fadeInUp">Our Vision</h3>
                <p
                  className="text_secondary text-body-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  To be Singapore’s go-to source for strength training
                  equipment, supporting the growth of powerlifting, CrossFit,
                  and Olympic weightlifting. Our vision is to see more lifters
                  hitting PRs on quality equipment they can trust — whether
                  they’re training for competition or building a healthier,
                  stronger lifestyle.
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
                575: { slidesPerView: 2 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 4, spaceBetween: 30 },
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
