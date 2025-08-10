"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";

interface Swatch {
  label: string;
  img: string;
  bgClass: string;
}

interface Product {
  id: number;
  imgSrc: string;
  hoverImg: string;
  sale?: string | null;
  delay?: string | null;
  title: string;
  oldPrice?: number | null;
  price: number;
  swatches: Swatch[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard2({ product }: ProductCardProps) {
  const {
    addProductToCart,
    isAddedToCartProducts,
    addToCompareItem,
    isAddedtoCompareItem,
    addToWishlist,
    isAddedtoWishlist,
    setQuickViewItem,
  } = useContextElement();

  const [currentItem, setCurrentItem] = useState<string>("");

  return (
    <div
      className="card-product style-list"
      data-availability="Out of stock"
      data-brand="adidas"
    >
      <div className="card-product-wrapper">
        <Link href={`/product-detail/${product.id}`} className="image-wrap">
          <img
            className="lazyload img-product"
            alt="image-product"
            src={currentItem ? currentItem : product.imgSrc}
            width={900}
            height={900}
          />
          <img
            className="lazyload img-hover"
            data-src={product.hoverImg}
            src={product.hoverImg}
            alt="image-product"
            width={600}
            height={600}
          />
        </Link>
      </div>
      <div className="card-product-info">
        <Link
          href={`/product-detail/${product.id}`}
          className="text-title title link"
        >
          {product.title}
        </Link>
        <div className="price text-button">
          {product.oldPrice && (
            <span className="old-price"> ${product.oldPrice.toFixed(2)}</span>
          )}{" "}
          <span className="current-price">${product.price.toFixed(2)}</span>
        </div>
        <p className="description text_secondary text-body-default">
          Grounded in principles of simplicity and craftsmanship, Seoul’s clean
          lines and understated elegance pay homage to the timeless design
          traditions that have defined Danish design for generations.
        </p>
        <div className="variant-wrap-list">
          <ul className="list-color-product">
            {product.swatches.map((swatch, swatchIdx) => (
              <li
                key={swatchIdx}
                className={`list-color-item color-swatch ${
                  currentItem
                    ? currentItem === swatch.img
                      ? " active"
                      : ""
                    : swatchIdx == 0
                    ? "active"
                    : ""
                }`}
                onMouseOver={() => setCurrentItem(swatch.img)}
              >
                <span className="d-none text-capitalize color-filter">
                  {swatch.label}
                </span>
                <span className={`swatch-value ${swatch.bgClass}`} />
                <Image
                  className="lazyload"
                  data-src={swatch.img}
                  src={swatch.img}
                  alt="image-product"
                  width={600}
                  height={600}
                />
              </li>
            ))}
          </ul>
          <div className="list-product-btn">
            <a
              href="#shoppingCart"
              data-bs-toggle="modal"
              className="btn-main-product"
              onClick={() => {
                if (product.id) {
                  addProductToCart(product.id);
                }
              }}
            >
              {isAddedToCartProducts(product.id)
                ? "Already Added"
                : "Add to Cart"}
            </a>
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
            <a
              href="#compare"
              data-bs-toggle="modal"
              aria-controls="compare"
              className="box-icon compare"
              onClick={() => {
                if (product.id) {
                  addToCompareItem(product.id);
                }
              }}
            >
              <span className="icon icon-compare" />
              <span className="tooltip">
                {" "}
                {isAddedtoCompareItem(product.id) ? "Compared" : "Compare"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
