import HomePage from "../src/pages/HomePage";
import { expect, test } from "vitest";
import { render, screen, waitForElementToBeRemoved, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import FavouriteCard from "../src/components/FavouriteCard";
import { vi } from "vitest";
import ArtistCard from "../src/components/ArtistCard";
import { QueryClient, QueryClientProvider  } from "react-query";

test("Snapshot test: HomePage has not changed design", () => {
  const homePage = render(<HomePage />);
  expect(homePage).toMatchSnapshot();
});

test("Content test: HomePage has not changed content", () => {
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

test("Props test with mocking: FavouriteCard displays the values fetched from localstorage", () => {
  const localStorageParsed = {
    "60wybNtwQmLvMo27Deve1A": "Rosa sky",
    "3TetzmUS3NlK6GJrKAgvzc": "Håper du har plass"
}
  const getMockSongsFromLocalStorage = vi.fn(() => localStorageParsed)
  const favourites = getMockSongsFromLocalStorage()
  render(<div>
  {Object.entries(favourites).map(([songId, songName], _) => (
      <FavouriteCard
        key={songId}
        songName={songName as string}
      ></FavouriteCard>
  ))}
</div>)
  expect(screen.getByText(/Rosa sky/i)).toBeTruthy();
  expect(screen.getByText(/Håper du har plass/i)).toBeTruthy();
});

test("Navigation test with user event: Click on button 'VELG ARTIST' leads to navigation to page 'Artists'", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
  userEvent.click(screen.getByText("VELG ARTIST"));
  expect(screen.findByText("Velg en artist")).toBeTruthy();
});

test("Fetch test with update of state: The correct song is fetched, and the next song is fetched when the next-button is clicked", async () => {
  const queryClient = new QueryClient();

  const artistCard = render(
    <QueryClientProvider client={queryClient}>
      <ArtistCard artistID="3q7HBObVc0L8jNeTe5Gofh"/>
    </QueryClientProvider>
  );
  await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  expect(artistCard.getByRole('link', { name: 'In Da Club' })).toHaveAttribute('href', 'https://open.spotify.com/track/7iL6o9tox1zgHpKUfh9vuC')
  act(() => {
    userEvent.click(screen.getByText("→"));
  });
  await waitForElementToBeRemoved(() => artistCard.getByRole('link', { name: 'In Da Club' }));
  expect(artistCard.getByRole('link', { name: 'Candy Shop' })).toHaveAttribute('href', 'https://open.spotify.com/track/5D2mYZuzcgjpchVY1pmTPh')
}); 