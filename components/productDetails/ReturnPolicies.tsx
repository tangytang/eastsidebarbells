import React from "react";

export default function ReturnPolicies({ headingStyle2 = false }) {
  return (
    <>
      {" "}
      {headingStyle2 ? (
        <div className="mb_12">Return Policies</div>
      ) : (
        <h6 className="mb_12">Return Policies</h6>
      )}
      <p className="mb_12 text_secondary">
        At GearO, we stand behind the quality of our products. If you're not
        completely satisfied with your purchase, we offer hassle-free returns
        within 30 days of delivery.
      </p>
      {headingStyle2 ? (
        <div className="mb_12">Easy Exchanges or Refunds</div>
      ) : (
        <h6 className="mb_12">Easy Exchanges or Refunds</h6>
      )}
      <ul className="list-text type-disc mb_12 gap-6">
        <li className="text_secondary">
          Exchange your item for a different size, color, or style, or receive a
          full refund.
        </li>
        <li className="text_secondary">
          All returned items must be unworn, in their original packaging, and
          with tags attached.
        </li>
      </ul>
      {headingStyle2 ? (
        <div className="mb_12">Simple Process</div>
      ) : (
        <h6 className="mb_12">Simple Process</h6>
      )}
      <ul className="list-text type-number">
        <li className="text_secondary">
          Initiate your return online or contact our customer service team for
          assistance.
        </li>
        <li className="text_secondary">
          Pack your item securely and include the original packing slip.
        </li>
        <li className="text_secondary">
          Ship your return back to us using our prepaid shipping label.
        </li>
        <li className="text_secondary">
          Once received, your refund will be processed promptly.
        </li>
      </ul>
      <p className="text_secondary">
        For any questions or concerns regarding returns, don't hesitate to reach
        out to our dedicated customer service team. Your satisfaction is our
        priority.
      </p>
    </>
  );
}
