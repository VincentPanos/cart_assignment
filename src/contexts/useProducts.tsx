import * as React from "react";
import { Products, Product } from "../types";
import { useGetData } from "../api";

interface ProductsContext {
  data: Products;
  isLoading: boolean;
  error: string;
}

const ProductsCtx = React.createContext<ProductsContext>({
  data: [],
  isLoading: true,
  error: "",
});

function ProductsList({
  value,
  children,
}: React.PropsWithChildren<{ value: ProductsContext }>) {
  return <ProductsCtx.Provider value={value}>{children}</ProductsCtx.Provider>;
}

export function ProductProvider({ children }: { children?: React.ReactNode }) {
  const { data, isLoading, error } = useGetData<Product>("products");
  return (
    <ProductsList value={{ data, isLoading, error }}>{children}</ProductsList>
  );
}

export function useProducts() {
  return React.useContext(ProductsCtx);
}
