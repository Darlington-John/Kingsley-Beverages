import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import IndividualProducts from './Pages/Individual Products/IndividualProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        <Route path="/product" element={<Products />} />{' '}
        <Route path="/individual-product" element={<IndividualProducts />} />{' '}
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;
