import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../contexts/useCart";
import { useTotal } from "../hooks/useTotal";
import classNames from "classnames";

export function Total({ small }: { small?: boolean }) {
  const { cart } = useCart();
  const { total, discTotal } = useTotal(cart);

  return (
    <div className="flex items-start space-x-4 text-dark dark:text-light">
      <div className="flex flex-col space-y-1">
        <div className="flex text-lg font-bold space-x-1 items-center">
          <h3>Total:</h3>
          <span>{"€" + total}</span>
        </div>
        <div className={classNames({ "opacity-0": discTotal === 0 })}>
          <div className="flex text-lg font-bold space-x-1 items-center pb-4 border-b-2">
            <h3>Discount:</h3>
            <span>{"€" + discTotal}</span>
          </div>
          <div className="flex text-lg font-bold space-x-1 items-center">
            <h3>New Total:</h3>
            <span>{"€" + (total - discTotal).toFixed(2)}</span>
          </div>
        </div>
      </div>
      {!small && cart && (
        <div className="flex space-x-1 rounded-full bg-dark dark:bg-light items-center px-4 font-bold">
          <ShoppingCartIcon className="h-4 w-4 text-light dark:text-dark" />
          <span className="text-light dark:text-dark">{cart.length}</span>
        </div>
      )}
    </div>
  );
}
