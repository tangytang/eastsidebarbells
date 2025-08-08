"use client";
import {
  availabilityOptions,
  categories,
  colors,
  sizes,
} from "@/data/productFilterOptions";
import { productMain } from "@/data/products";
import type { FilterProps } from "@/types/product";

import Slider from "rc-slider";

interface FilterSidebarProps {
  allProps: FilterProps;
}

export default function FilterSidebar({ allProps }: FilterSidebarProps) {
  return (
    <div className="canvas-wrapper">
      <div className="canvas-header d-flex d-xl-none">
        <h5>Filters</h5>
        <span className="icon-close close-filter" />
      </div>
      <div className="canvas-body">
        <div className="widget-facet facet-categories">
          <h6 className="facet-title">Product Categories</h6>
          <ul className="facet-content">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`${
                  allProps.categories.includes(category.name)
                    ? "category-active"
                    : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => allProps.setCategories(category.name)}
                >
                  {category.name}{" "}
                  <span className="count-cate">
                    (
                    {
                      productMain.filter((elm) =>
                        elm.filterCategory.includes(category.name)
                      ).length
                    }
                    )
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="widget-facet facet-price">
          <h6 className="facet-title">Price</h6>

          <Slider
            min={10}
            max={450}
            range
            value={allProps.price}
            onChange={(value: number | number[]) => {
              if (Array.isArray(value) && value.length === 2) {
                allProps.setPrice([value[0], value[1]]);
              }
            }}
          />
          <div className="box-price-product mt-3">
            <div className="box-price-item">
              <span className="title-price">Min price</span>
              <div className="price-val" id="price-min-value" data-currency="$">
                {allProps.price[0]}
              </div>
            </div>
            <div className="box-price-item">
              <span className="title-price">Max price</span>
              <div className="price-val" id="price-max-value" data-currency="$">
                {allProps.price[1]}
              </div>
            </div>
          </div>
        </div>
        <div className="widget-facet facet-size">
          <h6 className="facet-title">Size</h6>
          <div className="facet-size-box size-box">
            {sizes.map((size, index) => (
              <span
                key={index}
                onClick={() => allProps.setSize(size)}
                className={`size-item size-check ${
                  allProps.size === size ? "active" : ""
                }`}
              >
                {size}
              </span>
            ))}
            <span
              className={`size-item size-check free-size ${
                allProps.size == "Free Size" ? "active" : ""
              } `}
              onClick={() => allProps.setSize("Free Size")}
            >
              Free Size
            </span>
          </div>
        </div>
        <div className="widget-facet facet-color">
          <h6 className="facet-title">Colors</h6>
          <div className="facet-color-box">
            {colors.map((color, index) => (
              <div
                onClick={() => allProps.setColor(color.name)}
                key={index}
                className={`color-item color-check ${
                  color.name == allProps.color ? "active" : ""
                }`}
              >
                <span className={`color ${color.className}`} />
                {color.name}
              </div>
            ))}
          </div>
        </div>
        <div className="widget-facet facet-fieldset">
          <h6 className="facet-title">Availability</h6>
          <div className="box-fieldset-item">
            {availabilityOptions.map((option, index) => (
              <fieldset
                key={index}
                className="fieldset-item"
                onClick={() => allProps.setAvailability(option.id)}
              >
                <input
                  type="radio"
                  name="availability"
                  className="tf-check"
                  readOnly
                  checked={allProps.availability === option.id}
                />
                <label>
                  {option.label}{" "}
                  <span className="count-stock">
                    (
                    {
                      productMain.filter((el) => el.inStock == option.value)
                        .length
                    }
                    )
                  </span>
                </label>
              </fieldset>
            ))}
          </div>
        </div>
      </div>
      <div className="canvas-bottom d-block d-xl-none">
        <button
          id="reset-filter"
          onClick={allProps.clearFilter}
          className="tf-btn btn-reset"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
