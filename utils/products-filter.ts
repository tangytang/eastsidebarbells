// lib/products-filter.ts
import type { Product } from "@/types/product";

export type Filters = {
  price: [number, number];
  availability: "All" | "inStock" | "outOfStock";
  color: "All" | string;
  size: "All" | "Free Size" | string;
  brands: string[];
  categories: string[];
  onSale: boolean;
};

export function applyFilters(all: Product[], f: Filters): Product[] {
  let res = all;

  if (f.brands.length) {
    res = res.filter((p) => f.brands.every((b) => p.filterBrands.includes(b)));
  }
  if (f.categories.length) {
    res = res.filter((p) =>
      f.categories.every((c) => p.filterCategory.includes(c))
    );
  }
  if (f.availability !== "All") {
    const wantInStock = f.availability === "inStock";
    res = res.filter((p) => p.inStock === wantInStock);
  }
  if (f.color !== "All") {
    res = res.filter((p) => p.filterColor.includes(f.color));
  }
  if (f.size !== "All" && f.size !== "Free Size") {
    res = res.filter((p) => p.filterSizes.includes(f.size));
  }
  if (f.onSale) {
    res = res.filter((p) => !!p.oldPrice);
  }
  res = res.filter((p) => p.price >= f.price[0] && p.price <= f.price[1]);
  return res;
}

export function sortProducts(list: Product[], option: string): Product[] {
  const res = [...list];
  switch (option) {
    case "Price Ascending":
      res.sort((a, b) => a.price - b.price);
      break;
    case "Price Descending":
      res.sort((a, b) => b.price - a.price);
      break;
    case "Title Ascending":
      res.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "Title Descending":
      res.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }
  return res;
}
