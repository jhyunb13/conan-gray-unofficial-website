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
import ShoppingCart from "./components/ShoppingCart";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createHashRouter([
  {
    path: "/",
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
    children: [
      { path: "", element: <PageStore /> },
      {
        path: "merch",
        element: <PageMerch />,
      },
      {
        path: "music",
        element: <PageMusic />,
      },
      {
        path: "products/:productId",
        element: <PageProductDetail />,
      },
      {
        path: "music/products/:productId",
        element: <PageProductDetail />,
      },
      {
        path: "merch/products/:productId",
        element: <PageProductDetail />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
