import React from "react";
import Loginform from "./Sub-page/Loginform"; 
import Gallery from "./Sub-page/Gallery";
import Register from "./Sub-page/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/loginform",
    element: <Loginform />
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path: "/register",
    element: <Register />
  }
 
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
