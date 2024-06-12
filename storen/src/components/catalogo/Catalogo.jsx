import React from 'react';
import '../../styles/Catalogo.css'; // Asegúrate de importar tus estilos
import img1 from '../../assets/imgs/Modelos/Venture/MAIN_1.png';
import img2 from '../../assets/imgs/Modelos/Sungs/MAIN_1.png';

const Catalog = () => {
    // Supongamos que tienes algunos productos en un array
    const products = [
        { id: 1, name: 'Producto 1', price: '20$', imageUrl: img1 },
        { id: 2, name: 'Producto 2', price: '25$', imageUrl: img2 },
        // Agrega más productos según sea necesario
    ];

    return (
        <div className="catalog-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Catalog;
