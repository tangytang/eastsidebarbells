"use client";
import React, { useState } from "react";

const ColorOptions2 = ({
  selectedColor = "Beige",
  setSelectedColor = (color: string) => {},
}) => {
  const colors = [
    {
      id: "beige",
      value: "Beige",
      color: "beige",
      imageSrc: "/images/shop/product-1.jpg",
      price: null,
    },
    {
      id: "gray",
      value: "Yellow", // Changed to match your example
      color: "yellow", // Changed to match your example
      imageSrc: "/images/shop/product-9.jpg",
      price: "79.99",
      defaultChecked: true,
    },
    // Add more colors as needed
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <>
      {colors.map((color) => (
        <React.Fragment key={color.id}>
          <input
            id={`values-${color.id}`}
            type="radio"
            name="color1"
            checked={selectedColor === color.value}
            onChange={() => handleColorChange(color.value)}
            className="hidden" // Hide the actual radio input
          />
          <label
            className={`style-image hover-tooltip tooltip-bot color-btn ${
              selectedColor === color.value ? "active" : ""
            }`}
            htmlFor={`values-${color.id}`}
            data-value={color.value}
            data-color={color.color}
            data-price={color.price}
            onClick={() => handleColorChange(color.value)}
          >
            <img
              className="lazyload"
              data-src={color.imageSrc}
              alt=""
              src={color.imageSrc}
              width={color.id === "beige" ? 900 : 600} // Conditional width based on your example
              height={color.id === "beige" ? 900 : 600} // Conditional height based on your example
            />
            <span className="tooltip">{color.value}</span>
          </label>
        </React.Fragment>
      ))}
    </>
  );
};

export default ColorOptions2;
