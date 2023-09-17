import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { beforeAll, afterAll, test } from 'vitest'
import { render } from '@testing-library/react'
import ArtistCard from '../src/components/ArtistCard';
import React from 'react';

const server = setupServer(// Describe the requests to mock.
 rest.get('/topsongs', (req, res, ctx) => {
 return res(
 ctx.json({
    id: '1',
  name: 'Song 1', 
  album: {
    images: [{ url: 'image_url_1' }],
  },
  external_urls: { spotify: 'spotify_url_1' },
 }),
 ctx.json({
    id: '2',
  name: 'Song 2', 
  album: {
    images: [{ url: 'image_url_2' }],
  },
  external_urls: { spotify: 'spotify_url_2' },
 }),
 )
 }),
)

beforeAll(() => {// Establish requests interception layer before all tests.
 server.listen()
})

afterAll(() => {// Clean up after all tests are done
 server.close()
})

// Test med Mock Service Worker, ikke ferdig
test('renders a book data', () => {
 // Render components, perform requests, API communication is covered.
    const artistCard = render(<ArtistCard artistID='123'/>);

    fetch('/topsongs')
    .then(res => res.json())
    .then(
        (result) => {
        this.setState({
        isLoaded: true,
        items: result.items
        });
        })
})

.then(res => res.json())
.then(
(result) => {
this.setState({
isLoaded: true,
items: result.items
});
},
(error) => {
this.setState({
isLoaded: true,
error
});
}
)