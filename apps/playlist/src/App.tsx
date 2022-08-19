import React from 'react';

import { MoviesContent } from 'movies-content';
import { AppShell } from 'ui'
import { PlaylistContent } from 'playlist-content';
function App() {
  return (

    <AppShell title="Playlist" colorScheme='dark' routes={[
      {
        path: "/",
        element: MoviesContent
      },
      {
        path: '/playlist',
        element: PlaylistContent
      }
    ]}
      navLinks={[
        {
          label: "Home",
          path: '/',
        },
        {
          label: "PlayList",
          path: '/playlist'
        }

      ]}
    />
  );
}

export default App;
