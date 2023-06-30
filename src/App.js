import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

