import React from "react";
import SidebarNav from "./SidebarNav";
import Image from "next/image";
export default function OrderDetails() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="my-account-wrap">
          <SidebarNav />
          <div className="my-account-content">
            <div className="account-order-details">
              <div className="wd-form-order">
                <div className="order-head">
                  <figure className="img-product">
                    <Image
                      alt="product"
                      src="/images/shop/product-1.jpg"
                      width={900}
                      height={900}
                    />
                  </figure>
                  <div className="content">
                    <div className="badge">In Progress</div>
                    <h6 className="mt-8 fw-5">Order #17493</h6>
                  </div>
                </div>
                <div className="tf-grid-layout md-col-2 gap-15">
                  <div className="item">
                    <div className="text-2 text_secondary">Item</div>
                    <div className="text-2 mt_4">Office Chairs</div>
                  </div>
                  <div className="item">
                    <div className="text-2 text_secondary">Courier</div>
                    <div className="text-2 mt_4">Ergonomic Chair Pro</div>
                  </div>
                  <div className="item">
                    <div className="text-2 text_secondary">Start Time</div>
                    <div className="text-2 mt_4">
                      04 September 2025, 13:30:23
                    </div>
                  </div>
                  <div className="item">
                    <div className="text-2 text_secondary">Address</div>
                    <div className="text-2 mt_4">
                      1234 Fashion Street, Suite 567, New York
                    </div>
                  </div>
                </div>
                <div className="widget-tabs style-2 widget-order-tab">
                  <ul className="widget-menu-tab">
                    <li className="item-title active">
                      <span className="inner text-body-default">
                        Order History
                      </span>
                    </li>
                    <li className="item-title">
                      <span className="inner text-body-default">
                        Item Details
                      </span>
                    </li>
                    <li className="item-title">
                      <span className="inner text-body-default">Courier</span>
                    </li>
                    <li className="item-title">
                      <span className="inner text-body-default">Receiver</span>
                    </li>
                  </ul>
                  <div className="widget-content-tab">
                    <div className="widget-content-inner active">
                      <div className="widget-timeline">
                        <ul className="timeline">
                          <li>
                            <div className="timeline-badge success" />
                            <div className="timeline-box">
                              <a className="timeline-panel" href="#">
                                <div className="text-2 fw-6">
                                  Product Shipped
                                </div>
                                <span>10/07/2025 4:30pm</span>
                              </a>
                              <p>
                                <strong>Courier Service : </strong>
                                FedEx World Service Center
                              </p>
                              <p>
                                <strong>Estimated Delivery Date : </strong>
                                12/07/2025
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-badge success" />
                            <div className="timeline-box">
                              <a className="timeline-panel" href="#">
                                <div className="text-2 fw-6">
                                  Product Shipped
                                </div>
                                <span>10/07/2025 4:30pm</span>
                              </a>
                              <p>
                                <strong>Tracking Number : </strong>
                                2307-3215-6759
                              </p>
                              <p>
                                <strong>Warehouse : </strong>
                                T-Shirt 10b
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-badge" />
                            <div className="timeline-box">
                              <a className="timeline-panel" href="#">
                                <div className="text-2 fw-6">
                                  Product Packaging
                                </div>
                                <span>12/07/2025 4:34pm</span>
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="timeline-badge" />
                            <div className="timeline-box">
                              <a className="timeline-panel" href="#">
                                <div className="text-2 fw-6">Order Placed</div>
                                <span>11/07/2025 2:36pm</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget-content-inner">
                      <div className="order-head">
                        <figure className="img-product">
                          <Image
                            alt="product"
                            src="/images/shop/product-1.jpg"
                            width={900}
                            height={900}
                          />
                        </figure>
                        <div className="content">
                          <div className="text-2">Ergonomic Chair Pro</div>
                          <div className="mt_4">
                            <span className="">Price :</span>
                            $219.99
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li className="d-flex justify-content-between text-2">
                          <span>Total Price</span>
                          <span className="">$219.99</span>
                        </li>
                        <li className="d-flex justify-content-between text-2 mt_4 pb_8 line-bt">
                          <span>Total Discounts</span>
                          <span className="">$10</span>
                        </li>
                        <li className="d-flex justify-content-between text-2 mt_8">
                          <span>Order Total</span>
                          <span className="">$209.99</span>
                        </li>
                      </ul>
                    </div>
                    <div className="widget-content-inner">
                      <p>
                        Our courier service is dedicated to providing fast,
                        reliable, and secure delivery solutions tailored to meet
                        your needs. Whether you're sending documents, parcels,
                        or larger shipments, our team ensures that your items
                        are handled with the utmost care and delivered on time.
                        With a commitment to customer satisfaction, real-time
                        tracking, and a wide network of routes, we make it easy
                        for you to send and receive packages both locally and
                        internationally. Choose our service for a seamless and
                        efficient delivery experience.
                      </p>
                    </div>
                    <div className="widget-content-inner">
                      <p className="text-2 text-success">
                        Thank you Your order has been received
                      </p>
                      <ul className="mt_20">
                        <li>
                          Order Number : <span className="fw-7">#17493</span>
                        </li>
                        <li>
                          Date :
                          <span className="fw-7">17/07/2025, 02:34pm</span>
                        </li>
                        <li>
                          Total : <span className="fw-7">$18.95</span>
                        </li>
                        <li>
                          Payment Methods :
                          <span className="fw-7">Cash on Delivery</span>
                        </li>
                      </ul>
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
