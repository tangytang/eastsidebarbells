"use client";
import Link from "next/link";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";

export default function Topbar2() {
  return (
    <div className="tf-topbar style-2 bg_white">
      <div className="container-full">
        <div className="row">
          <div className="col-xl-4">
            <div className="topbar-left d-none d-xl-flex">
              <div className="tf-languages">
                <LanguageSelect
                  topStart
                  parentClassName="image-select center style-default type-languages"
                />
              </div>
              <div className="tf-currencies">
                <CurrencySelect topStart />
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="wrapper-slider-topbar">
              <Swiper
                className="swiper tf-sw-top_bar"
                loop
                speed={2000}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 2000,
                }}
                navigation={{
                  prevEl: ".snbp27",
                  nextEl: ".snbn27",
                }}
              >
                <SwiperSlide className="swiper-slide">
                  <p className="text-caption-1 ">
                    Free shipping on all orders over{" "}
                    <span className="text_primary">$200.00</span>
                  </p>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <p className="text-caption-1 ">
                    Free shipping on all orders over{" "}
                    <span className="text_primary">$200.00</span>
                  </p>
                </SwiperSlide>
              </Swiper>
              <div className="navigation-topbar nav-next-topbar snbp27">
                <span className="icon icon-left" />
              </div>
              <div className="navigation-topbar nav-prev-topbar snbn27">
                <span className="icon icon-right" />
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="topbar-right justify-content-end d-none d-xl-flex">
              <Link href={`/about`} className=" text-caption-1 link">
                About
              </Link>
              <Link
                href="https://wa.me/6598182573?text=Hi%2C%20I%27m%20interested%20in%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption-1 link"
              >
                WhatsApp Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
