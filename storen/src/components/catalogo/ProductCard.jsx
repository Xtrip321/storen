import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import '../../styles/catalogo/ProductCard.css'; // Asegúrate de que el archivo CSS esté correctamente vinculado

const ProductCard = ({ product }) => {
    return (
        <Link to={`/catalog/${product.name}`} className="product-link"> {/* Envuelve el contenido en un Link */}
            <div className="product-card" data-lens-type={product.lensType} data-sizes={product.sizes.join(',')}>
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <h3 className="product-title">{product.name}</h3>
                <div className="color-options">
                    {product.colors.map((color, index) => (
                        <img key={index} src={color.imageUrl} alt={color.name} className="color-image" />
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
