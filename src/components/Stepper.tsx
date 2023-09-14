import classNames from "classnames";

export function Stepper({ step }: { step: string }) {
  return (
    <ol className="flex flex-col w-full space-y-4 md:flex-row md:space-x-8 md:space-y-0">
      <li
        className={classNames(
          "flex items-center font-bold space-x-2.5",
          { "text-blue": step === "home" },
          { "text-dark dark:text-light": step !== "home" }
        )}
      >
        <span className="flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0 ">
          1
        </span>
        <span>
          <h3 className="font-bold leading-tight">Product List</h3>
          <p className="text-sm">Add products to the shopping cart!</p>
        </span>
      </li>
      <li
        className={classNames(
          "flex items-center font-bold space-x-2.5",
          { "text-blue": step === "cart" },
          { "text-dark dark:text-light": step !== "cart" }
        )}
      >
        <span className="flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0">
          2
        </span>
        <span>
          <h3 className="font-bold leading-tight">Cart</h3>
          <p className="text-sm">Verify or remove products from cart!</p>
        </span>
      </li>
      <li
        className={classNames(
          "flex items-center font-bold space-x-2.5",
          { "text-blue": step === "payment" },
          { "text-dark dark:text-light": step !== "payment" }
        )}
      >
        <span className="flex items-center justify-center w-8 h-8 border-2 rounded-full shrink-0">
          3
        </span>
        <span>
          <h3 className="font-bold leading-tight">Payment</h3>
          <p className="text-sm">Add your payment information!</p>
        </span>
      </li>
    </ol>
  );
}
