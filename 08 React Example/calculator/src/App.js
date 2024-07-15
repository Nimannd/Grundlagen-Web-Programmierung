
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import HomeCard from './components/HomeCard.js';
import CalculartorCard from './components/CalculatorCard.js';

export default function App() {
  return (
    <>
      <Header />
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calculator">Rechner</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container">
        <div className="row">
          <div className="col-12">
            <Routes>
              <Route path="/" element={<HomeCard />} />
              <Route path="/calculator" element={<CalculartorCard />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </ >
  );
}


