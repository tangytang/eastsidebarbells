"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import ProgressBarComponent from "../common/Progressbar";
import { useContextElement } from "@/context/Context";
import { products2 } from "@/data/products";

export default function ShoppingCart() {
  const [openTool, setOpenTool] = useState(-1);
  const {
    cartProducts,
    totalPrice,
    setCartProducts,
    addProductToCart,
    isAddedToCartProducts,
    updateQuantity,
  } = useContextElement();

  const removeItem = (id: number) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  return (
    <div className="modal fullRight fade modal-shopping-cart" id="shoppingCart">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="tf-minicart-recommendations">
            <h6 className="title">You May Also Like</h6>
            <div className="wrap-recommendations">
              <div className="list-cart">
                {products2.map((product, i) => (
                  <div key={i} className="list-cart-item">
                    <div className="image">
                      <Image
                        className="lazyload"
                        alt=""
                        src={product.imgSrc}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div className="content">
                      <div className="name">
                        <Link
                          className="link text-line-clamp-1"
                          href={`/product-detail/${product.id}`}
                        >
                          {product.title}
                        </Link>
                      </div>
                      <div className="cart-item-bot">
                        <div className="text-button price">
                          ${product.price.toFixed(2)}
                        </div>
                        <a
                          className="link text-button"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            if (product.id) {
                              addProductToCart(product.id);
                            }
                          }}
                        >
                          {isAddedToCartProducts(product.id)
                            ? "Already Added"
                            : "Add to Cart"}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-grow-1 h-100">
            <div className="header">
              <h5 className="title">Shopping Cart</h5>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="wrap">
              <div className="tf-mini-cart-threshold">
                <div className="tf-progress-bar">
                  <ProgressBarComponent max={75}>
                    <i className="icon icon-shipping" />
                  </ProgressBarComponent>
                </div>
                <div className="text-caption-1">
                  Congratulations! You've got free shipping!
                </div>
              </div>
              <div className="tf-mini-cart-wrap">
                <div className="tf-mini-cart-main">
                  <div className="tf-mini-cart-sroll">
                    <div className="tf-mini-cart-items">
                      {!cartProducts.length ? (
                        <div className="mx-4 my-4 text-center">
                          <div>Your Cart is Empty</div>
                          <Link
                            href={`/shop-default`}
                            className="tf-btn  btn-white has-border mt-2 mx-auto"
                          >
                            Explore Products
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {cartProducts.map((product, i) => (
                        <div key={i} className="tf-mini-cart-item file-delete">
                          <div className="tf-mini-cart-image">
                            <Image
                              className="lazyload"
                              alt=""
                              src={product.imgSrc}
                              width={200}
                              height={200}
                            />
                          </div>
                          <div className="tf-mini-cart-info flex-grow-1">
                            <div className="content">
                              <div className="left">
                                <div className="text-title">
                                  <Link
                                    href={`/product-detail/${product.id}`}
                                    className="link line-clamp-1"
                                  >
                                    {product.title}
                                  </Link>
                                </div>
                                <div className="text-secondary-2">
                                  Gray, Size C
                                </div>
                                <div className="wg-quantity">
                                  <span
                                    className="btn-quantity btn-decrease"
                                    onClick={() =>
                                      updateQuantity(
                                        product.id,
                                        product.quantity - 1
                                      )
                                    }
                                  >
                                    -
                                  </span>
                                  <input
                                    type="text"
                                    className="quantity-product"
                                    name="number"
                                    readOnly
                                    value={product.quantity}
                                  />
                                  <span
                                    className="btn-quantity btn-increase"
                                    onClick={() =>
                                      updateQuantity(
                                        product.id,
                                        product.quantity + 1
                                      )
                                    }
                                  >
                                    +
                                  </span>
                                </div>
                              </div>
                              <div className="right">
                                <div
                                  className="text-button tf-btn-remove remove"
                                  onClick={() => removeItem(product.id)}
                                >
                                  Remove
                                </div>
                                <div className="text-button">
                                  {product.quantity} X $
                                  {product.price.toFixed(2)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="tf-mini-cart-bottom">
                  <div className="tf-mini-cart-tool">
                    <div
                      className="tf-mini-cart-tool-btn btn-add-note"
                      onClick={() => setOpenTool((pre) => (pre == 1 ? -1 : 1))}
                    >
                      <svg
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_6133_36620)">
                          <path
                            d="M10 3.33325H4.16667C3.72464 3.33325 3.30072 3.50885 2.98816 3.82141C2.67559 4.13397 2.5 4.55789 2.5 4.99992V16.6666C2.5 17.1086 2.67559 17.5325 2.98816 17.8451C3.30072 18.1577 3.72464 18.3333 4.16667 18.3333H15.8333C16.2754 18.3333 16.6993 18.1577 17.0118 17.8451C17.3244 17.5325 17.5 17.1086 17.5 16.6666V10.8333"
                            stroke="#181818"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.25 2.0832C16.5815 1.75168 17.0312 1.56543 17.5 1.56543C17.9688 1.56543 18.4185 1.75168 18.75 2.0832C19.0815 2.41472 19.2678 2.86436 19.2678 3.3332C19.2678 3.80204 19.0815 4.25168 18.75 4.5832L10.8333 12.4999L7.5 13.3332L8.33333 9.99986L16.25 2.0832Z"
                            stroke="#181818"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_6133_36620">
                            <rect
                              width={20}
                              height={20}
                              fill="white"
                              transform="translate(0.833008)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="text-caption-1">Note</div>
                    </div>
                    <div
                      className="tf-mini-cart-tool-btn btn-estimate-shipping"
                      onClick={() => setOpenTool((pre) => (pre == 2 ? -1 : 2))}
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.333 2.5H0.833008V13.3333H13.333V2.5Z"
                          stroke="#181818"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.333 6.66675H16.6663L19.1663 9.16675V13.3334H13.333V6.66675Z"
                          stroke="#181818"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.58333 17.4999C5.73393 17.4999 6.66667 16.5672 6.66667 15.4166C6.66667 14.266 5.73393 13.3333 4.58333 13.3333C3.43274 13.3333 2.5 14.266 2.5 15.4166C2.5 16.5672 3.43274 17.4999 4.58333 17.4999Z"
                          stroke="#181818"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.4163 17.4999C16.5669 17.4999 17.4997 16.5672 17.4997 15.4166C17.4997 14.266 16.5669 13.3333 15.4163 13.3333C14.2657 13.3333 13.333 14.266 13.333 15.4166C13.333 16.5672 14.2657 17.4999 15.4163 17.4999Z"
                          stroke="#181818"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text-caption-1">Shipping</div>
                    </div>
                    <div
                      className="tf-mini-cart-tool-btn btn-add-coupon"
                      onClick={() => setOpenTool((pre) => (pre == 3 ? -1 : 3))}
                    >
                      <svg
                        width={21}
                        height={20}
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.3247 11.1751L11.3497 17.1501C11.1949 17.305 11.0111 17.428 10.8087 17.5118C10.6064 17.5957 10.3895 17.6389 10.1705 17.6389C9.95148 17.6389 9.7346 17.5957 9.53227 17.5118C9.32994 17.428 9.14613 17.305 8.99134 17.1501L1.83301 10.0001V1.66675H10.1663L17.3247 8.82508C17.6351 9.13735 17.8093 9.55977 17.8093 10.0001C17.8093 10.4404 17.6351 10.8628 17.3247 11.1751V11.1751Z"
                          stroke="#181818"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.99902 5.83325H6.00902"
                          stroke="#181818"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text-caption-1">Coupon</div>
                    </div>
                  </div>
                  <div className="tf-mini-cart-bottom-wrap">
                    <div className="tf-cart-totals-discounts">
                      <h5>Subtotal</h5>
                      <h5 className="tf-totals-total-value">
                        {totalPrice.toFixed(2)}
                      </h5>
                    </div>
                    <div className="tf-cart-checkbox">
                      <div className="tf-checkbox-wrapp">
                        <input
                          className=""
                          type="checkbox"
                          id="CartDrawer-Form_agree"
                          name="agree_checkbox"
                        />
                        <div>
                          <i className="icon-check" />
                        </div>
                      </div>
                      <label htmlFor="CartDrawer-Form_agree">
                        I agree with{" "}
                        <Link
                          href={`/term-of-use`}
                          className="link"
                          title="Terms of Service"
                        >
                          Terms &amp; Conditions
                        </Link>
                      </label>
                    </div>
                    <div className="tf-mini-cart-view-checkout">
                      <Link
                        href={`/shopping-cart`}
                        className="tf-btn w-100 btn-white has-border"
                      >
                        View cart
                      </Link>
                      <Link
                        href={`/checkout`}
                        className="tf-btn w-100 btn-onsurface"
                      >
                        Check Out
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="link btn-line" href={`/shop-default`}>
                        Or continue shopping
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className={`tf-mini-cart-tool-openable add-note   ${
                    openTool == 1 ? "open" : ""
                  }`}
                >
                  <div className="tf-mini-cart-tool-content">
                    <label
                      htmlFor="Cart-note"
                      className="tf-mini-cart-tool-text"
                    >
                      <span className="icon">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_6766_32777)">
                            <path
                              d="M9.16699 3.33325H3.33366C2.89163 3.33325 2.46771 3.50885 2.15515 3.82141C1.84259 4.13397 1.66699 4.55789 1.66699 4.99992V16.6666C1.66699 17.1086 1.84259 17.5325 2.15515 17.8451C2.46771 18.1577 2.89163 18.3333 3.33366 18.3333H15.0003C15.4424 18.3333 15.8663 18.1577 16.1788 17.8451C16.4914 17.5325 16.667 17.1086 16.667 16.6666V10.8333"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.417 2.0832C15.7485 1.75168 16.1981 1.56543 16.667 1.56543C17.1358 1.56543 17.5855 1.75168 17.917 2.0832C18.2485 2.41472 18.4348 2.86436 18.4348 3.3332C18.4348 3.80204 18.2485 4.25168 17.917 4.5832L10.0003 12.4999L6.66699 13.3332L7.50033 9.99986L15.417 2.0832Z"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="text-title">Note</span>
                    </label>
                    <form
                      className="form-add-note tf-mini-cart-tool-wrap"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <fieldset className="d-flex">
                        <textarea
                          name="note"
                          id="Cart-note"
                          placeholder="Add special instructions for your order..."
                          defaultValue={""}
                        />
                      </fieldset>
                      <div className="tf-cart-tool-btns">
                        <button
                          type="submit"
                          className="tf-btn btn-onsurface w-full"
                        >
                          Save
                        </button>
                        <div
                          className="text-center link w-full text-btn-uppercase tf-mini-cart-tool-close"
                          onClick={() => setOpenTool(-1)}
                        >
                          Cancel
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className={`tf-mini-cart-tool-openable estimate-shipping   ${
                    openTool == 2 ? "open" : ""
                  }`}
                >
                  <div className="tf-mini-cart-tool-content">
                    <label className="tf-mini-cart-tool-text">
                      <span className="icon">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_6766_32777)">
                            <path
                              d="M9.16699 3.33325H3.33366C2.89163 3.33325 2.46771 3.50885 2.15515 3.82141C1.84259 4.13397 1.66699 4.55789 1.66699 4.99992V16.6666C1.66699 17.1086 1.84259 17.5325 2.15515 17.8451C2.46771 18.1577 2.89163 18.3333 3.33366 18.3333H15.0003C15.4424 18.3333 15.8663 18.1577 16.1788 17.8451C16.4914 17.5325 16.667 17.1086 16.667 16.6666V10.8333"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.417 2.0832C15.7485 1.75168 16.1981 1.56543 16.667 1.56543C17.1358 1.56543 17.5855 1.75168 17.917 2.0832C18.2485 2.41472 18.4348 2.86436 18.4348 3.3332C18.4348 3.80204 18.2485 4.25168 17.917 4.5832L10.0003 12.4999L6.66699 13.3332L7.50033 9.99986L15.417 2.0832Z"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="text-title">
                        Estimate shipping rates
                      </span>
                    </label>
                    <form
                      className="form-estimate-shipping tf-mini-cart-tool-wrap"
                      id="form-estimate-shipping"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="mb_12">
                        <div className="text-caption-1 text-secondary mb_8">
                          Country
                        </div>
                        <div className="tf-select">
                          <select
                            className="text-title"
                            id="shipping-country-form"
                            name="address[country]"
                            data-default=""
                          >
                            <option
                              value="Australia"
                              data-provinces='[["Australian Capital Territory","Australian Capital Territory"],["New South Wales","New South Wales"],["Northern Territory","Northern Territory"],["Queensland","Queensland"],["South Australia","South Australia"],["Tasmania","Tasmania"],["Victoria","Victoria"],["Western Australia","Western Australia"]]'
                            >
                              Australia
                            </option>
                            <option value="Austria" data-provinces="[]">
                              Austria
                            </option>
                            <option value="Belgium" data-provinces="[]">
                              Belgium
                            </option>
                            <option
                              value="Canada"
                              data-provinces='[["Ontario","Ontario"],["Quebec","Quebec"]]'
                            >
                              Canada
                            </option>
                            <option value="Czech Republic" data-provinces="[]">
                              Czechia
                            </option>
                            <option value="Denmark" data-provinces="[]">
                              Denmark
                            </option>
                            <option value="Finland" data-provinces="[]">
                              Finland
                            </option>
                            <option value="France" data-provinces="[]">
                              France
                            </option>
                            <option value="Germany" data-provinces="[]">
                              Germany
                            </option>
                            <option
                              value="United States"
                              data-provinces='[["Alabama","Alabama"],["California","California"],["Florida","Florida"]]'
                            >
                              United States
                            </option>
                            <option
                              value="United Kingdom"
                              data-provinces='[["England","England"],["Scotland","Scotland"],["Wales","Wales"],["Northern Ireland","Northern Ireland"]]'
                            >
                              United Kingdom
                            </option>
                            <option value="India" data-provinces="[]">
                              India
                            </option>
                            <option value="Japan" data-provinces="[]">
                              Japan
                            </option>
                            <option value="Mexico" data-provinces="[]">
                              Mexico
                            </option>
                            <option value="South Korea" data-provinces="[]">
                              South Korea
                            </option>
                            <option value="Spain" data-provinces="[]">
                              Spain
                            </option>
                            <option value="Italy" data-provinces="[]">
                              Italy
                            </option>
                            <option
                              value="Vietnam"
                              data-provinces='[["Ha Noi","Ha Noi"],["Da Nang","Da Nang"],["Ho Chi Minh","Ho Chi Minh"]]'
                            >
                              Vietnam
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="mb_12">
                        <div className="text-caption-1 text-secondary mb_8">
                          State/Province
                        </div>
                        <div className="tf-select">
                          <select
                            className="text-title"
                            name="address[province]"
                            id="shipping-province-form"
                            data-default=""
                          />
                        </div>
                      </div>
                      <fieldset className="mb_12">
                        <div className="text-caption-1 text-secondary mb_8">
                          Postal/Zip Code
                        </div>
                        <input
                          type="text"
                          placeholder={"100000"}
                          data-opend-focus=""
                          id="zipcode"
                          name="address[zip]"
                          defaultValue=""
                        />
                      </fieldset>
                      <div
                        id="zipcode-message"
                        className="error mb_12"
                        style={{ display: "none" }}
                      >
                        We found one shipping rate available for undefined.
                      </div>
                      <div
                        id="zipcode-success"
                        className="success mb_12"
                        style={{ display: "none" }}
                      >
                        <p>
                          We found one shipping rate available for your address:
                        </p>
                        <p className="standard">
                          Standard at
                          <span className="standard-price">$8.00</span> USD
                        </p>
                      </div>
                      <div className="tf-cart-tool-btns">
                        <button
                          type="submit"
                          className="tf-btn btn-onsurface w-full w-100"
                        >
                          Calculator
                        </button>
                        <div
                          className="text-center w-100 link tf-mini-cart-tool-close"
                          onClick={() => setOpenTool(-1)}
                        >
                          Cancel
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className={`tf-mini-cart-tool-openable add-coupon  ${
                    openTool == 3 ? "open" : ""
                  }`}
                >
                  <div className="tf-mini-cart-tool-content">
                    <label className="tf-mini-cart-tool-text">
                      <span className="icon">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_6766_32777)">
                            <path
                              d="M9.16699 3.33325H3.33366C2.89163 3.33325 2.46771 3.50885 2.15515 3.82141C1.84259 4.13397 1.66699 4.55789 1.66699 4.99992V16.6666C1.66699 17.1086 1.84259 17.5325 2.15515 17.8451C2.46771 18.1577 2.89163 18.3333 3.33366 18.3333H15.0003C15.4424 18.3333 15.8663 18.1577 16.1788 17.8451C16.4914 17.5325 16.667 17.1086 16.667 16.6666V10.8333"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.417 2.0832C15.7485 1.75168 16.1981 1.56543 16.667 1.56543C17.1358 1.56543 17.5855 1.75168 17.917 2.0832C18.2485 2.41472 18.4348 2.86436 18.4348 3.3332C18.4348 3.80204 18.2485 4.25168 17.917 4.5832L10.0003 12.4999L6.66699 13.3332L7.50033 9.99986L15.417 2.0832Z"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="text-title">Add A Coupon Code</span>
                    </label>
                    <form
                      className="form-add-coupon tf-mini-cart-tool-wrap"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <fieldset className="">
                        <div className="text-caption-1 text-secondary mb_8">
                          Enter Code
                        </div>
                        <input
                          className=""
                          type="text"
                          placeholder="Discount code"
                          name="text"
                          tabIndex={2}
                          defaultValue=""
                          aria-required="true"
                          required
                        />
                      </fieldset>
                      <div className="tf-cart-tool-btns">
                        <button
                          type="submit"
                          className="tf-btn btn-onsurface w-full w-100"
                        >
                          Save
                        </button>
                        <div
                          className="text-center w-100 link tf-mini-cart-tool-close"
                          onClick={() => setOpenTool(-1)}
                        >
                          Cancel
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
