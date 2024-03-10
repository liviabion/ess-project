import React from 'react';


// Componente para exibir um item específico do comprovante
const ReceiptItem: React.FC<{ nomeProduto: string; quantidade: number; preco: number }> = ({
  nomeProduto,
  quantidade,
  preco,
}) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <strong>Produto:</strong> {nomeProduto} ({quantidade} unidade(s)) - R${preco.toFixed(2)}
    </div>
  );
};

// Componente principal para o comprovante de pedido
const ComprovantePedido: React.FC<{
  nomeUsuario: string;
  nomeProduto: string;
  quantidade: number;
  preco: number;
}> = ({ nomeUsuario, nomeProduto, quantidade, preco }) => {
  return (
    <div style={{ backgroundColor: '#FCF6F6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '80%', display: 'flex', flexDirection: 'column', marginLeft: '10%' }}>
        <div style={{ width: '318px', height: '27px', backgroundColor: 'black' }}></div>

        <div style={{ padding: '20px' }}>
          <h1 style={{ color: '#9B1127', fontSize: '40px', fontFamily: 'Red Hat Display, sans-serif' }}>
            Comprovante de Pedido
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <strong>Nome do Usuário:</strong> {nomeUsuario}
          </div>
          <ReceiptItem nomeProduto={nomeProduto} quantidade={quantidade} preco={preco} />
        </div>
      </div>
    </div>
  );
};

// Exemplo de uso
const ReceiptPage: React.FC = () => {
  const pedido = {
    nomeUsuario: 'João',
    nomeProduto: 'Produto A',
    quantidade: 2,
    preco: 50.0,
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
};

export default ReceiptPage;
