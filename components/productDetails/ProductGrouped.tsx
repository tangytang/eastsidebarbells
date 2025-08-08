import React, { useState } from "react";

interface ProductItem {
  id: number;
  title: string;
  imgSrc: string;
  variants: string[];
  selectedVariant: string;
  price: number;
  comparePrice?: number;
  discount?: number;
  checked: boolean;
  quantity: number;
}

export default function ProductGrouped() {
  const [products, setProducts] = useState<ProductItem[]>([
    {
      id: 1,
      title: "Double Standing Desk",
      imgSrc: "/images/shop/product-10.jpg",
      variants: ["Green, B", "Green, L"],
      selectedVariant: "Green, B",
      price: 59.99,
      comparePrice: 79.99,
      discount: 25,
      checked: true,
      quantity: 1,
    },
    {
      id: 2,
      title: "Office Desk",
      imgSrc: "/images/shop/product-4.jpg",
      variants: ["Green, B", "Green, L"],
      selectedVariant: "Green, B",
      price: 59.99,
      comparePrice: 79.99,
      discount: 25,
      checked: true,
      quantity: 1,
    },
    {
      id: 3,
      title: "Duo Standing Desk",
      imgSrc: "/images/shop/product-11.jpg",
      variants: ["Green, B", "Green, L"],
      selectedVariant: "Green, B",
      price: 59.99,
      checked: false,
      quantity: 1,
    },
  ]);

  const handleCheckboxChange = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product
      )
    );
  };

  const handleVariantChange = (id: number, variant: string) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, selectedVariant: variant } : product
      )
    );
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  // Calculate total price
  const totalPrice = products
    .filter((product) => product.checked)
    .reduce((sum, product) => sum + product.price * product.quantity, 0);

  const totalComparePrice = products
    .filter((product) => product.checked && product.comparePrice)
    .reduce(
      (sum, product) => sum + (product.comparePrice || 0) * product.quantity,
      0
    );

  const totalDiscount =
    totalComparePrice > 0
      ? Math.round(((totalComparePrice - totalPrice) / totalComparePrice) * 100)
      : 0;

  return (
    <>
      <div className="tf-bundle-products-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="tf-bundle-product-item align-items-center mb_20"
          >
            <input
              className="tf-check m-0"
              type="checkbox"
              checked={product.checked}
              onChange={() => handleCheckboxChange(product.id)}
            />
            <div className="tf-product-bundle-image">
              <a href="#">
                <img
                  alt={product.title}
                  src={product.imgSrc}
                  width={600}
                  height={600}
                />
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-center flex-grow-1 gap-12 flex-wrap">
              <div className="tf-product-bundle-infos">
                <div className="text-title">{product.title}</div>
                <div className="tf-product-bundle-variant tf-select">
                  <select
                    value={product.selectedVariant}
                    onChange={(e) =>
                      handleVariantChange(product.id, e.target.value)
                    }
                  >
                    {product.variants.map((variant) => (
                      <option key={variant} value={variant}>
                        {variant}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="tf-product-info-price type-small">
                  <h5 className="price-on-sale">${product.price.toFixed(2)}</h5>
                  {product.comparePrice && (
                    <div className="compare-at-price">
                      ${product.comparePrice.toFixed(2)}
                    </div>
                  )}
                  {product.discount && (
                    <div className="badges-on-sale">-{product.discount}%</div>
                  )}
                </div>
              </div>
              <div className="wg-quantity style-1">
                <span
                  className="btn-quantity minus-btn"
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity - 1)
                  }
                >
                  -
                </span>
                <input
                  type="text"
                  name="number"
                  value={product.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      product.id,
                      parseInt(e.target.value) || 1
                    )
                  }
                />
                <span
                  className="btn-quantity plus-btn"
                  onClick={() =>
                    handleQuantityChange(product.id, product.quantity + 1)
                  }
                >
                  +
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tf-bundle-product-total-submit d-flex gap-6 align-items-center">
        <h5>Total Price:</h5>
        <div className="tf-product-info-price type-1">
          <h4 className="price-on-sale">${totalPrice.toFixed(2)}</h4>
          {totalComparePrice > 0 && (
            <>
              <div className="compare-at-price">
                ${totalComparePrice.toFixed(2)}
              </div>
              {totalDiscount > 0 && (
                <div className="badges-on-sale">-{totalDiscount}%</div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
