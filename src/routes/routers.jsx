import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/Dashboard/Cart";


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
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);