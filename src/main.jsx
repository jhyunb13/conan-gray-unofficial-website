import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./assets/style.css";
import Root from "./routes/Root.jsx";
import Shop from "./routes/Shop.jsx";
import PageMain from "./pages/PageMain.jsx";
import PageListen from "./pages/PageListen.jsx";
import PageVideos from "./pages/PageVideos";
import PageTour from "./pages/PageTour.jsx";
import PageStore from "./pages/PageStore.jsx";
import PageMerch from "./pages/PageMerch";
import PageMusic from "./pages/PageMusic";
import PageProductDetail from "./pages/PageProductDetail";
import PageShoppingCart from "./pages/PageShoppingCart";
import ErrorPage from "./routes/ErrorPage.jsx";

function loader() {
  return function (str) {
    return str.toUpperCase();
  };
}

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loader,
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
    errorElement: <ErrorPage />,
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
