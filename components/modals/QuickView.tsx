"use client";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SizeSelector from "./SizeSelector";
import QuantitySelect from "../common/QuantitySelect";

interface ImageItem {
  src: string;
  color: string;
}

interface ColorOption {
  id: string;
  name: string;
  label: string;
  slide: number;
  price: string;
  bgClass: string;
}

interface ProductItem {
  id: number;
  title: string;
  price: number;

  [key: string]: any;
}

const images: ImageItem[] = [
  { src: "/images/shop/quickview-slidebar-1.jpg", color: "Beige" },
  { src: "/images/shop/quickview-slidebar-2.jpg", color: "Beige" },
  { src: "/images/shop/quickview-slidebar-3.jpg", color: "Gray" },
  { src: "/images/shop/quickview-slidebar-4.jpg", color: "Grey" },
  { src: "/images/shop/quickview-slidebar-5.jpg", color: "Grey" },
];

const colorOptions: ColorOption[] = [
  {
    id: "values-beige2",
    name: "color2",
    label: "Beige",
    slide: 0,
    price: "79.99",
    bgClass: "bg-color-beige1",
  },
  {
    id: "values-gray2",
    name: "color2",
    label: "Gray",
    slide: 1,
    price: "79.99",
    bgClass: "bg-color-gray",
  },
  {
    id: "values-grey2",
    name: "color2",
    label: "Grey",
    slide: 2,
    price: "89.99",
    bgClass: "bg-color-grey",
  },
];

export default function QuickView() {
  const [quickViewImages, setQuickViewImages] = useState<ImageItem[]>(images);
  const [activeColor, setActiveColor] = useState<string>("Beige");
  const [quantity, setQuantity] = useState<number>(1);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    quickViewItem,
    quantityInCart,
    addProductToCart,
    isAddedToCartProducts,
    addToCompareItem,
    isAddedtoCompareItem,
    addToWishlist,
    isAddedtoWishlist,
    updateQuantity,
  }: {
    quickViewItem: ProductItem;
    quantityInCart: (id: number) => number | undefined;
    addProductToCart: (id: number, qty?: number) => void;
    isAddedToCartProducts: (id: number) => boolean;
    addToCompareItem: (id: number) => void;
    isAddedtoCompareItem: (id: number) => boolean;
    addToWishlist: (id: number) => void;
    isAddedtoWishlist: (id: number) => boolean;
    updateQuantity: (id: number, qty: number) => void;
  } = useContextElement();

  useEffect(() => {
    setQuickViewImages((prev) =>
      prev.map((img, index) =>
        index === 0 ? { ...img, src: quickViewItem.imgSrc } : img
      )
    );
  }, [quickViewItem]);

  const scrollToTarget = (color: string) => {
    const heightScroll = window.scrollY;
    const targetElement = document.querySelector<HTMLElement>(
      `[data-scroll='${color}']`
    );

    if (targetElement) {
      setTimeout(() => {
        if (window.scrollY === heightScroll) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 200);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const options = {
        rootMargin: "-50% 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollValue = entry.target.getAttribute("data-scroll");
            if (scrollValue) setActiveColor(scrollValue);
          }
        });
      }, options);

      const elements = document.querySelectorAll(".item-scroll-quickview");
      elements.forEach((el) => observer.observe(el));
      observerRef.current = observer;
    }, 1000);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="modal fullRight fade modal-quick-view" id="quickView">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="tf-quick-view-image">
            <div className="wrap-quick-view wrapper-scroll-quickview">
              {quickViewImages.map((item, index) => (
                <div
                  key={index}
                  className="quickView-item item-scroll-quickview"
                  data-scroll={item.color}
                >
                  <Image
                    className="lazyload"
                    alt=""
                    src={item.src}
                    width={340}
                    height={340}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="wrap">
            <div className="header">
              <h5 className="title">Quick View</h5>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-product-info-list">
              <div className="tf-product-info-heading">
                <div className="tf-product-info-name">
                  <h3 className="name">{quickViewItem.title}</h3>
                  <div className="sub">
                    <div className="tf-product-info-rate">
                      <div className="list-star-default">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="icon icon-star" />
                        ))}
                      </div>
                      <div className="text text-caption-1">(134 reviews)</div>
                    </div>
                    <div className="tf-product-info-sold">
                      {/* SVG ICON OMITTED FOR BREVITY */}
                      <div className="text text-caption-1">
                        18&nbsp;sold in last&nbsp;32&nbsp;hours
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-product-info-desc">
                  <div className="tf-product-info-price">
                    <h5 className="price-on-sale">
                      ${quickViewItem.price.toFixed(2)}
                    </h5>
                    {quickViewItem.oldPrice && (
                      <div className="compare-at-price">
                        ${quickViewItem.oldPrice.toFixed(2)}
                      </div>
                    )}
                    <div className="badges-on-sale text-btn-uppercase">
                      -25%
                    </div>
                  </div>
                  <p>
                    The garments labelled as Committed are products that have
                    been produced using sustainable fibres or processes,
                    reducing their environmental impact.
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
              <div className="tf-product-info-choose-option">
                <div className="variant-picker-item">
                  <div className="variant-picker-label mb_12">
                    Colors:
                    <span className="text-title variant-picker-label-value">
                      {activeColor}
                    </span>
                  </div>
                  <div className="variant-picker-values">
                    {colorOptions.map((option) => (
                      <React.Fragment key={option.id}>
                        <input
                          id={option.id}
                          type="radio"
                          name={option.name}
                          checked={activeColor === option.label}
                          onChange={() => {
                            setActiveColor(option.label);
                            scrollToTarget(option.label);
                          }}
                        />
                        <label
                          className={`hover-tooltip tooltip-bot radius-60 color-btn btn-scroll-quickview ${
                            activeColor === option.label ? "active" : ""
                          }`}
                          htmlFor={option.id}
                        >
                          <span className={`btn-checkbox ${option.bgClass}`} />
                          <span className="tooltip">{option.label}</span>
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <SizeSelector />
                <div className="tf-product-info-quantity">
                  <div className="title mb_12">Quantity:</div>
                  <QuantitySelect
                    quantity={
                      quantityInCart(quickViewItem.id)
                        ? quantityInCart(quickViewItem.id)
                        : quantity
                    }
                    setQuantity={(qty: number) => {
                      if (isAddedToCartProducts(quickViewItem.id)) {
                        updateQuantity(quickViewItem.id, qty);
                      } else {
                        setQuantity(qty);
                      }
                    }}
                  />
                </div>
                <div>
                  <div className="tf-product-info-by-btn mb_10">
                    <a
                      className="tf-btn btn-onsurface flex-grow-1 show-shopping-cart"
                      onClick={() =>
                        addProductToCart(quickViewItem.id, quantity)
                      }
                    >
                      <span>
                        {isAddedToCartProducts(quickViewItem.id)
                          ? "Already Added"
                          : "Add to cart -"}{" "}
                      </span>
                      <span className="tf-qty-price total-price">
                        ${quickViewItem.price.toFixed(2)}
                      </span>
                    </a>
                    <a
                      className="box-icon hover-tooltip compare show-compare"
                      onClick={() => addToCompareItem(quickViewItem.id)}
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip text-caption-2">
                        {isAddedtoCompareItem(quickViewItem.id)
                          ? "Compared"
                          : "Compare"}
                      </span>
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        addToWishlist(quickViewItem.id);
                      }}
                      className={`box-icon hover-tooltip text-caption-2 wishlist btn-icon-action ${
                        isAddedtoWishlist(quickViewItem.id) ? "active" : ""
                      }`}
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip text-caption-2">
                        {isAddedtoWishlist(quickViewItem.id)
                          ? "Remove Wishlist"
                          : "Add to Wishlist"}
                      </span>
                    </a>
                  </div>
                  <a href="#" className="tf-btn btn-primary w-full">
                    Buy it now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
