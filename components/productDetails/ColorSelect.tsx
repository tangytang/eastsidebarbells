"use client";
import React, { useState } from "react";

const ColorOptions = ({
  selectedColor = "Beige",
  setSelectedColor = (color: string) => {},
}) => {
  const colors = [
    {
      id: "beige",
      value: "Beige",
      color: "beige",
      className: "bg-color-beige1",
      price: null,
    },
    {
      id: "gray",
      value: "Gray",
      color: "gray",
      className: "bg-color-gray",
      price: "79.99",
      defaultChecked: true,
    },
    {
      id: "grey",
      value: "Grey",
      color: "grey",
      className: "bg-color-grey",
      price: "89.99",
    },
  ];

  // Initialize state with the default checked color (gray in this case)

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
          />
          <label
            className={`hover-tooltip tooltip-bot radius-60 color-btn ${
              selectedColor === color.value ? "active" : ""
            }`}
            htmlFor={`values-${color.id}`}
            data-value={color.value}
            data-color={color.color}
            data-price={color.price}
          >
            <span className={`btn-checkbox ${color.className}`} />
            <span className="tooltip">{color.value}</span>
          </label>
        </React.Fragment>
      ))}
    </>
  );
};

export default ColorOptions;
