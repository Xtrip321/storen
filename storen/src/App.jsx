import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Home from './components/main/Home'; // Asumiendo que tienes un componente Home
import Catalog from './components/catalogo/Catalogo'; // Asumiendo que tienes un componente Catalog
// import Contact from './components/Contact'; // Asumiendo que tienes un componente Contact
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
