'use client'
import React, { useState } from 'react';
import { EntregasComponent, ModalAddPedido, ModalConfirmRemove } from '@/components/receipt/EntregasComponent';

const EntregasPage: React.FC = () => {
  const [entregas, setEntregas] = useState([
    { id: 1, nomeUsuario: 'João', nomeProduto: 'Produto A', quantidade: 2, preco: 50.0, showModal: false },
    { id: 2, nomeUsuario: 'Maria', nomeProduto: 'Produto B', quantidade: 1, preco: 30.0, showModal: false },
    { id: 3, nomeUsuario: 'José', nomeProduto: 'Produto C', quantidade: 3, preco: 40.0, showModal: false },
  ]);

  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleAddProduct = (newProduct: any) => {
    // Verifica se todos os campos do novo produto estão preenchidos
    if (newProduct.nomeUsuario && newProduct.nomeProduto && newProduct.quantidade > 0 && newProduct.preco > 0) {
      // Adiciona o novo produto à lista de entregas
      setEntregas(prevEntregas => [...prevEntregas, { id: Date.now(), ...newProduct, showModal: false }]);
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };
  
  

  const handleRemoveProduct = (index: number) => {
    const updatedEntregas = entregas.filter((entrega) => entrega.id !== entregas[index].id);
    setEntregas(updatedEntregas);
    setShowRemoveModal(false);
  };

  return (
    <div style={{ backgroundColor: '#FCF6F6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ color: '#9B1127', fontSize: '40px', fontFamily: 'Red Hat Display, sans-serif' }}>Entregas</h1>
  
      {/* Botão para adicionar pedido */}
      <button onClick={() => {
        const updatedEntregas = [...entregas];
        updatedEntregas.push({ id: Date.now(), nomeUsuario: '', nomeProduto: '', quantidade: 0, preco: 0, showModal: true });
        setEntregas(updatedEntregas);
      }}>Adicionar Pedido</button>
  
      {/* Lista de entregas */}
      <div>
        {entregas.map((entrega, index) => (
          <div key={entrega.id}>
            <EntregasComponent
              nomeUsuario={entrega.nomeUsuario}
              nomeProduto={entrega.nomeProduto}
              quantidade={entrega.quantidade}
              preco={entrega.preco}
              showModal={entrega.showModal}
              setShowModal={(value: boolean) => {
                const updatedEntregas = [...entregas];
                updatedEntregas[index].showModal = value;
                setEntregas(updatedEntregas);
              }}
              onRemove={() => handleRemoveProduct(index)}
              handleAddProduct={handleAddProduct} // Passando a função handleAddProduct
            />

          </div>
        ))}
      </div>
  
      {/* Modais */}
      <ModalAddPedido
        show={entregas.some(entrega => entrega.showModal)}
        onClose={() => {
          const updatedEntregas = entregas.map(entrega => ({ ...entrega, showModal: false }));
          setEntregas(updatedEntregas);
        }}
        onAdd={(newProduct: any) => {
          handleAddProduct(newProduct);
        }}
        handleAddProduct={handleAddProduct} // Passando a função handleAddProduct
      />





      <ModalConfirmRemove 
        show={showRemoveModal} 
        onClose={() => setShowRemoveModal(false)} 
        onConfirm={() => handleRemoveProduct(entregas.indexOf(selectedProduct))}
      />
    </div>
  );
} 

export default EntregasPage;
