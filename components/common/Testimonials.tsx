"use client";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Testimonials({
  parentClass = "flat-spacing-2 section-testimonials",
}) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Customer Review</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Our customers adore our products, and we constantly aim to
                delight them.
              </p>
            </div>
            <Swiper
              className="swiper tf-sw-testimonial"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd9",
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="testimonial-item hover-img style-2">
                    <div className="content">
                      <div className="content-top">
                        <div className="box-author align-items-center d-flex gap-6">
                          <div className="text-title author">
                            <a href="#" className="link">
                              {item.name}
                            </a>
                          </div>
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
                              <clipPath>
                                <rect
                                  width={20}
                                  height={20}
                                  fill="white"
                                  transform="translate(0 0.684082)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <div className="text-caption-2 text_secondary">
                            Verified purchase
                          </div>
                        </div>
                        <div className="list-star-default">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="icon icon-star" />
                          ))}
                        </div>
                        <p className="text-secondary">"{item.review}"</p>
                      </div>
                      <div className="box-product">
                        <div className="product-img avt-62 round">
                          <Image
                            alt="avt"
                            src={item.image}
                            width={120}
                            height={120}
                          />
                        </div>
                        <div className="box-price">
                          <p className="text-title text-line-clamp-1">
                            <a href={`#`} className="link">
                              {item.productTitle}
                            </a>
                          </p>
                          <div className="text-button price">{item.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd9" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
