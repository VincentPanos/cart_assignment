import { Pagination } from "../components/Pagination";
import { Stepper } from "../components/Stepper";
import { Step } from "../types";

const backButton: Step = {
  label: "BACK",
  to: "/cart",
  disabled: false,
};

export function Payment() {
  return (
    <div className="flex flex-col space-y-32 ">
      <Stepper step={"payment"} />
      <div className="flex flex-col justify-center items-center">
        <span className="text-dark dark:text-light font-bold text-lg">
          This page is still under construction!
        </span>
      </div>
      <Pagination back={backButton} />
    </div>
  );
}
