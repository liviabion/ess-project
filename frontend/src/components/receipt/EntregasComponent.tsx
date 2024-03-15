import React from 'react';

interface Pedido {
  nomeUsuario: string;
  nomeProduto: string;
  quantidade: number;
  preco: string;
}

interface Props {
  pedidos: Pedido[];
}

export default function ComprovantePedido({ pedidos }: Props) {    return (
        <div style={{
            backgroundColor: '#FAFAFA',
            minHeight: '100vh',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '600px',
                backgroundColor: '#FFF',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                padding: '20px'
            }}>
                <div style={{
                    backgroundColor: '#9B1127',
                    color: '#FFF',
                    padding: '10px',
                    borderRadius: '5px',
                    marginBottom: '20px',
                    textAlign: 'center'
                }}>
                    <h1 style={{ margin: 0, fontSize: '24px', fontFamily: 'Red Hat Display, sans-serif' }}>Comprovantes de Pedido</h1>
                </div>
                
                {pedidos.map((pedido, index) => (
                    <div key={index} style={{
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '20px',
                        marginBottom: '20px'
                    }}>
                        <div style={{ marginBottom: '10px' }}>
                            <strong>Nome do Usuário:</strong> {pedido.nomeUsuario}
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <strong>Nome do Produto:</strong> {pedido.nomeProduto}
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <strong>Quantidade:</strong> {pedido.quantidade}
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <strong>Preço:</strong> {pedido.preco}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
