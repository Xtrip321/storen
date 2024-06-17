import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Home from './components/main/Home';
import Catalog from './components/catalogo/Catalogo';
import LenteDetalle from './components/catalogo/LenteDetalle'; // Importar el nuevo componente
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:lensName" element={<LenteDetalle />} /> {/* Nueva ruta */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
