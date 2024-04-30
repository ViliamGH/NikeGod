import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GodHome from './pages/GodHome';
import GodNavbar from './components/GodNavbar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className='background'>
      <GodNavbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<GodHome />} />
        </Routes>
      </BrowserRouter>

    </Container>
  );
}

export default App;
