import React, { lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Reastaurant from "./components/Restaurant";

const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app bg-gray-50">
      <Header />
      <Outlet/>
    </div>
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
          element: <Contact/>
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