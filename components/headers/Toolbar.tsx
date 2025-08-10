import Link from "next/link";
import React from "react";

export default function Toolbar() {
  return (
    <div className="tf-toolbar-bottom">
      <div className="toolbar-item">
        <Link href={`/shop`}>
          <div className="toolbar-icon">
            <span className="icon icon-squaresfour" />
          </div>
          <div className="toolbar-label">Shop</div>
        </Link>
      </div>
      <div className="toolbar-item">
        <a
          href="#shopCategories"
          data-bs-toggle="offcanvas"
          aria-controls="shopCategories"
        >
          <div className="toolbar-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
            </svg>
          </div>
          <div className="toolbar-label">Categories</div>
        </a>
      </div>
      <div className="toolbar-item">
        <a href="#search" data-bs-toggle="modal">
          <div className="toolbar-icon">
            <span className="icon icon-search" />
          </div>
          <div className="toolbar-label">Search</div>
        </a>
      </div>
      <div className="toolbar-item">
        <Link href={`/wish-list`}>
          <div className="toolbar-icon">
            <span className="icon icon-heart" />
          </div>
          <div className="toolbar-label">Wishlist</div>
        </Link>
      </div>
      <div className="toolbar-item">
        <a href="#shoppingCart" data-bs-toggle="modal">
          <div className="toolbar-icon">
            <span className="icon icon-cart" />
          </div>
          <div className="toolbar-label">Cart</div>
        </a>
      </div>
    </div>
  );
}
