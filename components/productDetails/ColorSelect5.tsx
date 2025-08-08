"use client";
import React, { useState } from "react";

const ColorDropdown2 = ({
  selectedColor = "Beige",
  setSelectedColor = (color: string) => {},
}) => {
  const colors = [
    {
      id: "beige",
      value: "Beige",
      color: "beige",
      price: "89.99",
      bg: "rgb(223, 198, 184)",
    },
    {
      id: "yellow",
      value: "Yellow",
      color: "yellow",
      price: "89.99",
      bg: "rgb(240, 167, 80)",
    },
    // Add more colors as needed
  ];

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div
      className="tf-dropdown-sort full style-1 has-color"
      data-bs-toggle="dropdown"
    >
      <div className="btn-select">
        <span
          className="current-color box-color d-inline-block rounded-full bg-color-yellow"
          style={{
            background:
              selectedColor == "Beige"
                ? "rgb(240, 167, 80)"
                : "rgb(240, 167, 80)",
          }}
        />

        <span className="text-sort-value flex-grow-1 select-currentColor">
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
            <span
              className={`box-color d-inline-block rounded-full bg-color-${color.color}`}
            />

            <span className="text-value-item">{color.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDropdown2;
