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

  const getCartListFromLS = (): any[] => {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem("cartList");
    if (!raw) return [];

    let v: any = raw;
    try {
      v = JSON.parse(raw);
    } catch {
      /* keep as string */
    }

    // handle double-encoded JSON: "\"[...]" -> parse again
    if (typeof v === "string") {
      try {
        v = JSON.parse(v);
      } catch {
        return [];
      }
    }

    if (Array.isArray(v)) return v;
    if (v && Array.isArray(v.items)) return v.items; // fallback shape
    return [];
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault();

    const lsItems = getCartListFromLS();
    const source = lsItems.length ? lsItems : cartProducts;

    if (!Array.isArray(source) || !source.length) {
      alert("Your cart is empty.");
      return;
    }

    // normalize and merge by title
    const normalized = source
      .map((it: any) => ({
        title: String(
          it.title ?? it.name ?? it.productName ?? `Item #${it.id ?? ""}`
        ).trim(),
        quantity: Number(it.quantity ?? 1),
      }))
      .filter((x) => x.title && x.quantity > 0);

    const mergedMap = normalized.reduce((acc, cur) => {
      const key = cur.title.toLowerCase();
      if (!acc[key]) acc[key] = { title: cur.title, quantity: 0 };
      acc[key].quantity += cur.quantity;
      return acc;
    }, {} as Record<string, { title: string; quantity: number }>);

    const merged = Object.values(mergedMap);
    if (!merged.length) {
      alert("Your cart is empty.");
      return;
    }

    const header = "Order request via Eastsidebarbells";
    const lines = merged
      .map((it, i) => `${i + 1}. ${it.title} x ${it.quantity}`)
      .join("\n");
    const subtotal = `Subtotal: $${Number(totalPrice || 0).toFixed(2)}`;
    const note = "Please confirm stock & delivery. Thank you!";
    const message = `${header}\n\n${lines}\n\n${subtotal}\n${note}`;

    // copy (best-effort; requires https + user gesture)
    navigator.clipboard?.writeText(message).catch(() => {});

    // open WhatsApp in new tab (no redirect of current page)
    const phone = "6598182573"; // 65 + number, no plus sign
    const wa = new URL(`https://wa.me/${phone}`);
    wa.searchParams.set("text", message);
    window.open(wa.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="modal fullRight fade modal-shopping-cart" id="shoppingCart">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* <div className="tf-minicart-recommendations">
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
          </div> */}
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
                            href={`/shop`}
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
                                    className="link line-clamp-1 flex-wrap"
                                  >
                                    {product.title}
                                  </Link>
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
                      <button
                        className="tf-btn w-100 btn-onsurface"
                        onClick={handleWhatsAppOrder}
                      >
                        WhatsApp Order
                      </button>
                    </div>
                    <div className="text-center">
                      <Link className="link btn-line" href={`/shop`}>
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
