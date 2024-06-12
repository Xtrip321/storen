import React from 'react'

export const GlassesType = ({ type }) => {
    return (
        <div className='glassesType-container'>
            <h3>{type.title}</h3>
            <img src={type.imagen} alt={type.imgDescription} />
            <a href={type.link}></a>
        </div>
    )
}

export default GlassesType;
