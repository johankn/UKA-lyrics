import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
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
    path: "/project1",
    element: <HomePage />,
  },
  {
    path: "project1/artists",
    element: <Artists />,
  },
  {
    path: "project1/artistsongs/:artistID",
    element: <ArtistSongs />,
  },
  {
    path: "project1/favourites",
    element: <Favourites />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);

export default router;
