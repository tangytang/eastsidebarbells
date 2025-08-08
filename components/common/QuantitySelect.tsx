"use client";
import React from "react";

interface QuantitySelectProps {
  quantity?: number;
  setQuantity?: (qty: number) => void;
  styleClass?: string;
}

const QuantitySelect: React.FC<QuantitySelectProps> = ({
  quantity = 1,
  setQuantity = () => {},
  styleClass = "",
}) => {
  const handleDecrease = () => {
    if (setQuantity) {
      setQuantity(quantity > 1 ? quantity - 1 : quantity);
    }
  };

  const handleIncrease = () => {
    if (setQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0 && setQuantity) {
      setQuantity(value);
    }
  };

  return (
    <div className={`wg-quantity ${styleClass}`}>
      <span className="btn-quantity btn-decrease" onClick={handleDecrease}>
        -
      </span>
      <input
        className="quantity-product"
        type="number"
        name="number"
        value={quantity}
        onChange={handleChange}
      />
      <span
        className="btn-quantity btn-increase"
        onClick={handleIncrease}
        role="button"
        tabIndex={0}
      >
        +
      </span>
    </div>
  );
};

export default QuantitySelect;
