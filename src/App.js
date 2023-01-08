import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from 'components/HomePage';
import { AnimeDetails } from 'components/AnimeDetails';
/* import { Header } from 'components/Header'; */

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animes/id/:animeId" element={<AnimeDetails />} />
      </Routes>

    </BrowserRouter>

  )
}
