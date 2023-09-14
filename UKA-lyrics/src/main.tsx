import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import Artists from "./pages/Artists.tsx";
import ArtistSongs from "./pages/ArtistSongs.tsx";
import Favourites from "./pages/Favourites.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "artists",
    element: <Artists />,
  },
  {
    path: "artistsongs/:artistID",
    element: <ArtistSongs />,
  },
  {
    path: "artistsongs/:trackId",
    element: <ArtistSongs/>,
  },
  {
    path: "favourites",
    element: <Favourites />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
