import React from 'react';

export default function ComprovantePedido({ nomeUsuario, nomeProduto, quantidade, preco }) {
    return (
        <div style={{
            backgroundColor: '#FCF6F6',
            minHeight: '100vh',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10%',
            }}>
                <div style={{
                    width: '318px',
                    height: '27px',
                    backgroundColor: 'black'
                }}></div>

                <div style={{
                    padding: '20px',
                }}>
                    <text style={{
                        color: '#9B1127',
                        fontSize: '40px',
                        fontFamily: 'Red Hat Display, sans-serif',
                    }}>Comprovante de Pedido</text>
                </div>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '20px'
                }}>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Nome do Usuário:</strong> {nomeUsuario}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Nome do Produto:</strong> {nomeProduto}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Quantidade:</strong> {quantidade}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Preço:</strong> {preco}
                    </div>
                </div>
            </div>
        </div>
    );
}
