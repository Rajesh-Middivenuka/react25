import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading.js";
import Body from "./components/Body.js";
import RestaurantCard from "./components/RestaurantCard.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./components/Error.js";
import Restromenupage from "./components/Restromenupage.js";
const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restromenu/:resId",
        element: <Restromenupage />,
      },
    ],
  },
]);
// what it does createBrowserRouter() called configration infomration that define what happend in a
// specif route it takes a list of array paths
root.render(<RouterProvider router={appRouter} />);
