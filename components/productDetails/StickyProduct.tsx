"use client";
import { useContextElement } from "@/context/Context";
import { products3 } from "@/data/products";
import React, { useEffect, useState } from "react";
import QuantitySelect from "../common/QuantitySelect";

export default function StickyProduct() {
  const product = products3[0];
  const [quantity, setQuantity] = useState<number>(1);
  const {
    quantityInCart,

    isAddedToCartProducts,
    addProductToCart,
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
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const myElement =
        document.querySelector<HTMLElement>(".tf-sticky-btn-atc");

      if (!myElement) return; // Early return if element not found

      if (scrollPosition >= 500) {
        myElement.classList.add("show");
      } else {
        myElement.classList.remove("show");
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div className="tf-sticky-btn-atc">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="form-sticky-atc">
              <div className="tf-sticky-atc-product">
                <div className="image">
                  <img
                    className="lazyload"
                    alt=""
                    src={product.imgSrc}
                    width={900}
                    height={900}
                  />
                </div>
                <div className="content">
                  <div className="text-title">{product.title}</div>
                  <div className="text-caption-1 text-secondary-2">
                    Green, XS, Cotton
                  </div>
                  <div className="text-title">${product.price.toFixed()}</div>
                </div>
              </div>
              <div className="tf-sticky-atc-infos">
                <div className="tf-sticky-atc-size d-flex gap-12 align-items-center">
                  <div className="tf-sticky-atc-infos-title text-title">
                    Size:
                  </div>
                  <div
                    className="tf-dropdown-sort style-2"
                    data-bs-toggle="dropdown"
                  >
                    <div className="btn-select">
                      <span className="text-sort-value font-2">M</span>
                      <span className="icon icon-down" />
                    </div>
                    <div className="dropdown-menu">
                      <div className="select-item">
                        <span className="text-value-item">S</span>
                      </div>
                      <div className="select-item active">
                        <span className="text-value-item">M</span>
                      </div>
                      <div className="select-item">
                        <span className="text-value-item">L</span>
                      </div>
                      <div className="select-item">
                        <span className="text-value-item">XL</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-sticky-atc-quantity d-flex gap-12 align-items-center">
                  <div className="tf-sticky-atc-infos-title text-title">
                    Quantity:
                  </div>
                  <QuantitySelect
                    styleClass="style-1"
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
                <div className="tf-sticky-atc-btns">
                  <a
                    href="#shoppingCart"
                    onClick={() => addProductToCart(product.id, quantity)}
                    data-bs-toggle="modal"
                    className="tf-btn btn-onsurface w-100 radius-4 btn-add-to-cart"
                  >
                    <span className="text text-btn-uppercase">
                      {" "}
                      {isAddedToCartProducts(product.id)
                        ? "Already Added"
                        : "Add to cart"}{" "}
                    </span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
