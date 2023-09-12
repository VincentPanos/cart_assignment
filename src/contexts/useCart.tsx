import * as React from "react";
import { Cart } from "../types";
import { useLocalStorage } from "usehooks-ts";

interface CartContext {
  cart: Cart | null;
  setCart: (cart: Cart | null) => void;
}

const CartCtx = React.createContext<CartContext>({
  cart: null,
  setCart: () => {},
});

function ShopCart({
  value,
  children,
}: React.PropsWithChildren<{ value: CartContext }>) {
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function CartProvider({ children }: { children?: React.ReactNode }) {
  const [cart, setCart] = useLocalStorage<Cart | null>("cart", null);
  return <ShopCart value={{ cart, setCart }}>{children}</ShopCart>;
}

export function useCart() {
  return React.useContext(CartCtx);
}
