"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";

// Assuming the product structure
interface Product {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
}

export default function Compare() {
  const {
    compareItem,
    addProductToCart,
    isAddedToCartProducts,
  }: {
    compareItem: (number | string)[];
    addProductToCart: (id: number) => void;
    isAddedToCartProducts: (id: number) => boolean;
  } = useContextElement();

  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const filteredItems = allProducts.filter((elm) =>
      compareItem.includes(elm.id)
    );
    setItems([...filteredItems]);
  }, [compareItem]);

  return (
    <div className="modal fade modal-compare" id="compare">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="modal"
          />
          <div className="tf-compare-table">
            <div className="tf-compare-row tf-compare-grid">
              <div className="tf-compare-col d-md-block d-none" />
              {items.length ? (
                <>
                  {items.map((product, i) => (
                    <div key={i} className="tf-compare-col">
                      <div className="tf-compare-item">
                        <Link
                          className="tf-compare-image"
                          href={`/product-detail/${product.id}`}
                        >
                          <Image
                            className="lazyload"
                            alt="img-compare"
                            src={product.imgSrc}
                            width={600}
                            height={600}
                          />
                        </Link>
                        <div className="tf-compare-content">
                          <Link
                            className="link text-title text-line-clamp-1"
                            href={`/product-detail/${product.id}`}
                          >
                            {product.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="tf-compare-inner">
                  <div className="text-center">
                    No items added to compare yet. Browse Products to find items
                    you’d like to compare.
                  </div>
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Rating</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field tf-compare-rate"
                >
                  <div className="list-star">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <span key={idx} className="icon icon-star" />
                      ))}
                  </div>
                  <span>(134 reviews)</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Price</h6>
              </div>
              {items.map((product, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="price">${product.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Type */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Type</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="type">Table</span>
                </div>
              ))}
            </div>

            {/* Brand */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Brand</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="brand">-</span>
                </div>
              ))}
            </div>

            {/* Size */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Size</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="size">Size A, Size B</span>
                </div>
              ))}
            </div>

            {/* Color */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Color</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <div className="list-compare-color justify-content-center">
                    <span className="item bg-color-beige1" />
                    <span className="item bg-color-grey" />
                    <span className="item bg-color-grey" />
                  </div>
                </div>
              ))}
            </div>

            {/* Material */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Material</h6>
              </div>
              {items.map((_, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field text-center"
                >
                  <span className="size">Cotton</span>
                </div>
              ))}
            </div>

            {/* Add to Cart */}
            <div className="tf-compare-row">
              <div className="tf-compare-col tf-compare-field d-md-block d-none">
                <h6>Add To Cart</h6>
              </div>
              {items.map((product, i) => (
                <div
                  key={i}
                  className="tf-compare-col tf-compare-field tf-compare-viewcart text-center"
                >
                  <a
                    href="#"
                    className="btn-view-cart"
                    onClick={(e) => {
                      e.preventDefault();
                      addProductToCart(product.id);
                    }}
                  >
                    {isAddedToCartProducts(product.id)
                      ? "Already Added"
                      : "Add to cart "}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
