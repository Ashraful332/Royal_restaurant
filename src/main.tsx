import {  createBrowserRouter,  RouterProvider, } from "react-router";
import ReactDOM from "react-dom/client";
import './index.css'
import './components/home/home.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast';
import About from "./page/about/About.tsx";
import Blog from "./page/blog/Blog.tsx";
import Contact from "./page/Contact/Contact.tsx";
import Menu from "./page/menu/Menu.tsx";
import Reservation from "./page/Reservation/Reservation.tsx";


const router = createBrowserRouter([
  {  path: "/",  element: <App/>},
  {  path: "/about",  element: <About/>},
  {  path: "/blog",  element: <Blog/>},
  {  path: "/contact",  element: <Contact/>},
  {  path: "/menu",  element: <Menu/>},
  {  path: "/reservation",  element: <Reservation/>},
]);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <div>
    <RouterProvider router={router} />
  <Toaster/>
  </div>
);

