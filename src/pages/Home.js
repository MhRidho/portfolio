import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Client from '../components/clients';
import Blog from '../components/blog';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home = () => {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Client />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default Home