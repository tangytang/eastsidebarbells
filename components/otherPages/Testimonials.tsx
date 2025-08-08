"use client";
import Link from "next/link";
import { productWithTestimonials } from "@/data/products";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function Testimonials() {
  const StarIcons = () => (
    <>
      {[...Array(5)].map((_, i) => (
        <i className="icon icon-star" key={i} />
      ))}
    </>
  );

  const VerifiedSVG = () => (
    <svg
      className="icon"
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_15758_14563)">
        <path
          d="M6.875 11.6255L8.75 13.5005L13.125 9.12549"
          stroke="#3DAB25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049 2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z"
          stroke="#3DAB25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_15758_14563">
          <rect
            width={20}
            height={20}
            fill="white"
            transform="translate(0 0.684082)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <section className="flat-spacing-4 section-testimonials fullright">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="col-12">
              <div className="heading-section style-2 align-items-end">
                <div className="left">
                  <h3 className="wow fadeInUp">Customer Say!</h3>
                  <p
                    className="text-body-default text_secondary wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    Our customers adore our products, and we constantly aim to
                    delight them.
                  </p>
                </div>
                <div className="right md-none">
                  <div className="wrap-button">
                    <div className="sw-button swiper-button-prev nav-prev-testimonial snbp28" />
                    <div className="sw-button swiper-button-next nav-next-testimonial snbn28" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <div className="row">
          <div className="col-12">
            <Swiper
              className="swiper tf-sw-testimonial style-2"
              data-wow-delay="0.1s"
              spaceBetween={15}
              breakpoints={{
                768: {
                  slidesPerView: 30,
                },
                1200: {
                  slidesPerView: 2.44,
                },
              }}
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd28",
              }}
              navigation={{
                prevEl: ".snbp28",
                nextEl: ".snbn28",
              }}
            >
              {productWithTestimonials.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="testimonial-item hover-img">
                    <div className="content">
                      <div className="content-top">
                        <div className="list-star-default">
                          <StarIcons />
                        </div>
                        <p className="text-secondary text-body-1">
                          "{item.quote}"
                        </p>
                        <div className="box-author align-items-center d-flex gap-6">
                          <div className="text-title author">
                            <a href="#" className="link">
                              {item.name}
                            </a>
                          </div>
                          <VerifiedSVG />
                        </div>
                      </div>
                      <div className="box-product">
                        <div className="product-img avt-62 round">
                          <Image
                            alt="avt"
                            width={120}
                            height={120}
                            src={item.avatar}
                          />
                        </div>
                        <div className="box-price">
                          <p className="text-title text-line-clamp-1">
                            <a href="#" className="link">
                              {item.title}
                            </a>
                          </p>
                          <div className="text-button price">
                            {item.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="img-style">
                      <Image
                        data-src={item.imgSrc}
                        alt="img-testimonial"
                        width={450}
                        height={600}
                        src={item.imgSrc}
                      />
                      <a
                        href="#quickView"
                        data-bs-toggle="modal"
                        className="box-icon hover-tooltip center"
                      >
                        <span className="icon icon-eye" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="sw-pagination-testimonial sw-dots d-block d-md-none type-circle d-flex justify-content-center spd28" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
