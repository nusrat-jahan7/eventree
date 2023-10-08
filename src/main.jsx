import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { router } from "./route/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
