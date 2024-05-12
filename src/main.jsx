import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./assets/style.css";
import Root from "./routes/Root.jsx";
import Shop from "./routes/Shop.jsx";
import PageMain from "./components/PageMain.jsx";
import PageListen from "./components/PageListen.jsx";
import PageVideos from "./components/PageVideos";
import PageTour from "./components/PageTour.jsx";
import PageStore from "./components/PageStore.jsx";
import PageMerch from "./components/PageMerch";
import PageMusic from "./components/PageMusic";
import PageProductDetail from "./components/PageProductDetail";
import PageShoppingCart from "./components/PageShoppingCart";
import ErrorPage from "./routes/ErrorPage.jsx";

function loader() {
  return function (str) {
    return str.toUpperCase();
  };
}

const router = createHashRouter([
  {
    path: "/",
    loader: loader,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <PageMain /> },
      { path: "listen", element: <PageListen /> },
      { path: "videos", element: <PageVideos /> },
      { path: "tour", element: <PageTour /> },
    ],
  },

  {
    path: "/store",
    element: <Shop />,
    loader: loader,
    children: [
      { path: "", loader: loader, element: <PageStore /> },
      {
        path: "merch",
        loader: loader,
        element: <PageMerch />,
      },
      {
        path: "music",
        loader: loader,

        element: <PageMusic />,
      },
      {
        path: "products/:productId",
        loader: loader,

        element: <PageProductDetail />,
      },
      {
        path: "music/products/:productId",
        loader: loader,
        element: <PageProductDetail />,
      },
      {
        path: "merch/products/:productId",
        loader: loader,
        element: <PageProductDetail />,
      },
      {
        path: "shopping-cart",
        loader: loader,
        element: <PageShoppingCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
