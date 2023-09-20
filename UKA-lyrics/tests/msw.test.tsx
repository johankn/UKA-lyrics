import { rest } from "msw";
import { setupServer } from "msw/node";
import { beforeAll, afterAll, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ArtistCard from "../src/components/ArtistCard";
import "@testing-library/jest-dom";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const server = setupServer(
  rest.get(
    "https://api.spotify.com/v1/artists/504cl42JQLRqlZddfZ3S4z/top-tracks?market=NO",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: "1",
            name: "Song 1",
            album: {
              images: [{ url: "image_url_1" }],
            },
            external_urls: { spotify: "spotify_url_1" },
          },
          {
            id: "2",
            name: "Song 2",
            album: {
              images: [{ url: "image_url_2" }],
            },
            external_urls: { spotify: "spotify_url_2" },
          },
        ]),
      );
    },
  ),
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

const queryClient = new QueryClient();

test("renders song data", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ArtistCard artistID="123" />{" "}
    </QueryClientProvider>,
  );

  await expect(screen.findByText("Song 1")).resolves.toBeTruthy();
  await expect(screen.findByText("Song 2")).resolves.toBeTruthy();
});
