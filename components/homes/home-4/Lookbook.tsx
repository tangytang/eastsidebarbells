"use client";
import Link from "next/link";
import { dealSlides } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { useContextElement } from "@/context/Context";
import CountdownTimer from "@/components/common/Countdown";
export default function Lookbook() {
  const { addToWishlist, isAddedtoWishlist } = useContextElement();
  return (
    <section className="flat-spacing-2 pt-0">
      <div className="container">
        <div className="tf-img-with-text-3">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content-left">
                <h3 className="mb_40 text-center wow fadeInUp">
                  Deal Of The Day
                </h3>
                <div className="wrap-product relative">
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      prevEl: ".snbp18",
                      nextEl: ".snbn18",
                    }}
                    className="swiper tf-product-single"
                  >
                    {dealSlides.map((product) => (
                      <SwiperSlide className="swiper-slide" key={product.id}>
                        <div className="card-product">
                          <div className="card-product-wrapper">
                            <Link
                              href={`/product-detail/${product.id}`}
                              className="image-wrap"
                            >
                              <Image
                                className="lazyload img-product"
                                data-src={product.imgSrc}
                                src={product.imgSrc}
                                alt="image-product"
                                width={900}
                                height={900}
                              />
                              <Image
                                className="lazyload img-hover"
                                data-src={product.hoverImg}
                                src={product.hoverImg}
                                alt="image-product"
                                width={900}
                                height={900}
                              />
                            </Link>

                            {product.sale && (
                              <div className="on-sale-wrap">
                                <span className="on-sale-item">
                                  {product.sale}
                                </span>
                              </div>
                            )}

                            <div className="list-product-btn">
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (product.id) {
                                    addToWishlist(product.id);
                                  }
                                }}
                                className={`box-icon wishlist btn-icon-action ${
                                  isAddedtoWishlist(product.id) ? "active" : ""
                                }`}
                              >
                                <span className="icon icon-heart" />
                                <span className="tooltip">
                                  {isAddedtoWishlist(product.id)
                                    ? "Remove Wishlist"
                                    : "Add to Wishlist"}
                                </span>
                              </a>
                            </div>
                          </div>

                          <div className="card-product-info text-center">
                            <Link
                              href={`/product-detail/${product.id}`}
                              className="title link"
                            >
                              {product.title}
                            </Link>
                            <div className="price text-body-default justify-content-center">
                              {product.oldPrice && (
                                <span className="text-caption-1 old-price">
                                  ${product.oldPrice.toFixed(2)}
                                </span>
                              )}
                              ${product.price.toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="sw-button swiper-button-next sw-product-single-next snbn18" />
                  <div className="sw-button swiper-button-prev sw-product-single-prev snbp18" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 relative">
              <div className="image-wrap">
                <Image
                  className="lazyload effect-paralax"
                  data-src="/images/section/section-deal-1.jpg"
                  alt="banner"
                  src="/images/section/section-deal-1.jpg"
                  width={1890}
                  height={1890}
                />
              </div>
              <div className="tf-countdown style-3">
                <div className="js-countdown">
                  <CountdownTimer style={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
