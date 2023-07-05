

import App from "./App";
import "./index.css";
import CartState from "./Context/Cart/CartState";
import React from 'react';
import ReactDOM from 'react-dom'




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>
);
export default CartState;