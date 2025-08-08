import Link from "next/link";
import Image from "next/image";
import React from "react";
import SidebarNav from "./SidebarNav";

export default function AccountOrders() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="my-account-wrap">
          <SidebarNav />
          <div className="my-account-content">
            <div className="account-orders">
              <div className="wrap-account-order">
                <table>
                  <thead>
                    <tr>
                      <th className="fw-6">Order</th>
                      <th className="fw-6">Date</th>
                      <th className="fw-6">Status</th>
                      <th className="fw-6">Total</th>
                      <th className="fw-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tf-order-item">
                      <td>#123</td>
                      <td>August 1, 2025</td>
                      <td>On hold</td>
                      <td>$200.0 for 1 items</td>
                      <td>
                        <Link
                          href={`/my-account-orders-details`}
                          className="tf-btn btn-onsurface radius-4"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                    <tr className="tf-order-item">
                      <td>#345</td>
                      <td>August 2, 2025</td>
                      <td>On hold</td>
                      <td>$300.0 for 1 items</td>
                      <td>
                        <Link
                          href={`/my-account-orders-details`}
                          className="tf-btn btn-onsurface radius-4"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                    <tr className="tf-order-item">
                      <td>#567</td>
                      <td>August 3, 2025</td>
                      <td>On hold</td>
                      <td>$400.0 for 1 items</td>
                      <td>
                        <Link
                          href={`/my-account-orders-details`}
                          className="tf-btn btn-onsurface radius-4"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
