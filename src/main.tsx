import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Home } from "./pages/Home.tsx";
import { CartPage } from "./pages/Cart.tsx";
import { Payment } from "./pages/Payment.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
