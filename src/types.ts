export type Products = Product[];

export type ApiResponse = Product;

export interface Product {
  id: string;
  name: string;
  price: number;
}

export type Cart = CartItem[];

export interface CartItem extends Product {
  id: string;
  amount: number;
}

export interface Step {
  label: string;
  to: string;
  disabled?: boolean;
}

export type Header = {
  label: string;
  style: string;
};

export type Voucher = {
  code: string;
  discount: number;
  productIds: string[];
};
