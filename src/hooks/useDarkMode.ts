import { useLocalStorage } from "usehooks-ts";

export function useDarkMode(): { isDarkMode: boolean; toggle: () => void } {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>("darkMode", false);

  return {
    isDarkMode,
    toggle: () => setDarkMode((prevValue: boolean) => !prevValue),
  };
}
