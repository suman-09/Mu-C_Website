import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <>
      <Nav />
          <img src="public/images/home_bg.png" alt="background" />
          <div>
          <div className="text-center">
              The Official Music Club
          </div>
          </div>
      <Footer />
    </>
  );
}

export default Home;
