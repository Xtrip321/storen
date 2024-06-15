import React from 'react';
import '../styles/Title.css';  // Importa la hoja de estilos CSS

const Title = ({ text }) => {
  return (
    <div class="title-container-main">
    <div class="title-container">
        <div class="line-decorator">
        </div>
        <div class="outer-border">
            <div class="inner-box">
                {text}
            </div>
        </div>
    </div>
    
</div>
  );
}

export default Title;
