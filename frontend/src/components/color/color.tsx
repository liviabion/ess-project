import React, { useState } from 'react';

interface ColorComponentProps {
    color: string; 
}

const ColorComponent: React.FC<ColorComponentProps> = ({ color }) => {
    const colorMap: { [key: string]: string } = {
        vermelho: '#FF0000',
        azul: '#0000FF',
        preto: '#000000',
    };
    const backgroundColor = colorMap[color];
    return(
        <div style={{
            width: '55px',
            height: '55px',
            backgroundColor: backgroundColor,
            borderRadius: '1000px',
           
        }}>
        </div>
    )
}
export default ColorComponent