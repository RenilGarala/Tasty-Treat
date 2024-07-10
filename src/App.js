import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import Reastaurant from "./components/Restaurant";
import userContext from "./utils/userContext";

const About = lazy(()=>import("./components/About"));
const Contact = lazy(()=> import("./components/Contact"));
// const Error = lazy(()=> import("./components/Error"));
// const Reastaurant = lazy(()=> import("./components/Restaurant"));

const AppLayout = () => {

  //authentication 
  const [userName,setUserName]=useState();

  useEffect(()=>{
    const data={
      name: "renil garala"
    }
    setUserName(data.name);
  })

  return (
    <userContext.Provider value={{ loggedInUser: userName}}>
    <div className="app bg-gray-50">
      <Header />
      <Outlet/>
    </div>
    </userContext.Provider>
  );
};
const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      errorElement: <Error/>,
      children:[
        {
          path:"/",
          element: <Body/>
        },
        {
          path:"/about",
          element: <Suspense fallback={<div>Loading....</div>}><About/></Suspense>
        },
        {
          path:"/contact",
          element: <Suspense fallback={<div>Loading....</div>}><Contact/></Suspense>
        },
        {
          path:"/restaurant/:resId",  //resid change according to restaurant
          element: <Reastaurant/>
        }
      ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);