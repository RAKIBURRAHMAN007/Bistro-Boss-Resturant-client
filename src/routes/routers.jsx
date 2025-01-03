import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/ourMenu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/order',
          element: <Order></Order>
        }
      ]
    },
  ]);