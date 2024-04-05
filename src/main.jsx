import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/style.css";
import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import TourPage from "./components/TourPage.jsx";
import ListenPage from "./components/ListenPage.jsx";
import StorePage from "./components/StorePage.jsx";
import MainPage from "./components/MainPage.jsx";
import MerchPage from "./components/MerchPage.jsx";
import MusicPage from "./components/MusicPage.jsx";
import InfoPage from "./components/InfoPage";
import VideoPage from "./components/VideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/listen", element: <ListenPage /> },
      { path: "/video", element: <VideoPage /> },
      { path: "/tour", element: <TourPage /> },
      { path: "/store", element: <StorePage /> },
      { path: "/store/merch", element: <MerchPage /> },
      { path: "/store/music", element: <MusicPage /> },
      { path: "/info", element: <InfoPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
