interface Swatch {
  label: string;
  img: string;
  bgClass: string;
}

export type Availability = "All" | "inStock" | "outOfStock";
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
export interface FilterProps {
  price: [number, number];
  availability: string;
  color: string;
  size: string;
  activeFilterOnSale: boolean;
  brands: string[];
  categories: string[];

  sortingOption: string;

  currentPage: number;
  itemPerPage: number;

  // Handler functions
  setPrice: (value: [number, number]) => void;
  setColor: (value: string) => void;
  setSize: (value: string) => void;
  setAvailability: (value: string) => void;
  setBrands: (brand: string) => void;
  removeBrand: (brand: string) => void;
  setCategories: (category: string) => void;
  removeCategories: (category: string) => void;
  setSortingOption: (value: string) => void;
  toggleFilterWithOnSale: () => void;
  setCurrentPage: (value: number) => void;
  setItemPerPage: (value: number) => void;
  clearFilter: () => void;
}
