import { button } from '@nextui-org/react';
import React from 'react';

interface ColorComponentProps {
    color: string;
    selected: boolean;
}

const ColorComponent: React.FC<ColorComponentProps & { onClick: () => void }> = ({ color, selected, onClick }) => {
    const colorMap: { [key: string]: string } = {
        vermelho: '#FF0000',
        azul: '#0000FF',
        preto: '#000000',
    };
    const backgroundColor = colorMap[color];

    const wrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%', 
        padding: selected ? '4px' : '0', 
        backgroundColor: selected ? 'white' : 'transparent', 
        border: selected ? '2px solid black' : 'none',  
    };

    const colorCircleStyle = {
        width: '55px',
        height: '55px',
        borderRadius: '100%',
        backgroundColor: backgroundColor,
    };

    return (
        <button onClick={onClick}>
            <div style={wrapperStyle}>
                <div style={colorCircleStyle}></div>
            </div>
        </button>
    );  
};

export default ColorComponent;
