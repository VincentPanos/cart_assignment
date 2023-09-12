import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Home } from "./pages/Home.tsx";
import { Kinds } from "./pages/Kinds.tsx";
import { Favourites } from "./pages/Favourites.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />}>
        <Route index element={<Home />} />
        <Route path="breeds" element={<Kinds />} />
        <Route path="favourites" element={<Favourites />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
