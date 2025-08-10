"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "../common/Countdown";
import ProgressBarComponent from "../common/Progressbar";
import { useContextElement } from "@/context/Context";
import { boughtProducts } from "@/data/products";
export default function ShopCart() {
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
    <section className="flat-spacing pb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tf-cart-sold">
              <div className="notification-sold bg-surface">
                <Image
                  className="icon"
                  alt="img"
                  src="/images/logo/icon-fire.png"
                  width={24}
                  height={25}
                />
                <div className="count-text">
                  Your cart will expire in{" "}
                  <div className="js-countdown time-count">
                    <CountdownTimer style={4} />
                  </div>{" "}
                  minutes! Please checkout now before your items sell out!
                </div>
              </div>
              <div className="notification-progress">
                <div className="text">
                  Buy <span className="text_primary">$70.00</span> more to get{" "}
                  <span className="text_primary">FREESHIPPING</span>
                </div>
                <div className="progress-cart">
                  <ProgressBarComponent max={70}>
                    <span className="round" />
                  </ProgressBarComponent>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
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
                <table className="tf-table-page-cart">
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((product, i) => (
                      <tr key={i} className="tf-cart-item file-delete">
                        <td className="tf-cart-item_product">
                          <Link
                            href={`/product-detail${product.id}`}
                            className="img-box"
                          >
                            <Image
                              alt="product"
                              src={product.imgSrc}
                              width={900}
                              height={900}
                            />
                          </Link>
                          <div className="cart-info">
                            <Link
                              href={`/product-detail/${product.id}`}
                              className="cart-title link"
                            >
                              {product.title}
                            </Link>
                            <div className="variant text-caption-1">
                              Gray, Size C
                            </div>
                          </div>
                        </td>
                        <td className="tf-cart-item_price text-center">
                          <div className="cart-price text-button price-on-sale">
                            ${product.price.toFixed(2)}
                          </div>
                        </td>
                        <td
                          data-cart-title="Quantity"
                          className="tf-cart-item_quantity"
                        >
                          <div className="wg-quantity mx-md-auto">
                            <span
                              className="btn-quantity btn-decrease"
                              onClick={() =>
                                updateQuantity(product.id, product.quantity - 1)
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
                                updateQuantity(product.id, product.quantity + 1)
                              }
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td
                          data-cart-title="Total"
                          className="tf-cart-item_total text-center"
                        >
                          <div className="cart-total text-button total-price">
                            ${(product.price * product.quantity).toFixed(2)}
                          </div>
                        </td>
                        <td
                          data-cart-title="Remove"
                          className="remove-cart"
                          onClick={(e) => {
                            e.preventDefault();
                            removeItem(product.id);
                          }}
                        >
                          <span className="remove icon icon-close" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className="ip-discount-code">
                <input type="text" placeholder="Add voucher discount" />
                <button className="tf-btn btn-onsurface">Apply Code</button>
              </div>
              <div className="group-bought">
                <div className="heading">
                  <h5>Customers also bought with "Ergonomic Chair Pro”</h5>
                  <p className="text">
                    <i className="icon-percent" />
                    You will get
                    <span className="text_primary">10% OFF</span> on each
                    product
                  </p>
                </div>
                <div className="wrap-product">
                  {boughtProducts.map((product) => (
                    <div className="product-bought" key={product.id}>
                      <Link href="/product-detail" className="img-style">
                        <Image
                          alt={product.title}
                          src={product.imgSrc}
                          width={product.width}
                          height={product.height}
                        />
                      </Link>
                      <div className="content">
                        <div className="text-title">
                          <Link href="/product-detail" className="link">
                            {product.title}
                          </Link>
                        </div>
                        <div className="wrap-price">
                          <div className="price text-button">
                            ${product.price.toFixed(2)}
                          </div>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              addProductToCart(product.id);
                            }}
                            className="link text-button btn-add"
                          >
                            {isAddedToCartProducts(product.id)
                              ? "Added"
                              : "Add"}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
          <div className="col-xl-4">
            <div className="fl-sidebar-cart">
              <div className="box-order bg-surface">
                <h5 className="title">Order Summary</h5>
                <div className="subtotal text-button d-flex justify-content-between align-items-center">
                  <span>Subtotal</span>
                  <span className="total">-$80.00</span>
                </div>
                <div className="discount text-button d-flex justify-content-between align-items-center">
                  <span>Discounts</span>
                  <span className="total">-$80.00</span>
                </div>
                <div className="ship">
                  <span className="text-button">Shipping</span>
                  <div className="flex-grow-1">
                    <fieldset className="ship-item">
                      <input
                        type="radio"
                        name="ship-check"
                        className="tf-check-rounded"
                        id="free"
                        defaultChecked
                      />
                      <label htmlFor="free">
                        <span>Free Shipping</span>
                        <span className="price">$0.00</span>
                      </label>
                    </fieldset>
                    <fieldset className="ship-item">
                      <input
                        type="radio"
                        name="ship-check"
                        className="tf-check-rounded"
                        id="local"
                      />
                      <label htmlFor="local">
                        <span>Local:</span>
                        <span className="price">$35.00</span>
                      </label>
                    </fieldset>
                    <fieldset className="ship-item">
                      <input
                        type="radio"
                        name="ship-check"
                        className="tf-check-rounded"
                        id="rate"
                      />
                      <label htmlFor="rate">
                        <span>Flat Rate:</span>
                        <span className="price">$35.00</span>
                      </label>
                    </fieldset>
                  </div>
                </div>
                <h5 className="total-order d-flex justify-content-between align-items-center">
                  <span>Total</span>
                  <span className="total">$ {totalPrice.toFixed(2)}</span>
                </h5>
                <div className="box-progress-checkout">
                  <fieldset className="check-agree">
                    <input
                      type="checkbox"
                      id="check-agree"
                      className="tf-check-rounded"
                    />
                    <label htmlFor="check-agree">
                      I agree with the{" "}
                      <Link href={`/term-of-use`} className="link">
                        terms and conditions
                      </Link>
                    </label>
                  </fieldset>
                  <Link href={`/checkout`} className="tf-btn btn-onsurface">
                    Process To Checkout
                    <i className="icon-arrow-up-right" />
                  </Link>
                  <Link href={`/shop`} className="text-button text-center link">
                    Or continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
