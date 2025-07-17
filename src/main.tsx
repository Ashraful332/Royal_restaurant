import React from "react";
import {  createBrowserRouter,  RouterProvider, } from "react-router";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {  path: "/",  element: <App/>},
]);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <div>
    <RouterProvider router={router} />
  <Toaster/>
  </div>
);

