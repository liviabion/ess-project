import React, { useState } from 'react';

interface SizeComponentProps {
    size: string;
    selected: boolean 
}

const SizeComponent: React.FC<SizeComponentProps & { onClick: () => void }> = ({ size, selected, onClick }) => {
    return(
        <button onClick={onClick}>
            <div style={{
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            padding: '15px 50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: selected ? '2px solid black' : 'none',  
            }}>
                <p style={{
                    fontSize: '30px',
                    fontFamily: 'Red Hat Display, sans-serif',
                }} className='font-semibold'>{size}</p>
            </div>
        </button>
    )
}
export default SizeComponent