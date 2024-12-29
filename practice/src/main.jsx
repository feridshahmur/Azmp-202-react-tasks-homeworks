import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FavoritesProvider from "./context/WishlistProvider";
import BasketProvider from "./context/BasketProvider";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <BasketProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </BasketProvider>
    </BrowserRouter>
  </HelmetProvider>

);
