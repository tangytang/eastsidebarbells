import React from "react";
import Description from "./Description";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import Shipping from "./Shipping";
import ReturnPolicies from "./ReturnPolicies";

export default function Descriptions3() {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="mb_12 border-bottom pb_10">Description</h4>
            <div className="mb_32 tab-description">
              <Description headingStyle2 />
            </div>
            <h4 className="mb_12 border-bottom pb_10">Customer Reviews</h4>
            <div className="mb_32 tab-reviews style-2 write-cancel-review-wrap">
              <Review headingStyle2 />
              <ReviewForm />
            </div>
            <h4 className="mb_12 border-bottom pb_10">
              Shipping &amp; Returns
            </h4>
            <div className="mb_32 tab-shipping">
              <Shipping headingStyle2 />
            </div>
            <h4 className="mb_12 border-bottom pb_10">Return Policies</h4>
            <div className="tab-policies">
              <ReturnPolicies headingStyle2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
