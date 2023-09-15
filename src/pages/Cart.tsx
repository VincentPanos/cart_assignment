import { Pagination } from "../components/Pagination";
import { Stepper } from "../components/Stepper";
import { ListHeader, ListItem } from "../components/List";
import { Total } from "../components/Total";
import { Voucher } from "../components/Voucher";
import { Step, Header } from "../types";
import { useCart } from "../contexts/useCart";

const nextButton: Step = {
  label: "NEXT",
  to: "/payment",
  disabled: false,
};

const backButton: Step = {
  label: "BACK",
  to: "/",
  disabled: false,
};

const headers: Header[] = [
  { label: "Product", style: "w-2/5" },
  { label: "QTY", style: "w-1/5 flex justify-center" },
  { label: "Cost", style: "w-1/5 flex justify-center" },
  { label: "Remove", style: "w-1/5 flex justify-end" },
];

export function CartPage() {
  const { cart } = useCart();
  if (cart.length === 0)
    return (
      <div className="flex flex-col space-y-32 ">
        <Stepper step={"cart"} />
        <div className="flex flex-col justify-center items-center">
          <span className="text-dark dark:text-light font-bold text-lg">
            Your cart is empty! Go back to the product list and add some
            products!
          </span>
        </div>
        <Pagination back={backButton} />
      </div>
    );

  return (
    <div className="flex flex-col space-y-8 ">
      <Stepper step={"cart"} />
      <div className="flex flex-col">
        <ListHeader headers={headers} />
        {cart.map((product, index) => (
          <ListItem key={product.id + index} product={product} />
        ))}
      </div>
      <div className="flex justify-between items-start">
        <Voucher />
        <Total small />
      </div>
      <Pagination next={nextButton} back={backButton} />
    </div>
  );
}
