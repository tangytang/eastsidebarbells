"use client";
import Link from "next/link";
import { testimonialData } from "@/data/testimonials";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="flat-spacing-2 pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Swiper
              className="swiper md-mb-30 tf-sw-testimonial sw-button-bottom-right"
              spaceBetween={15}
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp15",
                nextEl: ".snbn15",
              }}
            >
              {testimonialData.map((testimonial, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="testimonial-item hover-img style-3">
                    <div className="content">
                      <div className="content-top">
                        <div
                          className={`box-icon${
                            testimonial.wow ? " wow fadeInUp" : ""
                          }`}
                        >
                          <div className="icon">
                            <i className="icon-quote-1" />
                          </div>
                          <p className="text-title">Customer Say!</p>
                        </div>
                        <h4
                          className={`text-onsurface${
                            testimonial.wow ? " wow fadeInUp" : ""
                          }`}
                          {...(testimonial.wow
                            ? { "data-wow-delay": "0.1s" }
                            : {})}
                        >
                          "{testimonial.quote}"
                        </h4>
                        <div
                          className={`box-author d-flex gap-6${
                            testimonial.wow ? " wow fadeInUp" : ""
                          }`}
                          {...(testimonial.wow
                            ? { "data-wow-delay": "0.2s" }
                            : {})}
                        >
                          <div className="list-star-default color-primary">
                            {[...Array(5)].map((_, i) => (
                              <i className="icon icon-star" key={i} />
                            ))}
                          </div>
                          <h6 className="author">
                            <a href="#" className="link">
                              {testimonial.author}
                              <span className="text-title text_secondary2">
                                {" "}
                                / {testimonial.role}
                              </span>
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="wrap-button">
                <div className="sw-button swiper-button-prev nav-prev-testimonial has-border snbp15" />
                <div className="sw-button swiper-button-next nav-next-testimonial has-border snbn15" />
              </div>
            </Swiper>
          </div>
          <div className="col-md-6">
            <div className="collection-position style-3">
              <div className="img-style">
                <Image
                  className="lazyload effect-paralax"
                  data-src="/images/banner/banner-2.jpg"
                  alt="banner-cls"
                  src="/images/banner/banner-2.jpg"
                  width={1200}
                  height={1200}
                />
              </div>
              <div className="content cls-content">
                <div className="cart-item style-2 bundle-hover-item">
                  <div className="image-cart">
                    <Image
                      alt=""
                      src="/images/shop/cart-item-3.jpg"
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="info">
                    <div className="name text-body-default">
                      <a href="#" className="link text-title">
                        Open Box - Adjustable Laptop Stand
                      </a>
                    </div>
                    <div className="price text-button">$60.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
