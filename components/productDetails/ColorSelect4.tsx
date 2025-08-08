"use client";
import React, { useState } from "react";

const ColorDropdown = ({
  selectedColor = "Beige",
  setSelectedColor = (color: string) => {},
}) => {
  const colors = [
    {
      id: "beige",
      value: "Beige",
      color: "beige",
      price: "89.99",
    },
    {
      id: "yellow",
      value: "Yellow",
      color: "yellow",
      price: "89.99",
    },
    // Add more colors as needed
  ];

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div
      className="tf-dropdown-sort style-1 full position-relative"
      data-bs-toggle="dropdown"
    >
      <div className="btn-select">
        <span className="text-sort-value select-currentColor">
          {selectedColor}
        </span>
        <span className="icon icon-down" />
      </div>

      <div className="dropdown-menu">
        {colors.map((color) => (
          <div
            key={color.id}
            className={`select-item color-btn ${
              selectedColor === color.value ? "active" : ""
            }`}
            data-color={color.color}
            data-price={color.price}
            onClick={(e) => {
              e.stopPropagation();
              handleColorSelect(color.value);
            }}
          >
            <span className="text-value-item">{color.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDropdown;
