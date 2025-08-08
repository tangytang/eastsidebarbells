"use client";
import React, { useState } from "react";

const VariantPicker = () => {
  const [selectedSize, setSelectedSize] = useState("Size C - Large");
  const [selectedPrice, setSelectedPrice] = useState("99.99");
  const handleClick = async () => {
    if (typeof window !== "undefined") {
      const modalElement = document.getElementById("size-guide");

      if (modalElement) {
        const bootstrap = await import("bootstrap"); // Dynamically import Bootstrap
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }
  };

  const sizeOptions = [
    { id: "values-s1", value: "Size A - Small", price: "" },
    { id: "values-s2", value: "Size B - Medium", price: "89.99" },
    { id: "values-s3", value: "Size C - Large", price: "99.99" },
  ];

  const handleSizeChange = (value: string, price: string) => {
    setSelectedSize(value);
    setSelectedPrice(price);
  };

  return (
    <div className="variant-picker-item">
      <div className="d-flex justify-content-between mb_12">
        <div className="variant-picker-label">
          Size:
          <span className="text-title variant-picker-label-value">
            {selectedSize}
          </span>
        </div>
        <a
          className="size-guide text-title link show-size-guide"
          onClick={handleClick}
        >
          Find Your Size
        </a>
      </div>
      <div className="variant-picker-values gap12">
        {sizeOptions.map((option, index) => (
          <React.Fragment key={option.id}>
            <input
              type="radio"
              id={option.id}
              checked={selectedSize === option.value}
              onChange={() => handleSizeChange(option.value, option.price)}
            />
            <label
              className="style-text size-btn"
              htmlFor={option.id}
              onClick={() => handleSizeChange(option.value, option.price)}
            >
              <span className="text-title">{option.value}</span>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default VariantPicker;
