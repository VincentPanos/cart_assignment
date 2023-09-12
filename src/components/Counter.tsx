import { Button } from "./Button";
import { Input } from "./Input";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export function Counter({
  total,
  onChange,
}: {
  total: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex text-dark items-center justify-center">
      <Button
        variant="icon"
        onClick={() => onChange((prev) => prev - 1)}
        disabled={total === 0}
      >
        {
          <ChevronLeftIcon className="h-6 w-6 text-dark dark:text-light hover:opacity-70" />
        }
      </Button>
      <Input
        value={total}
        type="number"
        className="w-full text-center"
        disabled
      />
      <Button
        variant="icon"
        onClick={() => onChange((prev) => prev + 1)}
        disabled={total === 99}
      >
        {
          <ChevronRightIcon className="h-6 w-6 text-dark dark:text-light hover:opacity-70" />
        }
      </Button>
    </div>
  );
}
