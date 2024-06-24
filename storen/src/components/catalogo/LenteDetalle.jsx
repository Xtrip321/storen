import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { models } from '../../data/modelData';
import Title from '../Title';
import ProductCard from './ProductCard'; // Asegúrate de importar tu componente ProductCard
import '../../styles/catalogo/LenteDetalle.css';

const importImage = (imagePath) => {
    return `/src/assets/imgs/${imagePath}`;
};

const getRandomModels = (models, count) => {
    const shuffled = models.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const LensDetail = () => {
    const { lensName } = useParams();

    // Mantén todos los hooks fuera de las condiciones
    const [lens, setLens] = useState(null);
    const [randomRecommendedModels, setRandomRecommendedModels] = useState([]);
    const [currentMainImageIndex, setCurrentMainImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(null); // Estado para el índice del color seleccionado, inicialmente null

    useEffect(() => {
        const selectedLens = models.find(model => model.name === lensName);
        if (selectedLens) {
            setLens(selectedLens);
            // Filtrar modelos recomendados basados en el mismo lensType
            const recommendedModels = models.filter(model => model.lensType === selectedLens.lensType && model.name !== selectedLens.name);
            // Seleccionar 4 modelos aleatoriamente
            setRandomRecommendedModels(getRandomModels(recommendedModels, 4));
            // Reiniciar índices al cambiar de producto
            setCurrentMainImageIndex(0);
            setSelectedColorIndex(null);
        }
    }, [lensName]);

    if (!lens) {
        return <h2>Lente no encontrado</h2>;
    }

    // Preparar imágenes del carrusel y de color
    const mainImages = [importImage(lens.imageUrl.replace('./src/assets/imgs/', '')), ...lens.additionalImages.map(image => importImage(image.imageUrl.replace('./src/assets/imgs/', '')))];
    const colorImages = lens.colors.map(color => importImage(color.imageUrl.replace('./src/assets/imgs/', '')));

    // Maneja la navegación del carrusel
    const handleNavigation = (direction) => {
        const newIndex = direction === 'next' ?
            (currentMainImageIndex + 1) % mainImages.length :
            (currentMainImageIndex + mainImages.length - 1) % mainImages.length;
        setCurrentMainImageIndex(newIndex);
        setSelectedColorIndex(null); // Desactivar la selección de color al navegar
    };

    // Maneja el click en una imagen de color
    const handleColorClick = (index) => {
        setSelectedColorIndex(index); // Actualiza el índice de color seleccionado
    };

    // Maneja el click en una imagen del carrusel
    const handleImageClick = (index) => {
        setSelectedColorIndex(null); // Resetea la selección de color cuando se hace clic en una imagen del carrusel
        setCurrentMainImageIndex(index); // Actualiza la imagen principal a la imagen del carrusel seleccionada
    };

    // URL de la imagen principal del carrusel
    const mainImageSrc = mainImages[currentMainImageIndex];
    // URL de la imagen de color seleccionada
    const selectedColorImageSrc = selectedColorIndex !== null ? colorImages[selectedColorIndex] : null;

    return (
        <>
            <div className="lens-detail-container">
                <div className='lens-info-title-container'>
                    <Title text={lens.name} color="#FFA800" />
                </div>
                <div className="lens-images">
                    <button onClick={() => handleNavigation('prev')} className="nav-button prev-button"></button>
                    {/* Imágenes del carrusel */}
                    <div className='lens-image-container'>
                        <img src={mainImageSrc} alt={lens.name} className={`main-image ${selectedColorIndex !== null ? 'hidden' : ''}`} />
                    </div>
                    {/* Imagen de color seleccionada */}
                    {selectedColorImageSrc && (
                        <img src={selectedColorImageSrc} alt={`Color seleccionado`} className={`color-main-image`} />
                    )}
                    <button onClick={() => handleNavigation('next')} className="nav-button next-button"></button>
                    <div className="additional-images">
                        {mainImages.map((url, index) => (
                            index !== currentMainImageIndex && (
                                <img key={index} src={url} alt={`Additional view ${index + 1}`} className="additional-image" onClick={() => handleImageClick(index)} />
                            )
                        ))}
                    </div>
                </div>
                <div className="lens-info">
                    <h3>Colores</h3>
                    <div className="color-options">
                        {lens.colors.map((color, index) => (
                            <img
                                key={index}
                                src={colorImages[index]} // Usa la URL importada de colorImages
                                alt={`Color ${index + 1}`}
                                className={`color-image ${selectedColorIndex === index ? 'selected' : ''}`}
                                onClick={() => handleColorClick(index)}
                            />
                        ))}
                    </div>
                    <button className="find-button">Contactanos!</button>
                    <p>{lens.description}</p>
                    <ul>
                        <li><strong>Frente:</strong> {lens.frame}</li>
                        <li><strong>Patilla:</strong> {lens.temple}</li>
                        <li><strong>Lente:</strong> {lens.lens}</li>
                        <li><strong>Peso:</strong> {lens.weight}</li>
                        <li><strong>Talle:</strong> {lens.sizes}</li>
                    </ul>
                </div>
            </div>
            <div className="recommendations">
                <div className="catalog-container">
                    {randomRecommendedModels.map((product, index) => (
                        <ProductCard key={index} product={{
                            ...product,
                            imageUrl: importImage(product.imageUrl.replace('./src/assets/imgs/', '')),
                            colors: product.colors.map(color => ({
                                ...color,
                                imageUrl: importImage(color.imageUrl.replace('./src/assets/imgs/', ''))
                            }))
                        }} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default LensDetail;
