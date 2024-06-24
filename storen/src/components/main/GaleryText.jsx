import React from 'react';
import PropTypes from 'prop-types';

export const GaleryText = ({ h3text, ptext }) => {
  const formatText = (text) => {
    const parts = text.split(/(\([^)]*\))/).map((part, index) =>
      part.match(/\([^)]*\)/) ? (
        <span key={index} className="highlight">
          {part.slice(1, -1)} {/* Remueve los paréntesis */}
        </span>
      ) : (
        part
      )
    );
    return parts;
  };

  return (
    <div className="box-container text-phrases">
      <div className="phrases-container">
        <h3>{formatText(h3text)}</h3>
        <p>{formatText(ptext)}</p>
      </div>
    </div>
  );
};

GaleryText.propTypes = {
  h3text: PropTypes.string.isRequired,
  ptext: PropTypes.string.isRequired,
};

export default GaleryText;
