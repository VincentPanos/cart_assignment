export type Products = Product[];

export type ApiResponse = Product;

export interface Product {
  id: string;
  name: string;
  price: number;
}

export type Cart = CartItem[];

export interface CartItem {
  id: string;
  amount: number;
}

export interface Step {
  label: string;
  to: string;
  disabled?: boolean;
}
