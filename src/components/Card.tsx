import { Product } from "../types";
import { Button } from "./Button";
import { Counter } from "./Counter";
import { useState } from "react";
import { useCart } from "../contexts/useCart";

export function Card({ product }: { product: Product }) {
  const { cart, setCart } = useCart();
  const [amount, setAmount] = useState<number>(0);

  const handleCart = (id: string, amount: number) => {
    if (cart) {
      const newCart = cart;
      newCart.push({ id, amount });
      setCart(newCart);
    } else {
      setCart([{ id, amount }]);
    }
    setAmount(0);
  };

  const disabled = amount === 0;

  return (
    <div className="w-full bg-light dark:bg-dark rounded-lg shadow-md shadow-dark dark:shadow-light text-dark dark:text-light ">
      <div className="flex justify-center">
        <img
          className="object-cover h-48 w-48 p-2 rounded-full"
          src={product.name.split(" ")[1].toLowerCase() + ".jpg"}
          alt="product image"
        />
      </div>
      <div className="flex flex-col space-y-2 items-center px-4 py-5 w-full ">
        <h5 className="text-2xl font-semibold tracking-tight">
          {product.name}
        </h5>
        <span className="text-xl font-bold ">
          {"€" + product.price / 100 + " /kg"}
        </span>
        <Counter total={amount} onChange={setAmount} />
        <Button
          variant="success"
          onClick={() => handleCart(product.id, amount)}
          disabled={disabled}
          className="w-full"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
