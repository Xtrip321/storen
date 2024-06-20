import React from 'react';
import '../styles/Title.css';

const Title = ({ text, color }) => {
  return (
    <div className="title-container-main">
      <div className="title-container">
        <div className="line-decorator" style={{ backgroundColor: color }}></div>
        <div className="outer-border" style={{ backgroundColor: color }}>
          <div className="inner-box" style={{ color: color }}>
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
