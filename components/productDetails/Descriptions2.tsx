import React from "react";
import Description from "./Description";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import Shipping from "./Shipping";
import ReturnPolicies from "./ReturnPolicies";

export default function Descriptions2() {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="accordion-product-wrap" id="accordion-product">
              <li className="accordion-product-item style-2">
                <a
                  href="#accordion-1"
                  className="accordion-title collapsed current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="accordion-1"
                >
                  <h5>Description</h5>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="accordion-1"
                  className="collapse"
                  data-bs-parent="#accordion-product"
                >
                  <div className="accordion-content tab-description">
                    <Description headingStyle2 />
                  </div>
                </div>
              </li>
              <li className="accordion-product-item style-2">
                <a
                  href="#accordion-2"
                  className="accordion-title current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="accordion-2"
                >
                  <h5>Customer Reviews</h5>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="accordion-2"
                  className="collapse show"
                  data-bs-parent="#accordion-product"
                >
                  <div className="accordion-content tab-reviews style-2 write-cancel-review-wrap">
                    <Review headingStyle2 />
                    <ReviewForm />
                  </div>
                </div>
              </li>
              <li className="accordion-product-item style-2">
                <a
                  href="#accordion-3"
                  className="accordion-title collapsed current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="accordion-3"
                >
                  <h5>Shipping &amp; Returns</h5>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="accordion-3"
                  className="collapse"
                  data-bs-parent="#accordion-product"
                >
                  <div className="accordion-content tab-shipping">
                    <Shipping headingStyle2 />
                  </div>
                </div>
              </li>
              <li className="accordion-product-item style-2">
                <a
                  href="#accordion-4"
                  className="accordion-title collapsed current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="accordion-4"
                >
                  <h5>Return Policies</h5>
                  <span className="btn-open-sub" />
                </a>
                <div
                  id="accordion-4"
                  className="collapse"
                  data-bs-parent="#accordion-product"
                >
                  <div className="accordion-content tab-policies">
                    <ReturnPolicies headingStyle2 />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
