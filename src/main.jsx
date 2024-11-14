import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Components/Router/Routers.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Routers}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
