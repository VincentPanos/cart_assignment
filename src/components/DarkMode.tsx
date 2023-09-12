import { useDarkMode } from "../hooks/useDarkMode";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { Button } from "./Button";

export function DarkMode(): React.ReactNode {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <Button variant="icon" onClick={toggle}>
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-light hover:opacity-70" />
      ) : (
        <MoonIcon className="h-6 w-6 text-dark hover:opacity-70" />
      )}
    </Button>
  );
}
