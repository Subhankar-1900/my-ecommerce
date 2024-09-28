import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductcontextAPI from "./context/ProductContext.jsx";
import CartContextAPI from "./context/CartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductcontextAPI>
      <CartContextAPI>
        <App />
      </CartContextAPI>
    </ProductcontextAPI>
  </React.StrictMode>
);
