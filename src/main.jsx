import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/routes.jsx";
import { RouterProvider } from "react-router";
import BookProvider from "./BookProvider/BookProvider.jsx";
// import router from "./routes/routes.jsx";
import {ToastContainer} from 'react-toastify'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
     <ToastContainer />
    </BookProvider>
  </StrictMode>,
);
