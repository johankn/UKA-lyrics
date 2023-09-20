import HomePage from "../src/pages/HomePage";
import { expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ArtistSongs from "../src/pages/ArtistSongs";
import { RouterProvider } from "react-router-dom";
import { MemoryRouter, createBrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Artists from "../src/pages/Artists";
import Favourites from "../src/pages/Favourites";
import { StrictMode } from "react";
import FavouriteCard from "../src/components/FavouriteCard";

//Test med snapshot
test("Snapshot test of HomePage", () => {
  const homePage = render(<HomePage />);
  expect(homePage).toMatchSnapshot();
});

// Test med @testing-library/react
test("Test of the content of HomePage", () => {
  render(<HomePage />);
  expect(screen.getByText(/Velkommen/i)).toBeTruthy();
  expect(screen.getByText(/til/i)).toBeTruthy();
  expect(screen.getByText(/UKA-Lyrics/i)).toBeTruthy();
  expect(
    screen.getByRole("button", {
      name: /VELG ARTIST/i,
    }),
  ).toBeTruthy;
});

// Test props
test("Test of props of FavouriteCard", () => {
  render(<FavouriteCard songName="mockSong" />);
  const favouriteCard = screen.getByText(/mockSong/i);
  expect(favouriteCard).toBeTruthy;
});

// Test med userEvent og navigasjon
test("Click on VELG ARTIST navigates to next page", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
  userEvent.click(screen.getByText("VELG ARTIST"));
  expect(screen.findByText("Velg en artist")).toBeTruthy();
});

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

test("React Router navigates between pages", async () => {
  render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );

  expect(screen.getByText("Velkommen")).toBeInTheDocument();
  console.log(screen.debug());
  userEvent.click(screen.getByText("VELG ARTIST"));
  await waitFor(() =>
    expect(screen.getByText("Velg en artist")).toBeInTheDocument(),
  );
});
