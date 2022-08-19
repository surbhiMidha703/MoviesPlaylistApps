import React from 'react';
import { MoviesContent } from 'movies-content';
import { PlaylistContent } from 'playlist-content'
import { AppShell } from 'ui'
function App() {
  return (

    <AppShell title="Movies" colorScheme='light' routes={[
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
