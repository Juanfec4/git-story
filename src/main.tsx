import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import DetailsPage from "./pages/DetailsPage";
import LandingPage from "./pages/LandingPage";
import Page404 from "./pages/page404";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/details", element: <DetailsPage /> },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
