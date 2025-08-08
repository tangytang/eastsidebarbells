"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useContextElement } from "@/context/Context";

// Types
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
  cardStyle?: number;
}

// Constants
const CARD_STYLES_WITH_CART_ICON = [2, 4];
const CARD_STYLES_WITHOUT_QUICKVIEW = [3, 5];

export default function ProductCard({
  product,
  cardStyle = 1,
}: ProductCardProps) {
  const {
    addProductToCart,
    isAddedToCartProducts,
    addToCompareItem,
    isAddedtoCompareItem,
    addToWishlist,
    isAddedtoWishlist,
    setQuickViewItem,
  } = useContextElement();

  const [currentImage, setCurrentImage] = useState("");

  const handleAddToCart = () => {
    if (product.id) {
      addProductToCart(product.id);
    }
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.id) {
      addToWishlist(product.id);
    }
  };

  const handleAddToCompare = () => {
    if (product.id) {
      addToCompareItem(product.id);
    }
  };

  const handleQuickView = () => {
    if (product) {
      setQuickViewItem(product);
    }
  };

  const renderProductImage = () => (
    <Link href={`/product-detail/${product.id}`} className="image-wrap">
      <Image
        className="lazyload img-product"
        src={currentImage ? currentImage : product.imgSrc}
        alt={product.title}
        width={600}
        height={600}
      />
      <Image
        className="lazyload img-hover"
        data-src={product.hoverImg}
        src={product.hoverImg}
        alt={product.title}
        width={600}
        height={600}
      />
    </Link>
  );

  const renderSaleBadge = () =>
    product.sale && (
      <div className="on-sale-wrap">
        <span className="on-sale-item">{product.sale}</span>
      </div>
    );

  const renderIconButtons = () => (
    <div className="list-product-btn">
      {CARD_STYLES_WITH_CART_ICON.includes(cardStyle) && (
        <a
          href="#shoppingCart"
          data-bs-toggle="modal"
          aria-controls="shoppingCart"
          className="box-icon cart"
          onClick={handleAddToCart}
        >
          <span className="icon icon-bag" />
          <span className="tooltip">
            {isAddedToCartProducts(product.id)
              ? "Already Added"
              : "Add to Cart"}
          </span>
        </a>
      )}

      <a
        href="#"
        onClick={handleAddToWishlist}
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
        onClick={handleAddToCompare}
      >
        <span className="icon icon-compare" />
        <span className="tooltip">
          {isAddedtoCompareItem(product.id) ? "Compared" : "Compare"}
        </span>
      </a>

      {!CARD_STYLES_WITHOUT_QUICKVIEW.includes(cardStyle) && (
        <a
          href="#quickView"
          data-bs-toggle="modal"
          onClick={handleQuickView}
          className="box-icon quickview tf-btn-loading"
        >
          <span className="icon icon-eye" />
          <span className="tooltip">Quick View</span>
        </a>
      )}
    </div>
  );

  const renderMainButtons = () => (
    <div className="list-btn-main">
      {cardStyle === 5 && (
        <a
          href="#quickView"
          data-bs-toggle="modal"
          onClick={handleQuickView}
          className="btn-main-product btn-quickview"
        >
          Quick View
        </a>
      )}

      <a
        href="#shoppingCart"
        data-bs-toggle="modal"
        className="btn-main-product"
        onClick={handleAddToCart}
      >
        {isAddedToCartProducts(product.id) ? "Already Added" : "Add to Cart"}
      </a>

      {cardStyle === 3 && (
        <a
          href="#quickView"
          data-bs-toggle="modal"
          onClick={handleQuickView}
          className="box-icon quickview tf-btn-loading"
        >
          <span className="icon icon-eye" />
          <span className="tooltip">Quick View</span>
        </a>
      )}
    </div>
  );

  const renderProductInfo = () => (
    <div className="card-product-info">
      <Link
        href={`/product-detail/${product.id}`}
        className="text-title title link"
      >
        {product.title}
      </Link>

      <div className="price text-body-default">
        {product.oldPrice && (
          <span className="text-caption-1 old-price">
            ${product.oldPrice.toFixed(2)}
          </span>
        )}
        ${product.price.toFixed(2)}
      </div>

      <ul className="list-color-product">
        {product.swatches.map((swatch, index) => (
          <li
            key={index}
            className={`list-color-item color-swatch ${
              currentImage
                ? currentImage === swatch.img
                  ? " active"
                  : ""
                : index == 0
                ? "active"
                : ""
            }`}
            onMouseOver={() => setCurrentImage(swatch.img)}
          >
            <span className="d-none text-capitalize color-filter">
              {swatch.label}
            </span>
            <span className={`swatch-value ${swatch.bgClass}`} />
            <Image
              className="lazyload"
              data-src={swatch.img}
              src={swatch.img}
              alt={swatch.label}
              width={600}
              height={600}
            />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className={`card-product style-${cardStyle} wow fadeInUp`}
      data-wow-delay={product.delay}
    >
      <div className="card-product-wrapper">
        {renderProductImage()}
        {renderSaleBadge()}
        {renderIconButtons()}
        {cardStyle !== 2 && cardStyle !== 4 && renderMainButtons()}
      </div>
      {renderProductInfo()}
    </div>
  );
}
