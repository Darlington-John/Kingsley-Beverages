import React from 'react';
import { NavBar } from '../../Components/NavBar/NavBar';
import {
  Footer,
  GreenBackground,
  GreenBackground2,
  ProductsRange,
  Uncover,
} from '../../MinorComponents/MinorComponents';

const Products = () => {
  return (
    <div style={{ fontFamily: 'Figtree' }}>
      <NavBar />

      <Uncover />

      <GreenBackground />
      <ProductsRange />
      <GreenBackground2 />
      <Footer />
    </div>
  );
};

export default Products;
