import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Reastaurant from "./components/Restaurant";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Card from "./components/Cart";

// const Error = lazy(()=> import("./components/Error"));
// const Reastaurant = lazy(()=> import("./components/Restaurant"));

const AppLayout = () => {
  //authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "renil garala",
    };
    setUserName(data.name);
  });

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName }}>
        <div className="app bg-gray-50">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId", //resid change according to restaurant
        element: <Reastaurant />,
      },
      {
        path: "/cart",
        element: <Card/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
