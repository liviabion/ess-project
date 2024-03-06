'use client'
import React, { useState } from 'react';
import { NewDeliveryPersonStyles } from './styles';
import AddButton from './ButtonAdd';
import { ApiDeliveryPerson } from '@/services/deliveryPerson'; // Importe ApiDeliveryPerson

export default function DeliveryPerson() {
  const [nomeValue, setNomeValue] = useState("");
  const [cpfValue, setCpfValue] = useState("");
  const [telefoneValue, setTelefoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [ruaValue, setRuaValue] = useState("");
  const [cidadeValue, setCidadeValue] = useState("");
  const [bairroValue, setBairroValue] = useState("");
  const [numeroValue, setNumeroValue] = useState("");
  const [estadoValue, setEstadoValue] = useState("");
  const [complementoValue, setComplementoValue] = useState("");
  const [referenciaValue, setReferenciaValue] = useState("");
  const [enderecoOpen, setEnderecoOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [enderecoData, setEnderecoData] = useState({
    postalCode: "",
    street: "",
    number: "",
    district: "",
    state: "",
    city: "",
    complement: "",
    reference: ""
  });
  const [deliveryPersonCreated, setDeliveryPersonCreated] = useState(false);

  const toggleEndereco = () => {
    setEnderecoOpen(!enderecoOpen);
  };

  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen); // Altera o estado confirmOpen para o oposto do valor atual
  };

  const handleAddButtonClick = () => {
    // Verifica se algum campo obrigatório está vazio antes de abrir o popup de confirmação
    if (
      nomeValue.trim() === "" ||
      cpfValue.trim() === "" ||
      telefoneValue.trim() === "" ||
      emailValue.trim() === "" ||
      enderecoData.postalCode.trim() === "" ||
      enderecoData.street.trim() === "" ||
      enderecoData.city.trim() === "" ||
      enderecoData.district.trim() === "" ||
      enderecoData.number.trim() === "" ||
      enderecoData.state.trim() === "" ||
      enderecoData.reference.trim() === ""
    ) {
      alert("Preencha todos os campos antes de adicionar.");
    } else {
      toggleConfirm();
    }
  };

  const handleConfirmYes = async () => {
    toggleConfirm(); // Fecha o popup de confirmação
    // Prepara os dados para enviar para o backend
    const data = {
      deliveryPersonData: {
        name: nomeValue,
        cpf: cpfValue,
        email: emailValue,
        phone: telefoneValue,
        status: "active"
      },
      addressData: {
        ...enderecoData
      }
    };
    try {
      const response = await ApiDeliveryPerson.createExample(data);
      console.log("Informações enviadas com sucesso!", response);
      alert("Entregador cadastrado com sucesso!");
      setDeliveryPersonCreated(true); 
    } catch (error) {
      if(error.response.data.message=='This cpf is already registered'){
        alert('Esse cpf ja esta cadastrado');
      }
     
    
    if(error.response.data.message=='This email is already registered'){
      alert('Esse email ja esta cadastrado')
    }
  }
  };
  

  return (
    <div style={NewDeliveryPersonStyles.container}>
      <div style={NewDeliveryPersonStyles.navBar}></div>
      <div style={NewDeliveryPersonStyles.titleContainer}>
        <text style={NewDeliveryPersonStyles.title}>Entregadores</text>
      </div>
      <div style={{ paddingLeft: '30px' }}>
        <div style={{ flex: 1 }}>
          {/* Nome */}
          <div style={NewDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={nomeValue}
              onChange={(e) => setNomeValue(e.target.value)}
              placeholder="Nome"
              style={NewDeliveryPersonStyles.inputStyle}
            />
          </div>

          {/* CPF */}
          <div style={NewDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={cpfValue}
              onChange={(e) => setCpfValue(e.target.value)}
              placeholder="CPF"
              style={NewDeliveryPersonStyles.inputStyle}
            />
          </div>

          {/* Telefone */}
          <div style={NewDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={telefoneValue}
              onChange={(e) => setTelefoneValue(e.target.value)}
              placeholder="Telefone"
              style={NewDeliveryPersonStyles.inputStyle}
            />
          </div>

          {/* Email */}
          <div style={NewDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Email"
              style={NewDeliveryPersonStyles.inputStyle}
            />
          </div>

          {/* Endereço */}
          <div
            style={{ ...NewDeliveryPersonStyles.inputContainer, cursor: 'pointer' }}
            onClick={toggleEndereco}
          >
            <text style={{ fontSize: '16px', color: '#9ca3af' }}>Endereço</text>
          </div>

          {/* Campos de endereço */}
          {enderecoOpen && (
            <div style={{ flexDirection: 'column', width: '400px' }}>
                 <input
                type="text"
                value={enderecoData.postalCode}
                onChange={(e) => setEnderecoData({ ...enderecoData, postalCode: e.target.value })}
                placeholder="CEP"
                style={NewDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.street}
                onChange={(e) => setEnderecoData({ ...enderecoData, street: e.target.value })}
                placeholder="Rua"
                style={NewDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.city}
                onChange={(e) => setEnderecoData({ ...enderecoData, city: e.target.value })}
                placeholder="Cidade"
                style={NewDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.district}
                onChange={(e) => setEnderecoData({ ...enderecoData, district: e.target.value })}
                placeholder="Bairro"
                style={NewDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.number}
                onChange={(e) => setEnderecoData({ ...enderecoData, number: e.target.value })}
                placeholder="Número"
                style={NewDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.state}
                onChange={(e) => setEnderecoData({ ...enderecoData, state: e.target.value })}
                placeholder="Estado"
                style={NewDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.complement}
                onChange={(e) => setEnderecoData({ ...enderecoData, complement: e.target.value })}
                placeholder="Complemento"
                style={NewDeliveryPersonStyles.inputStyle}
              />
              <input
                type="text"
                value={enderecoData.reference}
                onChange={(e) => setEnderecoData({ ...enderecoData, reference: e.target.value })}
                placeholder="Referência"
                style={NewDeliveryPersonStyles.inputStyle}
              />
            </div>
          )}
        </div>
      </div>

      {/* Pop-up de confirmação */}
      {confirmOpen && (
        <div style={NewDeliveryPersonStyles.confirmPopup}>
          <div style={NewDeliveryPersonStyles.confirmPopupInner}>
            <p>Tem certeza que quer adicionar?</p>
            <div>
              <button onClick={toggleConfirm} style={NewDeliveryPersonStyles.confirmButton}>Não</button>
              <button onClick={handleConfirmYes} style={NewDeliveryPersonStyles.confirmButton}>Sim</button>
            </div>
          </div>
        </div>
      )}

      {/* Mensagem "Entregador Criado" */}
   

      {/* Botão Adicionar */}
      <AddButton onClick={handleAddButtonClick} />
    </div>
  );
}