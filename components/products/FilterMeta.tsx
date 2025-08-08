"use client";
import { colors } from "@/data/productFilterOptions";
import type { FilterProps } from "@/types/product";
import React from "react";

interface FilterMetaProps {
  allProps: FilterProps;

  productLength: number;
}

export default function FilterMeta({
  allProps,
  productLength,
}: FilterMetaProps) {
  const hasFiltered =
    allProps.availability !== "All" ||
    allProps.size !== "All" ||
    allProps.color !== "All" ||
    allProps.activeFilterOnSale ||
    allProps.brands.length > 0 ||
    allProps.categories.length > 0;
  return (
    <>
      <div
        className="meta-filter-shop"
        style={hasFiltered ? { display: "flex" } : { display: "none" }}
      >
        <div id="product-count-grid" className="count-text">
          <span className="count">{productLength}</span> Products Found
        </div>

        <div id="applied-filters">
          {allProps.availability !== "All" ? (
            <span
              className="filter-tag"
              onClick={() => allProps.setAvailability("All")}
            >
              {typeof allProps.availability === "object"
                ? allProps.availability
                : allProps.availability}
              <span className="remove-tag icon-close" />
            </span>
          ) : null}
          {allProps.activeFilterOnSale ? (
            <span
              className="filter-tag"
              onClick={() => allProps.toggleFilterWithOnSale()}
            >
              On Sale
              <span className="remove-tag icon-close" />
            </span>
          ) : null}

          {allProps.size !== "All" ? (
            <span
              className="filter-tag"
              onClick={() => allProps.setSize("All")}
            >
              {allProps.size}
              <span className="remove-tag icon-close" />
            </span>
          ) : null}

          {allProps.color !== "All" ? (
            <span
              className="filter-tag color-tag"
              onClick={() => allProps.setColor("All")}
            >
              <span
                className={`color ${
                  colors.filter((el) => el.name == allProps.color)[0].className
                }`}
              />

              {typeof allProps.color === "object"
                ? allProps.color
                : allProps.color}
              <span className="remove-tag icon-close" />
            </span>
          ) : null}

          {allProps.brands.length > 0 ? (
            <React.Fragment>
              {allProps.brands.map((brand, i) => (
                <span
                  key={i}
                  className="filter-tag"
                  onClick={() => allProps.removeBrand(brand)}
                >
                  {brand}
                  <span className="remove-tag icon-close" />
                </span>
              ))}
            </React.Fragment>
          ) : null}
          {allProps.categories.length > 0 ? (
            <React.Fragment>
              {allProps.categories.map((category, i) => (
                <span
                  key={i}
                  className="filter-tag"
                  onClick={() => allProps.removeCategories(category)}
                >
                  {category}
                  <span className="remove-tag icon-close" />
                </span>
              ))}
            </React.Fragment>
          ) : null}
        </div>

        {hasFiltered ? (
          <button
            id="remove-all"
            className="remove-all-filters text-btn-uppercase"
            onClick={allProps.clearFilter}
          >
            REMOVE ALL <i className="icon icon-close" />
          </button>
        ) : null}
      </div>
    </>
  );
}
