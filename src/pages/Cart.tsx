import { Pagination } from "../components/Pagination";
import { Stepper } from "../components/Stepper";
import { Loading } from "../components/Loading";
import { Step } from "../types";
import { useProducts } from "../contexts/useProducts";
//import { useCart } from "../contexts/useCart";

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

export function CartPage() {
  //const { cart, setCart } = useCart();
  const { data, isLoading, error } = useProducts();

  if (error) return <div>{error}</div>;
  if (isLoading && data.length === 0) return <Loading />;

  return (
    <div className="flex flex-col space-y-8 ">
      <Stepper step={"cart"} />
      <Pagination next={nextButton} back={backButton} />
    </div>
  );
}
