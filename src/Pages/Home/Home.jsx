import React from 'react';
import { NavBar } from '../../Components/NavBar/NavBar';
import {
  Beverages,
  Brands,
  FirstToKnow,
  Footer,
  ForYou,
  Mission,
} from '../../MinorComponents/MinorComponents';
import { ThreeCircles } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after a certain delay
    }, 2000);
  }, []);
  return (
    <div style={{ fontFamily: 'Figtree' }}>
      {isLoading ? (
        <div
          className="loader-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <ThreeCircles
            color="#AD2418"
            height={200}
            width={200}
            timeout={5000}
          />{' '}
        </div>
      ) : (
        <div>
          <NavBar />
          <Beverages />
          <Brands />
          <ForYou />
          <FirstToKnow />
          <Mission />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
