import React, { useState } from 'react';

interface SizeComponentProps {
    size: string; 
}

const SizeComponent: React.FC<SizeComponentProps> = ({ size }) => {
    return(
        <div style={{
           borderRadius: '20px',
           backgroundColor: '#FFFFFF',
           padding: '15px 50px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
        }}>
            <p style={{
                fontSize: '30px',
                fontFamily: 'Red Hat Display, sans-serif',
            }} className='font-semibold'>{size}</p>
        </div>
    )
}
export default SizeComponent