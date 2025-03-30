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
import { useState,useEffect } from "react";
import UserContext from "./utils/UserContext.js";
const AppLayout = () => {
  const[userName,setUserName]=useState();
  useEffect(()=>{
     const data={
      name:"rajesh reddy"
     }
     setUserName(data.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
       

      <Heading />
     
      <Outlet />
      
    </div>
    </UserContext.Provider>
    
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
