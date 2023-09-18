import HomePage from "../src/pages/HomePage"
import { expect, test } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ArtistSongs from "../src/pages/ArtistSongs";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Artists from "../src/pages/Artists";
import Favourites from "../src/pages/Favourites";
import React from "react";
import FavouriteCard from "../src/components/FavouriteCard";

//Før testing: Kjør npm install -D for vitest, jsdom, @testing-library/react, @testing-library/jest-dom, @testing-library/user-event
//Kall alle testfiler xxx.test.tsx for at vitest skal finne dem
//Studass sier det kan hende at problemene med useState og useEffect har med versjonen av vitest å gjøre, så kan hende det hjelper å reinstallere. 

//TODO:
//Få alle eksisterende tester til å kjøre
//Bør teste state også, f.eks burgermeny eller artistcard
//Rydde 
//Endre filnavn
//NB: Fjerne kommentarer!!

//Test med snapshot
test('Snapshot test of HomePage', () => { //blir noe surr med useState i BurgerMenu, men uten BurgerMenu funker den
    const homePage = render(<HomePage />);
    expect(homePage).toMatchSnapshot();
   });

// Test med @testing-library/react
test('Test of the content of HomePage', () => { //blir noe surr med useState i BurgerMenu, men uten BurgerMenu funker den
    render(<HomePage />);
    expect(screen.getByText(/Velkommen/i)).toBeTruthy() 
    expect(screen.getByText(/til/i)).toBeTruthy()
    expect(screen.getByText(/UKA-Lyrics/i)).toBeTruthy()
    expect(screen.getByRole('button', {
      name: /VELG ARTIST/i
    })).toBeTruthy
   });

// Test med props
test('Test of props of FavouriteCard', () => { //blir noe surr med useState i BurgerMenu, men uten BurgerMenu funker den
    render(<FavouriteCard songName="mockSong"/>);
    const favouriteCard = screen.getByText(/mockSong/i);
    expect(favouriteCard).toBeTruthy;
});

// Test med userEvent og navigasjon
test('Click on VELG ARTIST navigates to next page', () => { //blir også her noe surr med useState i BurgerMenu
    render(<HomePage /> )
    userEvent.click(screen.getByText('VELG ARTIST'))
    expect(screen.getByText('Artist songs Page')).toBeTruthy(); //leter på samme side i stedet for å se på neste side, trenger router som wrapper?
    expect(screen.getByRole('button', {
      name: /VELG ARTIST/i
    })).toBeCalled(); //evt bare teste at den er klikket typ sånn her
  })

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
    path: "favourites",
    element: <Favourites />,
  },
]);

// Test av navigasjon, ikke påkrevd men sikkert fint å teste hvis vi får det til å funke
  test('React Router navigates between pages', () => { // vil utvide denne for å teste at systemet navigerer riktig ved click 
    render( <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </React.StrictMode>,);
    expect(screen.getByText('Velkommen')).toBeTruthy(); // blir her noe surr med useEffect
    userEvent.click(screen.getByText('VELG ARTIST'))
    expect(screen.getByText('Artist songs Page')).toBeTruthy(); // vil teste at siden navigerer videre til neste ved knappetrykk
  })