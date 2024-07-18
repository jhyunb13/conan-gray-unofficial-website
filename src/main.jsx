import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";

import "./assets/style.css";
import Root from "./layout/Root";
import Main from "./pages/Main";
import Listen from "./pages/Listen";
import Videos from "./pages/Videos";
import Tour from "./pages/Tour";
import ProductListing from "./pages/ProductListing";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./pages/ShoppingCart";
import ErrorPage from "./pages/ErrorPage";

import { CartItemProvider } from "./contexts/CartItemContext";
import { DataProvider } from "./contexts/DataContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createHashRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Main /> },
      { path: "listen", element: <Listen /> },
      { path: "videos", element: <Videos /> },
      { path: "tour", element: <Tour /> },
    ],
  },

  {
    path: "store",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <ProductListing /> },
      {
        path: "found-heaven",
        element: <ProductListing />,
      },
      {
        path: "superache",
        element: <ProductListing />,
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "found-heaven/products/:productId",
        element: <ProductPage />,
      },
      {
        path: "superache/products/:productId",
        element: <ProductPage />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
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
