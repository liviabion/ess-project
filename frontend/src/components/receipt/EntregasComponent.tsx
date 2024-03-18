import React from 'react';

interface Pedido {
  nomeUsuario: string;
  nomeProduto: string;
  quantidade: number;
  preco: number;
}

interface Props {
  pedidos: Pedido[];
}

export default function ComprovantePedido({ pedidos }: Props) {
  return (
    <div style={{
      backgroundColor: '#FCF6F6',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px'
    }}>
      <h1 style={{
        color: '#9B1127',
        fontSize: '40px',
        fontFamily: 'Red Hat Display, sans-serif',
        marginBottom: '20px'
      }}>Comprovantes de Pedido</h1>
      {pedidos.map((pedido, index) => (
        <div key={index} style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '5px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          marginBottom: '20px',
          width: '80%',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
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
  );
}
