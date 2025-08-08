import React from "react";

export default function Shipping({ headingStyle2 = false }) {
  return (
    <>
      <div className="w-100">
        {headingStyle2 ? (
          <div className="text-btn-uppercase mb_12">We've got your back</div>
        ) : (
          <h6 className="text-btn-uppercase mb_12">We've got your back</h6>
        )}

        <p className="mb_12">
          One delivery fee to most locations (check our Orders &amp; Delivery
          page)
        </p>
        <p className="">
          Free returns within 14 days (excludes final sale and made-to-order
          items, face masks and certain products containing hazardous or
          flammable materials, such as fragrances and aerosols)
        </p>
      </div>
      <div className="w-100">
        {headingStyle2 ? (
          <div className="text-btn-uppercase mb_12">
            Import duties information
          </div>
        ) : (
          <h6 className="text-btn-uppercase mb_12">
            Import duties information
          </h6>
        )}

        <p>
          Let us handle the legwork. Delivery duties are included in the item
          price when shipping to all EU countries (excluding the Canary
          Islands), plus The United Kingdom, USA, Canada, China Mainland,
          Australia, New Zealand, Puerto Rico, Switzerland, Singapore, Republic
          Of Korea, Kuwait, Mexico, Qatar, India, Norway, Saudi Arabia, Taiwan
          Region, Thailand, U.A.E., Japan, Brazil, Isle of Man, San Marino,
          Colombia, Chile, Argentina, Egypt, Lebanon, Hong Kong SAR, Bahrain and
          Turkey. All import duties are included in your order – the price you
          see is the price you pay.
        </p>
      </div>
      <div className="w-100">
        {headingStyle2 ? (
          <div className="text-btn-uppercase mb_12">Estimated delivery</div>
        ) : (
          <h6 className="text-btn-uppercase mb_12">Estimated delivery</h6>
        )}

        <p className="mb_6 font-2">Express: May 10 - May 17</p>
        <p className="font-2">Sending from USA</p>
      </div>
      <div className="w-100">
        {headingStyle2 ? (
          <div className="text-btn-uppercase mb_12">Need more information?</div>
        ) : (
          <h6 className="text-btn-uppercase mb_12">Need more information?</h6>
        )}

        <div>
          <a
            href="#"
            className="link text-secondary text-decoration-underline mb_6"
          >
            Orders &amp; delivery
          </a>
        </div>
        <div>
          <a
            href="#"
            className="link text-secondary text-decoration-underline mb_6"
          >
            Returns &amp; refunds
          </a>
        </div>
        <div>
          <a href="#" className="link text-secondary text-decoration-underline">
            Duties &amp; taxes
          </a>
        </div>
      </div>
    </>
  );
}
