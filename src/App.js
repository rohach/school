import React from 'react';
import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Components/Common/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Right from './Components/Pages/Right/Right';
import Events from './Components/Pages/Events/Events';
import Gallery from './Components/Pages/Gallery/Gallery';
import Teachers from './Components/Pages/Teachers/Teachers.jsx';
import Newsletter from './Components/Pages/Newsletter/Newsletter.jsx';
import Blog from './Components/Pages/Blog/Blog.jsx';
import Footer from './Components/Common/Footer/Footer.jsx';
import Headroom from 'react-headroom';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Headroom>
          <Navbar />
        </Headroom>
        <Home />
        <About />
        <Right />
        <Events />
        <Gallery />
        <Teachers />
        <Blog />
        <Newsletter />
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
