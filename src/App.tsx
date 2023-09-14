import { Header } from "./components/Header";
import { useDarkMode } from "./hooks/useDarkMode";
import { useEffect } from "react";
import { PageContainer } from "./components/PageContainer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/useCart";
import { ProductProvider } from "./contexts/useProducts";

const DarkMode = () => {
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    const classes = document.documentElement.classList;
    classes.remove("dark");
    classes.remove("light");
    classes.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  return null;
};

function App() {
  return (
    <>
      <DarkMode />
      <ProductProvider>
        <CartProvider>
          <div className="w-full min-h-screen bg-light dark:bg-dark space-y-8">
            <Header title="Cart Assignment" darkMode />
            <PageContainer>
              <Outlet />
            </PageContainer>
          </div>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
