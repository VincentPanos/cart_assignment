import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../contexts/useCart";
import { useProducts } from "../contexts/useProducts";
import { useMemo } from "react";

export function Total({ small }: { small?: boolean }) {
  const { cart } = useCart();
  const { data } = useProducts();

  const calculateTotal = useMemo(() => {
    if (cart) {
      const total = cart.reduce((acc, item) => {
        const priceItem = data.find((price) => price.id === item.id);
        if (priceItem) {
          return acc + item.amount * priceItem.price;
        }
        return acc;
      }, 0);

      return total / 100;
    }
    return 0;
  }, [data, cart]);

  return (
    small && (
      <div className="flex space-x-4 text-dark dark:text-light">
        <div className="flex text-lg font-bold space-x-1 items-center">
          <h3>Total:</h3>
          <span>{"€" + calculateTotal}</span>
        </div>
        {cart && (
          <div className="flex space-x-1 rounded-full bg-dark dark:bg-light items-center px-4 font-bold">
            <ShoppingCartIcon className="h-4 w-4 text-light dark:text-dark" />
            <span className="text-light dark:text-dark">{cart.length}</span>
          </div>
        )}
      </div>
    )
  );
}
