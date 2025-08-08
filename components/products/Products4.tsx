"use client";
import LayoutHandler from "./LayoutHandler";
import Sorting from "./Sorting";
// import Listview from "./Listview";
import GridView from "./GridView";
import { useEffect, useReducer, useState } from "react";

import { initialState, reducer } from "@/reducer/filterReducer";
import { productMain } from "@/data/products";
import FilterMeta from "./FilterMeta";
import FilterModal from "./FilterModal";
import Listview from "./Listview";
import FilterSidebar from "./FilterSidebar";
import FilterDropdownToggler from "./FilterDropdownToggler";
import type { Product } from "@/types/product";

export default function Products4({
  parentClass = "flat-spacing",
  defaultActiveLayout = 4,
  isFullLayout = false,
}) {
  const [activeLayout, setActiveLayout] = useState<number>(defaultActiveLayout);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    price,
    availability,
    color,
    size,
    brands,
    categories,
    filtered,
    sortingOption,
    sorted,
    activeFilterOnSale,
  } = state;

  const allProps = {
    ...state,
    setPrice: (value: [number, number]) =>
      dispatch({ type: "SET_PRICE", payload: value }),

    setColor: (value: string) => {
      value === color
        ? dispatch({ type: "SET_COLOR", payload: "All" })
        : dispatch({ type: "SET_COLOR", payload: value });
    },
    setSize: (value: string) => {
      value === size
        ? dispatch({ type: "SET_SIZE", payload: "All" })
        : dispatch({ type: "SET_SIZE", payload: value });
    },
    setAvailability: (value: string) => {
      value === availability
        ? dispatch({ type: "SET_AVAILABILITY", payload: "All" })
        : dispatch({ type: "SET_AVAILABILITY", payload: value });
    },

    setBrands: (newBrand: string) => {
      const updated = [...brands].includes(newBrand)
        ? [...brands].filter((elm) => elm !== newBrand)
        : [...brands, newBrand];
      dispatch({ type: "SET_BRANDS", payload: updated });
    },
    removeBrand: (newBrand: string) => {
      const updated = brands.filter((brand) => brand !== newBrand);
      dispatch({ type: "SET_BRANDS", payload: updated });
    },
    setCategories: (newItem: string) => {
      const updated = categories.includes(newItem)
        ? categories.filter((elm) => elm !== newItem)
        : [...categories, newItem];
      dispatch({ type: "SET_CATEGORIES", payload: updated });
    },
    removeCategories: (newItem: string) => {
      const updated = categories.filter((category) => category !== newItem);
      dispatch({ type: "SET_CATEGORIES", payload: updated });
    },
    setSortingOption: (value: string) =>
      dispatch({ type: "SET_SORTING_OPTION", payload: value }),
    toggleFilterWithOnSale: () => dispatch({ type: "TOGGLE_FILTER_ON_SALE" }),
    setCurrentPage: (value: number) =>
      dispatch({ type: "SET_CURRENT_PAGE", payload: value }),
    setItemPerPage: (value: number) => {
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
      dispatch({ type: "SET_ITEM_PER_PAGE", payload: value });
    },
    clearFilter: () => {
      dispatch({ type: "CLEAR_FILTER" });
    },
  };

  useEffect(() => {
    let filteredArrays: Product[][] = [];

    if (brands.length) {
      const filteredByBrands = productMain.filter((elm) =>
        brands.every((el) => elm.filterBrands.includes(el))
      );
      filteredArrays.push(filteredByBrands);
    }
    if (categories.length) {
      const filteredByCategories = productMain.filter((elm) =>
        categories.every((el) => elm.filterCategory.includes(el))
      );
      filteredArrays.push(filteredByCategories);
    }
    if (availability !== "All") {
      const filteredByAvailability = productMain.filter((elm) =>
        availability === "InStock" ? elm.inStock : !elm.inStock
      );
      filteredArrays.push(filteredByAvailability);
    }
    if (color !== "All") {
      const filteredByColor = productMain.filter((elm) =>
        elm.filterColor.includes(color)
      );
      filteredArrays.push(filteredByColor);
    }
    if (size !== "All" && size !== "Free Size") {
      const filteredBySize = productMain.filter((elm) =>
        elm.filterSizes.includes(size)
      );
      filteredArrays.push(filteredBySize);
    }
    if (activeFilterOnSale) {
      const filteredBySale = productMain.filter((elm) => elm.oldPrice);
      filteredArrays.push(filteredBySale);
    }

    const filteredByPrice = productMain.filter(
      (elm) => elm.price >= price[0] && elm.price <= price[1]
    );
    filteredArrays.push(filteredByPrice);

    const commonItems = productMain.filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    dispatch({ type: "SET_FILTERED", payload: commonItems });
  }, [
    price,
    availability,
    color,
    size,
    brands,
    activeFilterOnSale,
    categories,
  ]);

  useEffect(() => {
    let sortedProducts = [...filtered];
    switch (sortingOption) {
      case "Price Ascending":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price Descending":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "Title Ascending":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Title Descending":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    dispatch({ type: "SET_SORTED", payload: sortedProducts });
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, [filtered, sortingOption]);

  return (
    <>
      <section className={parentClass}>
        <div className={`container${isFullLayout ? "-full" : ""}`}>
          <div className="tf-shop-control wrapper-filter-dropdown">
            <div className="tf-control-filter">
              <FilterDropdownToggler />
              <div
                onClick={allProps.toggleFilterWithOnSale}
                className={`d-none d-lg-flex shop-sale-text ${
                  activeFilterOnSale ? "active" : ""
                }`}
              >
                <i className="icon icon-checkcircle" />

                <p className="text-caption-1">Shop sale items only</p>
              </div>
            </div>
            <ul className="tf-control-layout">
              <LayoutHandler
                setActiveLayout={setActiveLayout}
                activeLayout={activeLayout}
              />
            </ul>
            <div className="tf-control-sorting">
              <p className="d-none d-lg-block text-caption-1">Sort by:</p>
              <Sorting allProps={allProps} />
            </div>
            <div className="dropdown-filter sidebar-filter left canvas-filter">
              <FilterSidebar allProps={allProps} />
            </div>
          </div>
          <div className="wrapper-control-shop">
            <FilterMeta productLength={sorted.length} allProps={allProps} />

            {activeLayout == 1 ? (
              <div className="tf-list-layout wrapper-shop" id="listLayout">
                <Listview products={sorted} />
              </div>
            ) : (
              <div
                className={`tf-grid-layout wrapper-shop tf-col-${activeLayout}`}
                id="gridLayout"
              >
                <GridView products={sorted} />
              </div>
            )}
          </div>
        </div>
      </section>
      <FilterModal allProps={allProps} />
    </>
  );
}
