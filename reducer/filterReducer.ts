import { productMain } from "@/data/products";

// You should adjust this based on the actual shape of productMain items
interface Swatch {
  label: string;
  img: string;
  bgClass: string;
}
export interface Product {
  filterBrands: string[];
  filterCategory: string[];
  inStock: boolean;
  filterColor: string[];
  filterSizes: string[];

  id: number;
  imgSrc: string;
  hoverImg: string;
  sale?: string | null;
  delay?: string | null;
  title: string;
  oldPrice?: number | null;
  price: number;
  swatches: Swatch[];
}

export interface FilterState {
  price: [number, number];
  availability: string;
  color: string;
  size: string;
  activeFilterOnSale: boolean;
  brands: string[];
  categories: string[];
  filtered: Product[];
  sortingOption: string;
  sorted: Product[];
  currentPage: number;
  itemPerPage: number;
}

export type FilterAction =
  | { type: "SET_PRICE"; payload: [number, number] }
  | { type: "SET_COLOR"; payload: string }
  | { type: "SET_SIZE"; payload: string }
  | { type: "SET_AVAILABILITY"; payload: string }
  | { type: "SET_BRANDS"; payload: string[] }
  | { type: "SET_CATEGORIES"; payload: string[] }
  | { type: "SET_FILTERED"; payload: Product[] }
  | { type: "SET_SORTING_OPTION"; payload: string }
  | { type: "SET_SORTED"; payload: Product[] }
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "TOGGLE_FILTER_ON_SALE" }
  | { type: "SET_ITEM_PER_PAGE"; payload: number }
  | { type: "CLEAR_FILTER" };

export const initialState: FilterState = {
  price: [20, 300],
  availability: "All",
  color: "All",
  size: "All",
  activeFilterOnSale: false,
  brands: [],
  categories: [],
  filtered: productMain,
  sortingOption: "Sort by (Default)",
  sorted: productMain,
  currentPage: 1,
  itemPerPage: 6,
};

export function reducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_SIZE":
      return { ...state, size: action.payload };
    case "SET_AVAILABILITY":
      return { ...state, availability: action.payload };
    case "SET_BRANDS":
      return { ...state, brands: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_FILTERED":
      return { ...state, filtered: [...action.payload] };
    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload };
    case "SET_SORTED":
      return { ...state, sorted: [...action.payload] };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "TOGGLE_FILTER_ON_SALE":
      return { ...state, activeFilterOnSale: !state.activeFilterOnSale };
    case "SET_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload };
    case "CLEAR_FILTER":
      return {
        ...state,
        price: [20, 300],
        availability: "All",
        color: "All",
        size: "All",
        categories: [],
        brands: [],
        activeFilterOnSale: false,
      };
    default:
      return state;
  }
}
