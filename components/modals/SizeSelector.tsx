"use client";
import { useState } from "react";
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

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("values-s1");

  const sizeOptions = [
    {
      id: "values-s1",
      label: "Size A - Small",
      value: "Size A - Small",
    },
    {
      id: "values-m1",
      label: "Size B - Medium",
      value: "Size B - Medium",
      price: "89.99",
    },
  ];

  return (
    <div className="variant-picker-item">
      <div className="d-flex justify-content-between mb_12">
        <div className="variant-picker-label">
          Size:
          <span className="text-title variant-picker-label-value">
            {sizeOptions.find((opt) => opt.id === selectedSize)?.label}
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
        {sizeOptions.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              name="size2"
              id={option.id}
              checked={selectedSize === option.id}
              onChange={() => setSelectedSize(option.id)}
            />
            <label
              className={`style-text size-btn ${
                selectedSize === option.id ? "active" : ""
              }`}
              htmlFor={option.id}
              data-value={option.value}
              {...(option.price ? { "data-price": option.price } : {})}
            >
              <span className="text-title">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
