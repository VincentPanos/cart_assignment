import { Product } from "../types";
import { Button } from "./Button";
import { Counter } from "./Counter";
import { useState } from "react";
import { useCart } from "../contexts/useCart";
import { Cart } from "../types";

function initAmount(cart: Cart | null, id: string): number {
  if (cart) {
    const product = cart.filter((a) => a.id === id);
    if (product.length > 0) return product[0].amount;
  }
  return 0;
}

export function Card({ product }: { product: Product }) {
  const { cart, setCart } = useCart();
  const [amount, setAmount] = useState<number>(initAmount(cart, product.id));
  return (
    <div className="w-full max-w-sm bg-light dark:bg-dark rounded-lg shadow-md shadow-dark dark:shadow-light text-dark dark:text-light ">
      <div className="flex justify-center">
        <img
          className="object-cover h-48 w-48 p-2 rounded-full"
          src={product.name.split(" ")[1].toLowerCase() + ".jpg"}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <div className="flex flex-col space-y-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {"€" + product.price / 100 + " /kg"}
          </span>
          <Counter total={amount} onChange={setAmount} />
          <Button variant="success">Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
