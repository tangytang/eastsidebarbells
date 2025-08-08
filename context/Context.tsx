"use client";

import { allProducts } from "@/data/products";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";

// Product Type Interface
interface Product {
  id: number;
  title: string;
  price: number;

  [key: string]: any;
}
interface ContextType {
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  totalPrice: number;
  addProductToCart: (id: number, qty?: number, isModal?: boolean) => void;
  isAddedToCartProducts: (id: number) => boolean;
  removeFromWishlist: (id: number) => void;
  addToWishlist: (id: number) => void;
  isAddedtoWishlist: (id: number) => boolean;
  quickViewItem: Product;
  setQuickViewItem: React.Dispatch<React.SetStateAction<Product>>;
  quickAddItem: number;
  setQuickAddItem: React.Dispatch<React.SetStateAction<number>>;
  addToCompareItem: (id: number) => void;
  isAddedtoCompareItem: (id: number) => boolean;
  removeFromCompareItem: (id: number) => void;
  compareItem: number[];
  setCompareItem: React.Dispatch<React.SetStateAction<number[]>>;
  updateQuantity: (id: number, qty: number) => void;
  quantityInCart: (id: number) => number;
  wishList: number[];
}

const dataContext = createContext<ContextType | undefined>(undefined);

export const useContextElement = () => {
  const context = useContext(dataContext);
  if (!context) {
    throw new Error("useContextElement must be used within a Context provider");
  }
  return context;
};

export default function Context({ children }: { children: ReactNode }) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [wishList, setWishList] = useState<number[]>([1, 2, 3]);
  const [compareItem, setCompareItem] = useState<number[]>([1, 2, 3, 4]);
  const [quickViewItem, setQuickViewItem] = useState<Product>(allProducts[0]);
  const [quickAddItem, setQuickAddItem] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const subtotal = cartProducts.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );
    setTotalPrice(subtotal);
  }, [cartProducts]);

  const isAddedToCartProducts = (id: number) => {
    return cartProducts.some((product) => product.id === id);
  };

  const addProductToCart = (
    id: number,
    qty: number = 1,
    isModal: boolean = true
  ) => {
    if (!isAddedToCartProducts(id)) {
      const product = allProducts.find((p) => p.id === id);
      if (product) {
        const item: Product = { ...product, quantity: qty };
        setCartProducts((prev) => [...prev, item]);
        // if (isModal) openCartModal();
      }
    }
  };

  const updateQuantity = (id: number, qty: number) => {
    if (isAddedToCartProducts(id) && qty >= 1) {
      setCartProducts((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
      );
    }
  };

  const quantityInCart = (id: number) => {
    const item = cartProducts.find((p) => p.id === id);
    return item ? item.quantity : 0;
  };

  const addToWishlist = (id: number) => {
    setWishList((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    // openWistlistModal();
  };

  const removeFromWishlist = (id: number) => {
    setWishList((prev) => prev.filter((i) => i !== id));
  };

  const addToCompareItem = (id: number) => {
    if (!compareItem.includes(id)) {
      setCompareItem((prev) => [...prev, id]);
    }
  };

  const removeFromCompareItem = (id: number) => {
    setCompareItem((prev) => prev.filter((i) => i !== id));
  };

  const isAddedtoWishlist = (id: number) => {
    return wishList.includes(id);
  };

  const isAddedtoCompareItem = (id: number) => {
    return compareItem.includes(id);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartList") || "[]");
    if (Array.isArray(items)) {
      setCartProducts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist") || "[]");
    if (Array.isArray(items)) {
      setWishList(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const contextElement: ContextType = {
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    removeFromWishlist,
    addToWishlist,
    isAddedtoWishlist,
    quickViewItem,
    setQuickViewItem,
    quickAddItem,
    setQuickAddItem,
    addToCompareItem,
    isAddedtoCompareItem,
    removeFromCompareItem,
    compareItem,
    setCompareItem,
    updateQuantity,
    quantityInCart,
    wishList,
  };

  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
