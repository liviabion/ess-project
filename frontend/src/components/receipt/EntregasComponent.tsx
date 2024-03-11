'use client'
import React, { useState } from 'react';
import { Input } from "@nextui-org/react";
import { Button } from "@/components/ui/button";

interface EntregaProps {
  nomeUsuario: string;
  nomeProduto: string;
  quantidade: number;
  preco: number;
  showModal: boolean; // Adicione esta propriedade ao tipo EntregaProps
  setShowModal: (value: boolean) => void; // Adicione esta propriedade ao tipo EntregaProps
  onRemove: () => void;
  handleAddProduct: (newProduct: any) => void;
}

const EntregasComponent: React.FC<EntregaProps> = ({ nomeUsuario, nomeProduto, quantidade, preco, onRemove }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div className="flex flex-col items-center pb-5">
      <div style={{ borderRadius: 10, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', width: '30%', margin: '10px' }}>
        <div className='flex flex-row m-10 justify-between' style={{ width: '100%', height: 'auto' }}>
          <div className="flex flex-col items-start ">
            <div className="flex flex-row items-start">
              <h1 className="text-36 font-bold pr-4 ">{nomeProduto}</h1>
            </div>
            <h2>Nome do Usuário: {nomeUsuario}</h2>
            <h2>Quantidade: {quantidade}</h2>
            <h2>Preço: {preco}</h2>
          </div>
          <div className='flex flex-col items-end pt-2'>
            {/* Botão para remover produto com estilo ajustado */}
            <button onClick={onRemove} style={{ alignSelf: 'flex-start' }}>Remover Produto</button>
          </div>
        </div>
      </div>
    </div>
  );
};







interface ModalConfirmRemoveProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const ModalConfirmRemove: React.FC<ModalConfirmRemoveProps> = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Confirmar Remoção</h2>
        <p>Deseja realmente remover este produto?</p>
        <button onClick={onConfirm}>Sim</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

interface ModalAddPedidoProps {
  show: boolean;
  onClose: () => void;
  onAdd: (newProduct: any) => void;
  handleAddProduct: (newProduct: any) => void;
}

const ModalAddPedido: React.FC<ModalAddPedidoProps> = ({ show, onClose, onAdd}) => {
  const [newProduct, setNewProduct] = useState({
    nomeUsuario: '',
    nomeProduto: '',
    quantidade: 0,
    preco: 0
  });

  const handleAddProduct = (newProduct: any) => {
    // Validar os campos antes de adicionar o pedido
    if (newProduct.nomeUsuario && newProduct.nomeProduto && newProduct.quantidade > 0 && newProduct.preco > 0) {
      console.log("Novo produto:", newProduct);
      // Chamada para a função onAdd para adicionar o novo produto
      onAdd({ ...newProduct });
      // Limpar os campos e fechar o modal
      setNewProduct({
        nomeUsuario: '',
        nomeProduto: '',
        quantidade: 0,
        preco: 0
      });
      onClose();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };
  
  
  

  return (
    <>
      {show && (
        <div>
          <div className='fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50' onClick={onClose}></div>
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-5 rounded-md' style={{ height: 400, width: 500 }}>
            <div className='flex flex-col items-start justify-start pl-0 pt-5'>
              <Input
                placeholder="Nome do Produto"
                value={newProduct.nomeProduto}
                onChange={(e) => setNewProduct({ ...newProduct, nomeProduto: e.target.value })}
              />
              <Input
                placeholder="Nome do Usuário"
                value={newProduct.nomeUsuario}
                onChange={(e) => setNewProduct({ ...newProduct, nomeUsuario: e.target.value })}
              />
              <Input
                placeholder="Quantidade"
                type="number"
                value={newProduct.quantidade === 0 ? '' : newProduct.quantidade.toString()}
                onChange={(e) => setNewProduct({ ...newProduct, quantidade: e.target.value !== '' ? Number(e.target.value) : 0 })}
              />
              <Input
                placeholder="Preço"
                type="number"
                value={newProduct.preco === 0 ? '' : newProduct.preco.toString()}
                onChange={(e) => setNewProduct({ ...newProduct, preco: e.target.value !== '' ? Number(e.target.value) : 0 })}
              />

              <div className='flex flex-row justify-between' style={{ width: 450 }}>
                <Button onClick={() => handleAddProduct(newProduct)}>Adicionar</Button>
                <Button onClick={onClose}>Cancelar</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { EntregasComponent, ModalConfirmRemove, ModalAddPedido };
