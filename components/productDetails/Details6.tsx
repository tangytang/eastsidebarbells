"use client";
import { useState } from "react";

import VariantPicker from ".//SizeSelect3";
import { useContextElement } from "@/context/Context";
import QuantitySelect from "../common/QuantitySelect";

import Slider3 from "./sliders/Slider3";

import ColorDropdown from "./ColorSelect4";
interface Swatch {
  label: string;
  img: string;
  bgClass: string;
}

interface Product {
  id: number;
  imgSrc: string;
  hoverImg?: string;
  sale?: string | null;
  delay?: string | null;
  title: string;
  oldPrice?: number | null;
  price: number;
  swatches?: Swatch[];
}

interface ProductCardProps {
  product: Product;
}

export default function Details6({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState("Beige");
  const [quantity, setQuantity] = useState<number>(1);
  const {
    quantityInCart,
    addProductToCart,
    isAddedToCartProducts,
    addToCompareItem,
    isAddedtoCompareItem,
    addToWishlist,
    isAddedtoWishlist,
    updateQuantity,
  }: {
    quantityInCart: (id: number) => number | undefined;
    addProductToCart: (id: number, qty?: number) => void;
    isAddedToCartProducts: (id: number) => boolean;
    addToCompareItem: (id: number) => void;
    isAddedtoCompareItem: (id: number) => boolean;
    addToWishlist: (id: number) => void;
    isAddedtoWishlist: (id: number) => boolean;
    updateQuantity: (id: number, qty: number) => void;
  } = useContextElement();

  return (
    <section className="flat-spacing product-details">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="tf-product-media-wrap sticky-top thumbs-bottom">
              <div className="thumbs-slider gap-17">
                <Slider3
                  activeColor={selectedColor}
                  firstItem={product.imgSrc}
                  setActiveColor={setSelectedColor}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="sticky-top">
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-heading">
                    <div className="tf-product-info-name">
                      <h3 className="name">{product.title}</h3>
                      <div className="sub">
                        <div className="tf-product-tag text-caption-1">
                          Best Seller
                        </div>
                        <div className="tf-product-info-rate">
                          <div className="list-star-default">
                            <i className="icon icon-star" />
                            <i className="icon icon-star" />
                            <i className="icon icon-star" />
                            <i className="icon icon-star" />
                            <i className="icon icon-star" />
                          </div>
                          <div className="text text-caption-1">
                            (134 reviews)
                          </div>
                        </div>
                        <div className="tf-product-info-sold">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.7076 9.80077L7.95759 19.1758C7.86487 19.2747 7.74247 19.3408 7.60888 19.3641C7.47528 19.3874 7.33773 19.3666 7.21699 19.3049C7.09625 19.2432 6.99886 19.1438 6.93953 19.0219C6.88019 18.8999 6.86213 18.762 6.88806 18.6289L8.03338 12.9L3.53103 11.2094C3.43434 11.1732 3.34811 11.1136 3.28005 11.036C3.21199 10.9584 3.16422 10.8651 3.14101 10.7645C3.11779 10.6639 3.11986 10.5591 3.14702 10.4595C3.17418 10.3599 3.22559 10.2686 3.29666 10.1937L12.0467 0.818744C12.1394 0.719788 12.2618 0.653675 12.3954 0.630383C12.529 0.60709 12.6665 0.627882 12.7873 0.68962C12.908 0.751359 13.0054 0.850694 13.0647 0.972636C13.1241 1.09458 13.1421 1.23251 13.1162 1.36562L11.9677 7.10077L16.4701 8.78906C16.5661 8.82547 16.6516 8.88496 16.7191 8.96228C16.7867 9.0396 16.8341 9.13236 16.8573 9.23237C16.8805 9.33237 16.8786 9.43655 16.852 9.53569C16.8253 9.63482 16.7747 9.72587 16.7045 9.80077H16.7076Z"
                              fill="#DC9056"
                            />
                          </svg>
                          <div className="text text-caption-1">
                            18&nbsp;sold in last&nbsp;32&nbsp;hours
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-product-info-desc">
                      <div className="tf-product-info-price">
                        <h5 className="price-on-sale">
                          ${product.price.toFixed(2)}
                        </h5>
                        {product.oldPrice && (
                          <div className="compare-at-price">
                            ${product.oldPrice.toFixed(2)}
                          </div>
                        )}
                        <div className="badges-on-sale text-btn-uppercase">
                          -25%
                        </div>
                      </div>
                      <p>
                        The garments labelled as Committed are products that
                        have been produced using sustainable fibres or
                        processes, reducing their environmental impact.
                      </p>
                      <div className="tf-product-info-liveview">
                        <i className="icon icon-eye" />
                        <p className="text-caption-1">
                          <span className="liveview-count">28</span> people are
                          viewing this right now
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-info-choose-option gap-19">
                    <div className="variant-picker-item">
                      <div className="variant-picker-label mb_12">
                        Colors:
                        <span className="text-title variant-picker-label-value value-currentColor">
                          {selectedColor}
                        </span>
                      </div>

                      <ColorDropdown
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                      />
                    </div>
                    <VariantPicker />
                    <div className="tf-product-info-quantity">
                      <div className="title mb_12">Quantity:</div>
                      <QuantitySelect
                        quantity={
                          quantityInCart(product.id)
                            ? quantityInCart(product.id)
                            : quantity
                        }
                        setQuantity={(qty: number) => {
                          if (isAddedToCartProducts(product.id)) {
                            updateQuantity(product.id, qty);
                          } else {
                            setQuantity(qty);
                          }
                        }}
                      />
                    </div>
                    <div>
                      <div className="tf-product-info-by-btn mb_12">
                        <a
                          onClick={() => addProductToCart(product.id, quantity)}
                          className="tf-btn btn-onsurface flex-grow-1 show-shopping-cart"
                        >
                          <span>
                            {isAddedToCartProducts(product.id)
                              ? "Already Added"
                              : "Add to cart -"}{" "}
                          </span>
                          <span className="tf-qty-price total-price">
                            ${(product.price * quantity).toFixed(2)}
                          </span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="modal"
                          aria-controls="compare"
                          onClick={() => addToCompareItem(product.id)}
                          className="box-icon hover-tooltip compare show-compare"
                        >
                          <span className="icon icon-compare" />
                          <span className="tooltip text-caption-2">
                            {isAddedtoCompareItem(product.id)
                              ? "Compared"
                              : "Compare"}
                          </span>
                        </a>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            addToWishlist(product.id);
                          }}
                          className={`box-icon hover-tooltip text-caption-2 wishlist btn-icon-action ${
                            isAddedtoWishlist(product.id) ? "active" : ""
                          }`}
                        >
                          <span className="icon icon-heart" />
                          <span className="tooltip text-caption-2">
                            {isAddedtoWishlist(product.id)
                              ? "Remove Wishlist"
                              : "Add to Wishlist"}
                          </span>
                        </a>
                      </div>
                      <a href="#" className="tf-btn btn-primary w-full">
                        Buy it now
                      </a>
                    </div>
                    <div className="tf-product-info-help gap-12">
                      <div className="wrap">
                        <div className="dropdown dropdown-store-location">
                          <div
                            className="dropdown-title dropdown-backdrop"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                          >
                            <div className="tf-product-info-view link">
                              <span>View Store Information</span>
                            </div>
                          </div>
                          <div className="dropdown-menu dropdown-menu-end">
                            <div className="dropdown-content">
                              <div className="dropdown-content-heading">
                                <h5>Store Location</h5>
                                <i className="icon icon-close" />
                              </div>
                              <div className="line-bt" />
                              <div>
                                <h6>Fashion GearO</h6>
                                <p>
                                  Pickup available. Usually ready in 24 hours
                                </p>
                              </div>
                              <div>
                                <p>766 Rosalinda Forges Suite 044,</p>
                                <p>Gracielahaven, Oregon</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tf-product-info-time">
                        <div className="icon">
                          <i className="icon-time" />
                        </div>
                        <p className="text-caption-1">
                          Estimated Delivery:&nbsp;&nbsp;<span>12-26 days</span>
                          (International), <span>3-6 days</span> (United States)
                        </p>
                      </div>
                      <div className="tf-product-info-return">
                        <div className="icon">
                          <i className="icon-arrowclockwise" />
                        </div>
                        <p className="text-caption-1">
                          Return within <span>45 days</span> of purchase. Duties
                          &amp; taxes are non-refundable.
                        </p>
                      </div>
                      <div className="tf-product-info-extra-link">
                        <a
                          href="#delivery_return"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <i className="icon-shipping" />
                          </div>
                          <p className="text-caption-1">
                            Delivery &amp; Return
                          </p>
                        </a>
                        <a
                          href="#ask_question"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <i className="icon-question" />
                          </div>
                          <p className="text-caption-1">Ask A Question</p>
                        </a>
                        <a
                          href="#share_social"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <i className="icon-share" />
                          </div>
                          <p className="text-caption-1">Share</p>
                        </a>
                      </div>
                    </div>
                    <ul className="tf-product-info-sku">
                      <li>
                        <p className="text-caption-1">SKU:</p>
                        <p className="text-caption-1 text-1">4321234</p>
                      </li>
                      <li>
                        <p className="text-caption-1">Vendor:</p>
                        <p className="text-caption-1 text-1">GearO</p>
                      </li>
                      <li>
                        <p className="text-caption-1">Available:</p>
                        <p className="text-caption-1 text-1">Instock</p>
                      </li>
                      <li>
                        <p className="text-caption-1">Categories:</p>
                        <p className="text-caption-1">
                          <a href="#" className="text-1 link">
                            wood
                          </a>
                          ,
                          <a href="#" className="text-1 link">
                            chair
                          </a>
                          ,
                          <a href="#" className="text-1 link">
                            furniture
                          </a>
                        </p>
                      </li>
                    </ul>
                    <div className="tf-product-info-guranteed">
                      <div className="text-title">Guranteed safe checkout:</div>
                      <div className="tf-payment d-flex">
                        <a href="#">
                          <img
                            alt=""
                            src="/images/payment/payment-1.png"
                            width={76}
                            height={48}
                          />
                        </a>
                        <a href="#">
                          <img
                            alt=""
                            src="/images/payment/payment-2.png"
                            width={76}
                            height={48}
                          />
                        </a>
                        <a href="#">
                          <img
                            alt=""
                            src="/images/payment/payment-3.png"
                            width={76}
                            height={48}
                          />
                        </a>
                        <a href="#">
                          <img
                            alt=""
                            src="/images/payment/payment-4.png"
                            width={76}
                            height={48}
                          />
                        </a>
                        <a href="#">
                          <img
                            alt=""
                            src="/images/payment/payment-5.png"
                            width={76}
                            height={48}
                          />
                        </a>
                        <a href="#">
                          <img
                            alt=""
                            src="/images/payment/payment-6.png"
                            width={76}
                            height={48}
                          />
                        </a>
                      </div>
                    </div>
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
