import React, { useState } from 'react';

interface LinkComponentProps {
    itemName: string; 
}


const LinkComponent: React.FC<LinkComponentProps> = ({ itemName }) => {
    return(
        <div style={{
            marginBottom: '30px'
        }}>
            <p style={{
                fontSize: '35px',
                fontFamily: 'Red Hat Display, sans-serif',
            }} className='font-medium'>Avalie seu pedido de "{itemName}" <a style={{textDecoration: 'underline'}}className='font-semibold' href="/avaliacaoCliente">aqui</a></p>
        </div>
    )
}
export default LinkComponent;