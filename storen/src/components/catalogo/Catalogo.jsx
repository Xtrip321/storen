import React, { useState } from 'react';
import '../../styles/catalogo/Catalogo.css';
import ProductCard from './ProductCard';
import { models } from '../../data/modelData';
import Title from '../Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/catalogo/FilterPanel.css';

const Catalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [lensType, setLensType] = useState('Todos'); // Ajuste para que la opción por defecto sea "Todos"
    const [size, setSize] = useState(null);
    const [filteredModels, setFilteredModels] = useState(models);

    const toggleFilters = () => {
        setIsOpen(!isOpen);
    };

    const closeFilters = () => {
        setIsOpen(false);
    };

    const handleFilter = () => {
        const filtered = models.filter(model => {
            const matchesName = model.name.toLowerCase().includes(name.toLowerCase());
            const matchesLensType = lensType === 'Todos' || model.lensType === lensType;
            const matchesSize = size === null || model.sizes.includes(size);
            return matchesName && matchesLensType && matchesSize;
        });
        setFilteredModels(filtered);
        setIsOpen(false);
    };

    const toggleSize = (t) => {
        setSize(size === t ? null : t); // Permite deseleccionar el tamaño
    };

    return (
        <>
            <Title text={"CATÁLOGO"} />
            <div className="filter-panel-container">
                <button className="filter-button" onClick={toggleFilters}>
                    <FontAwesomeIcon icon={faFilter} /> FILTROS
                </button>
                <div className={`filter-panel ${isOpen ? 'open' : ''}`}>
                    <button className="close-button" onClick={closeFilters}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <div className="filter-option first-option">
                        <label htmlFor="name">NOMBRE</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="filter-option">
                        <label htmlFor="lensType">TIPO DE LENTE</label>
                        <select 
                            id="lensType" 
                            value={lensType}
                            onChange={(e) => setLensType(e.target.value)}
                        >
                            <option value="Todos">Todos</option>
                            <option value="Sunglasses">Sunglasses</option>
                            <option value="Optical">Optical</option>
                        </select>
                    </div>
                    <div className="filter-option">
                        <label>TALLE</label>
                        <div className="size-buttons">
                            {['S', 'M', 'L', 'XL'].map((t) => (
                                <button 
                                    key={t} 
                                    className={`size-button ${size === t ? 'selected' : ''}`}
                                    onClick={() => toggleSize(t)}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="filter-apply">
                        <button onClick={handleFilter}>FILTRAR</button>
                    </div>
                </div>
            </div>
            <div className="catalog-container">
                {filteredModels.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </>
    );
};

export default Catalog;
