import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import Artists from "./pages/Artists.tsx";
import ArtistSongs from "./pages/ArtistSongs.tsx";
import Favourites from "./pages/Favourites.tsx";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
    path: "artistsongs",
    element: <ArtistSongs />,
  },
  {
    path: "favourites",
    element: <Favourites />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
