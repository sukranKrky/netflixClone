import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalContext.jsx";
import { ToastProvider } from "./Context/ToastContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
