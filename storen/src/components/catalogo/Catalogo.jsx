import React from 'react';
import '../../styles/catalogo/Catalogo.css'; // Asegúrate de importar tus estilos
import ProductCard from './ProductCard';
import { models } from '../../data/modelData'; // Ajusta la ruta según sea necesario


const Catalog = () => {
    return (
        <div className="catalog-container">
            {models.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default Catalog;
