import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Contact from "./components/Contact";
import Error from "./components/Error";

import Footer from "./components/Footer";
import RestaurentMenu from "./components/RestaurentMenu";

import { Provider } from "react-redux";
import appStore from "./utilis/store/appStore";
import Cart from "./components/Cart";

import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./utilis/AuthContext";

import AuthHOC from "./components/AuthHOC";

// lazy loading
const About = lazy(() => import("./components/About"));
const Grocerymart = lazy(() => import("./components/Grocerymart"));
const OnlineStatus = lazy(() => import("./components/OnlineStatus"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <AuthProvider>
        <AuthHOC>
          <div id="app">
            <Header />
            <Outlet />
            <Footer />
            <div className="online-status">
              <Suspense fallback={<div>Loading...</div>}>
                <OnlineStatus />
              </Suspense>
            </div>
          </div>
        </AuthHOC>
      </AuthProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: (
          <AuthHOC>
            <Body />
          </AuthHOC>
        ),
      },

      {
        path: "/",
        element: <LoginForm />,
      },
      {
        path: "/contact",
        element: (
          <AuthHOC>
            <Contact />
          </AuthHOC>
        ),
      },

      {
        path: "/cart",
        element: (
          <AuthHOC>
            <Cart />{" "}
          </AuthHOC>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AuthHOC>
              {" "}
              <About />
            </AuthHOC>
          </Suspense>
        ),
      },
      {
        path: "/grocerymart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AuthHOC>
              <Grocerymart />
            </AuthHOC>
          </Suspense>
        ),
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
