import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

import { CartItemProvider } from "./contexts/CartItemContext";
import { DataProvider } from "./contexts/DataContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
    errorElement: <ErrorPage />,
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
        element: <PageShoppingCart />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 60 * 24, gcTime: 1000 * 60 * 60 * 24 },
  },
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      <ReactQueryDevtools initialIsOpen={false} />
      <CartItemProvider>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </CartItemProvider>
    </PersistQueryClientProvider>
  </React.StrictMode>
);
