import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Preloader from "../src/components/Pre";
import Footer from './components/Footer';



import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';
import './style.css';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/About/About';


function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200)
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
