import { products2, productMain } from "@/data/products";
import ProductsClient from "./ProductsClient";
import {
  applyFilters,
  sortProducts,
  type Filters,
} from "@/utils/products-filter";

// Optional: accept initial filters from route params
export default function Products({
  initialFilters,
  ...rest
}: {
  initialFilters?: Partial<Filters>;
  parentClass?: string;
  defaultActiveLayout?: number;
  isFullLayout?: boolean;
  cardStyle?: number;
}) {
  // Compute SSR defaults (static-friendly)
  const filters: Filters = {
    price: [10, 450],
    availability: "All",
    color: "All",
    size: "All",
    brands: [],
    categories: [],
    onSale: false,
    ...initialFilters,
  };

  const ssrFiltered = applyFilters(productMain, filters);
  const ssrSorted = sortProducts(ssrFiltered, "Price Ascending"); // or your default

  return (
    <ProductsClient
      allProducts={productMain}
      initialSorted={ssrSorted}
      initialStateOverride={{
        price: filters.price,
        availability: filters.availability as any,
        color: filters.color,
        size: filters.size,
        brands: filters.brands || [],
        categories: filters.categories || [],
        activeFilterOnSale: !!filters.onSale,
        // any other initialState keys you want to seed
      }}
      {...rest}
    />
  );
}
