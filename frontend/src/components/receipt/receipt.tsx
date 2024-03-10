// components/receipt/Receipt.tsx
import React from 'react';
import ComprovantePedido from '@/app/(app)/receipt/page'; // Importa o componente ComprovantePedido do arquivo correto

const ReceiptPage: React.FC = () => {
  // Suponha que você tenha dados de pedido disponíveis
  const pedido = {
    nomeUsuario: 'João',
    nomeProduto: 'Produto X',
    quantidade: 2,
    preco: 50.00
  };

  return (
    <div>
      <ComprovantePedido
        nomeUsuario={pedido.nomeUsuario}
        nomeProduto={pedido.nomeProduto}
        quantidade={pedido.quantidade}
        preco={pedido.preco}
      />
    </div>
  );
}

export default ReceiptPage;
