import React from "react";

export default function BoughtTogether() {
  return (
    <div className="frequently-bought-together">
      <form className="form-bundle-product">
        <h5>Frequently bought together</h5>
        <div className="tf-bundle-products-wrap">
          <div className="tf-bundle-product-item align-items-center mb_20">
            <input className="tf-check m-0" type="checkbox" defaultChecked />
            <div className="tf-product-bundle-image">
              <a href="#">
                <img
                  alt=""
                  src="/images/shop/product-10.jpg"
                  width={600}
                  height={600}
                />
              </a>
            </div>
            <div className="tf-product-bundle-infos">
              <div className="text-title">Double Standing Desk</div>
              <div className="tf-product-bundle-variant tf-select">
                <select className="">
                  <option>Green, B</option>
                  <option>Green, L</option>
                </select>
              </div>
              <div className="tf-product-info-price type-small">
                <h5 className="price-on-sale">$59.99</h5>
                <div className="compare-at-price">$79.99</div>
                <div className="badges-on-sale">-25%</div>
              </div>
            </div>
          </div>
          <div className="tf-bundle-product-item align-items-center mb_20">
            <input className="tf-check m-0" type="checkbox" defaultChecked />
            <div className="tf-product-bundle-image">
              <a href="#">
                <img
                  alt=""
                  src="/images/shop/product-4.jpg"
                  width={900}
                  height={900}
                />
              </a>
            </div>
            <div className="tf-product-bundle-infos">
              <div className="text-title">Office Desk</div>
              <div className="tf-product-bundle-variant tf-select">
                <select className="">
                  <option>Green, B</option>
                  <option>Green, L</option>
                </select>
              </div>
              <div className="tf-product-info-price type-small">
                <h5 className="price-on-sale">$59.99</h5>
                <div className="compare-at-price">$79.99</div>
                <div className="badges-on-sale">-25%</div>
              </div>
            </div>
          </div>
          <div className="tf-bundle-product-item align-items-center">
            <input className="tf-check m-0" type="checkbox" />
            <div className="tf-product-bundle-image">
              <a href="#">
                <img
                  alt=""
                  src="/images/shop/product-11.jpg"
                  width={600}
                  height={600}
                />
              </a>
            </div>
            <div className="tf-product-bundle-infos">
              <div className="text-title">Duo Standing Desk</div>
              <div className="tf-product-bundle-variant tf-select">
                <select className="">
                  <option>Green, B</option>
                  <option>Green, L</option>
                </select>
              </div>
              <div className="tf-product-info-price type-small">
                <h5 className="price-on-sale">$59.99</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-bundle-product-total-submit">
          <h5>Total Price:</h5>
          <div className="tf-product-info-price type-1">
            <h4 className="price-on-sale">$68.00</h4>
            <div className="compare-at-price">$98.00</div>
            <div className="badges-on-sale">-25%</div>
          </div>
        </div>
        <a
          href="#shoppingCart"
          data-bs-toggle="modal"
          className="tf-btn btn-onsurface"
        >
          Add selected to cart
        </a>
      </form>
    </div>
  );
}
