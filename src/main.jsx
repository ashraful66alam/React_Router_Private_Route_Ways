import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; //migration style

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* migration style */}
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
