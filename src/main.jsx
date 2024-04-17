import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/style.css";
import Root from "./routes/Root.jsx";
import Shop from "./routes/Shop.jsx";
import MainPage from "./components/MainPage.jsx";
import ListenPage from "./components/ListenPage.jsx";
import VideosPage from "./components/VideosPage";
import TourPage from "./components/TourPage.jsx";
import StorePage from "./components/StorePage.jsx";
import MerchPage from "./components/MerchPage";
import MusicPage from "./components/MusicPage";
import InfoPage from "./components/InfoPage";
import ProductDetailPage from "./components/ProductDetailPage";
import ShoppingCart from "./components/ShoppingCart";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/listen", element: <ListenPage /> },
      { path: "/videos", element: <VideosPage /> },
      { path: "/tour", element: <TourPage /> },
      { path: "/info", element: <InfoPage /> },
    ],
  },

  {
    path: "/store",
    element: <Shop />,
    children: [
      { path: "/store", element: <StorePage /> },
      {
        path: "/store/merch",
        element: <MerchPage />,
      },
      {
        path: "/store/music",
        element: <MusicPage />,
      },
      {
        path: "/store/products/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "/store/music/products/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "/store/merch/products/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "/store/shopping-cart",
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
