"use client";

import LayoutHandler from "./LayoutHandler";
import Sorting from "./Sorting";
import GridView from "./GridView";
import { useEffect, useReducer, useState } from "react";

import { initialState, reducer } from "@/reducer/filterReducer";
import FilterMeta from "./FilterMeta";
import FilterModal from "./FilterModal";
import Listview from "./Listview";
import type { Product } from "@/types/product";
import { applyFilters, sortProducts } from "@/utils/products-filter";

interface Products1ClientProps {
  parentClass?: string;
  defaultActiveLayout?: number;
  isFullLayout?: boolean;
  cardStyle?: number;

  /** Server-provided full catalog */
  allProducts: Product[];

  /** Optional server-provided initial filters/sorted list (SSR) */
  initialSorted?: Product[];
  initialStateOverride?: Partial<typeof initialState>;
}

export default function ProductsClient({
  parentClass = "flat-spacing",
  defaultActiveLayout = 4,
  isFullLayout = false,
  cardStyle = 1,
  allProducts,
  initialSorted,
  initialStateOverride,
}: Products1ClientProps) {
  const [activeLayout, setActiveLayout] = useState<number>(defaultActiveLayout);

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...initialStateOverride,
  });

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
      dispatch({
        type: "SET_COLOR",
        payload: value === color ? "All" : value,
      });
    },
    setSize: (value: string) => {
      dispatch({
        type: "SET_SIZE",
        payload: value === size ? "All" : value,
      });
    },
    setAvailability: (value: string) => {
      dispatch({
        type: "SET_AVAILABILITY",
        payload: value === availability ? "All" : value,
      });
    },

    setBrands: (newBrand: string) => {
      const updated = brands.includes(newBrand)
        ? brands.filter((b) => b !== newBrand)
        : [...brands, newBrand];
      dispatch({ type: "SET_BRANDS", payload: updated });
    },
    removeBrand: (newBrand: string) => {
      dispatch({
        type: "SET_BRANDS",
        payload: brands.filter((b) => b !== newBrand),
      });
    },

    setCategories: (newItem: string) => {
      const updated = categories.includes(newItem)
        ? categories.filter((c) => c !== newItem)
        : [...categories, newItem];
      dispatch({ type: "SET_CATEGORIES", payload: updated });
    },
    removeCategories: (newItem: string) => {
      dispatch({
        type: "SET_CATEGORIES",
        payload: categories.filter((c) => c !== newItem),
      });
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
    clearFilter: () => dispatch({ type: "CLEAR_FILTER" }),
  };

  // 1) Filter whenever any filter state changes
  useEffect(() => {
    const filteredNow = applyFilters(allProducts, {
      price,
      availability: availability as any, // ensure matches util type
      color,
      size,
      brands,
      categories,
      onSale: activeFilterOnSale,
    });
    dispatch({ type: "SET_FILTERED", payload: filteredNow });
  }, [
    price,
    availability,
    color,
    size,
    brands,
    categories,
    activeFilterOnSale,
    allProducts,
  ]);

  // 2) Sort when filtered list or sort option changes
  useEffect(() => {
    const sortedNow = sortProducts(filtered, sortingOption);
    dispatch({ type: "SET_SORTED", payload: sortedNow });
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, [filtered, sortingOption]);

  // If server gave you an initial SSR-sorted list, seed it once
  useEffect(() => {
    if (initialSorted && initialSorted.length) {
      dispatch({ type: "SET_FILTERED", payload: initialSorted });
      dispatch({ type: "SET_SORTED", payload: initialSorted });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className={parentClass}>
        <div className={`container${isFullLayout ? "-full" : ""}`}>
          <div className="tf-shop-control">
            <div className="tf-control-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="filterShop"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Filters</span>
              </a>
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
          </div>
          <div className="wrapper-control-shop">
            <FilterMeta productLength={sorted.length} allProps={allProps} />
            {activeLayout === 1 ? (
              <div className="tf-list-layout wrapper-shop" id="listLayout">
                <Listview products={sorted} />
              </div>
            ) : (
              <div
                className={`tf-grid-layout wrapper-shop tf-col-${activeLayout}`}
                id="gridLayout"
              >
                <GridView cardStyle={cardStyle} products={sorted} />
              </div>
            )}
          </div>
        </div>
      </section>
      <FilterModal allProps={allProps} />
    </>
  );
}
