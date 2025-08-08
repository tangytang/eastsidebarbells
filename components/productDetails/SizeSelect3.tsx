"use client";
import { useState } from "react";

interface SizeOption {
  value: string;
  price: string;
}

const VariantPicker = () => {
  const sizes: SizeOption[] = [
    { value: "A - Small", price: "79.99" },
    { value: "B - Medium", price: "79.99" },
    { value: "C - Large", price: "89.99" },
  ];

  const [selectedSize, setSelectedSize] = useState<string>(sizes[0].value);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
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
          href="#size-guide"
          data-bs-toggle="modal"
          className="size-guide text-title link"
        >
          Find Your Size
        </a>
      </div>
      <div
        className="tf-dropdown-sort style-1 full position-relative"
        data-bs-toggle="dropdown"
      >
        <div className="btn-select">
          <span className="text-sort-value">{selectedSize}</span>
          <span className="icon icon-down" />
        </div>
        <div className="dropdown-menu">
          {sizes.map((size) => (
            <div
              key={size.value}
              className={`select-item select-size size-btn ${
                selectedSize === size.value ? "active" : ""
              }`}
              data-price={size.price}
              data-value={size.value}
              onClick={() => handleSizeSelect(size.value)}
            >
              <span className="text-value-item">{size.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariantPicker;
