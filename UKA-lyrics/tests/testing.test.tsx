import HomePage from "../src/pages/HomePage"
import { expect, test } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Snapshot test of HomePage', () => { //blir noe surr med useState i BurgerMenu, men uten BurgerMenu funker den
    const homePage = render(<HomePage />);
    expect(homePage).toMatchSnapshot();
   });

test('Click on VELG ARTIST navigates to next page', () => { //blir også her noe surr med useState i BurgerMenu
    render(<HomePage /> )
    userEvent.click(screen.getByText('VELG ARTIST'))
    expect(screen.getByText('Artist songs Page')).toBeTruthy(); //leter på samme side i stedet for å se på neste side
  })