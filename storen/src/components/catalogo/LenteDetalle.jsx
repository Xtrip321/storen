import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { models } from '../../data/modelData';
import Title from '../Title';
import ProductCard from './ProductCard';
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

    const [lens, setLens] = useState(null);
    const [randomRecommendedModels, setRandomRecommendedModels] = useState([]);
    const [currentMainImageIndex, setCurrentMainImageIndex] = useState(0);
    const [selectedColorIndex, setSelectedColorIndex] = useState(null);

    useEffect(() => {
        const selectedLens = models.find(model => model.name === lensName);
        if (selectedLens) {
            setLens(selectedLens);
            const recommendedModels = models.filter(model => model.lensType === selectedLens.lensType && model.name !== selectedLens.name);
            setRandomRecommendedModels(getRandomModels(recommendedModels, 4));
            setCurrentMainImageIndex(0);
            setSelectedColorIndex(null);
        }
    }, [lensName]);

    if (!lens) {
        return <h2>Lente no encontrado</h2>;
    }

    const mainImages = [importImage(lens.imageUrl.replace('./src/assets/imgs/', '')), ...lens.additionalImages.map(image => importImage(image.imageUrl.replace('./src/assets/imgs/', '')))];
    const colorImages = lens.colors.map(color => importImage(color.imageUrl.replace('./src/assets/imgs/', '')));

    const handleNavigation = (direction) => {
        const newIndex = direction === 'next' ?
            (currentMainImageIndex + 1) % mainImages.length :
            (currentMainImageIndex + mainImages.length - 1) % mainImages.length;
        setCurrentMainImageIndex(newIndex);
        setSelectedColorIndex(null);
    };

    const handleColorClick = (index) => {
        setSelectedColorIndex(index);
    };

    const handleImageClick = (index) => {
        setSelectedColorIndex(null);
        setCurrentMainImageIndex(index);
    };

    const mainImageSrc = mainImages[currentMainImageIndex];
    const selectedColorImageSrc = selectedColorIndex !== null ? colorImages[selectedColorIndex] : null;

    return (
        <>
            <div className="lens-detail-container">
                <div className='lens-info-title-container'>
                    <Title text={lens.name} color="#FFA800" />
                </div>
                <div className="lens-images">
                    <button onClick={() => handleNavigation('prev')} className="nav-button prev-button"></button>
                    <div className='lens-image-container'>
                        <img src={mainImageSrc} alt={lens.name} className={`main-image ${selectedColorIndex !== null ? 'hidden' : ''}`} />
                        {selectedColorImageSrc && (
                            <img src={selectedColorImageSrc} alt={`Color seleccionado`} className={`color-main-image`} />
                        )}
                    </div>
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
                                src={colorImages[index]}
                                alt={`Color ${index + 1}`}
                                className={`color-image ${selectedColorIndex === index ? 'selected' : ''}`}
                                onClick={() => handleColorClick(index)}
                            />
                        ))}
                    </div>
                    <Link to={`/contact?lens=${lens.name}`} className="find-button">Contactanos!</Link>
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
