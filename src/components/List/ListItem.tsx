import { CartItem } from "../../types";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button";
import { useCart } from "../../contexts/useCart";

export function ListItem({ product }: { product: CartItem }) {
  const { cart, setCart } = useCart();
  const handleRemove = () => {
    if (cart) {
      const index = cart.findIndex(
        (prod) => prod.id === product.id && product.amount === prod.amount
      );
      console.log(index);
      if (index >= 0) {
        const newCart =
          index === 0
            ? cart.slice(1)
            : cart.slice(0, index).concat(cart.slice(index + 1));
        setCart(newCart);
      }
    }
    return;
  };
  return (
    <div className="flex flex-row space-x-6 border-b-2 py-2 text-dark dark:text-light dark:hover:bg-light dark:hover:bg-opacity-20 hover:bg-dark hover:bg-opacity-5 items-center">
      <div className="w-2/5">{product.name}</div>
      <div className="w-1/5 flex justify-center">{product.amount}</div>
      <div className="w-1/5 flex justify-center">
        {(product.amount * product.price) / 100}
      </div>
      <div className="w-1/5 flex justify-end">
        <Button variant="icon" onClick={handleRemove}>
          <TrashIcon className="w-6 h-6 text-red hover:opacity-80" />
        </Button>
      </div>
    </div>
  );
}
