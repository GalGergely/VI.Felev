import React, { useState } from 'react';
import './App.css';

import Playlists from './Playlists/Playlists';
import Tracks from './Tracks/Tracks';
import Layout from './Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [shownPage, setShownPage] = useState('playlists');

  const changePage = (page) => {
    setShownPage(page);
  };

  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/playlists" element={ <Playlists></Playlists> }></Route>
        <Route path="/tracks" element={ <Tracks></Tracks> }></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
  /*
*/
}

export default App;