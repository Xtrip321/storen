import React from 'react'

export const GlassesType = ({ type }) => {
    return (
        <div className='box-container glassesType'>
            <h3><span>{type.firtLetterTitle}</span>{type.RestTitle}</h3>
            <img src={type.image} alt={type.imgDescription} />
            <a href={type.link} rel="noopener noreferrer"></a>
        </div>
    )
}

export default GlassesType;
