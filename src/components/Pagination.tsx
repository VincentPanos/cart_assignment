import { Button } from "../components/Button";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Step } from "../types";
import { useNavigate } from "react-router-dom";

export function Pagination({ next, back }: { next?: Step; back?: Step }) {
  const navigate = useNavigate();

  const handleClick = (to: string) => {
    navigate(to);
  };

  const StepButton = ({
    step,
    back = false,
  }: {
    step: Step;
    back?: boolean;
  }) => (
    <Button
      variant="success"
      className="flex text-lg w-48 justify-between items-center"
      disabled={step.disabled}
      onClick={() => handleClick(step.to)}
    >
      {!back ? (
        <>
          <span>{step.label}</span>
          <ChevronRightIcon className="h-6 w-6 text-light" />
        </>
      ) : (
        <>
          <ChevronLeftIcon className="h-6 w-6 text-light" />
          <span>{step.label}</span>
        </>
      )}
    </Button>
  );

  if (next && back)
    return (
      <div className="flex justify-between">
        <StepButton step={back} back />
        <StepButton step={next} />
      </div>
    );
  if (back) return <div></div>;
  if (next)
    return (
      <div className="flex justify-end">
        <StepButton step={next} />
      </div>
    );

  return <></>;
}
