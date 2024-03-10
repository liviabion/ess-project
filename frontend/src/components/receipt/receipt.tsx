// components/receipt/ComprovantePedido.tsx
import React from 'react';

interface ComprovantePedidoProps {
  nomeUsuario: string;
  nomeProduto: string;
  quantidade: number;
  preco: string;
}

const ComprovantePedido: React.FC<ComprovantePedidoProps> = ({ nomeUsuario, nomeProduto, quantidade, preco }) => {
  return (
    <div className="flex flex-col items-center p-0">
      <div className='flex flex-col m-10' style={{ width: 450, height: 20 }}>
        <div className="flex flex-col items-start">
          <div className="flex flex-row items-start">
            <h1 className="text-36 font-bold pr-4 ">Comprovante de Pedido</h1>
          </div>
          <div className="flex flex-row items-start">
            <strong>Nome do Usuário:</strong> {nomeUsuario}
          </div>
          <div className="flex flex-row items-start">
            <strong>Nome do Produto:</strong> {nomeProduto}
          </div>
          <div className="flex flex-row items-start">
            <strong>Quantidade:</strong> {quantidade}
          </div>
          <div className="flex flex-row items-start">
            <strong>Preço:</strong> {preco}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComprovantePedido;

// pages/receipt.tsx

import React from 'react';
import ComprovantePedido from '@/components/receipt/ComprovantePedido';

const ReceiptPage: React.FC = () => {
  // Suponha que você tenha dados de pedido disponíveis
  const pedido = {
    nomeUsuario: 'João',
    nomeProduto: 'Produto X',
    quantidade: 2,
    preco: 'R$ 50,00'
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
