"use client";
import Link from "next/link";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";

export default function Topbar1() {
  return (
    <div className="tf-topbar">
      <div className="container-full">
        <div className="row">
          <div className="col-xl-4">
            <div className="topbar-left d-none d-xl-flex">
              <div className="tf-languages">
                <LanguageSelect
                  topStart
                  parentClassName="image-select center style-default color-white type-languages"
                />
              </div>
              <div className="tf-currencies">
                <CurrencySelect topStart light />
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
                  <p className="text-caption-1 text_white">
                    Free shipping on all orders over{" "}
                    <span className="text_primary">$20.00</span>
                  </p>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <p className="text-caption-1 text_white">
                    Free shipping on all orders over{" "}
                    <span className="text_primary">$20.00</span>
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
              <Link href={`/about`} className="text_white text-caption-1 link">
                About
              </Link>
              <Link
                href={`/contact`}
                className="text_white text-caption-1 link"
              >
                Contact
              </Link>
              <Link
                href={`/store-list`}
                className="text_white text-caption-1 link"
              >
                Location
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
