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
  const [successPopupOpen, setSuccessPopupOpen] = useState(false);
  const [errorPopupOpen, setErrorPopupOpen] = useState(false);
  const [errorType, setErrorType] = useState(""); // Nova variável para armazenar o tipo de erro

  const toggleEndereco = () => {
    setEnderecoOpen(!enderecoOpen);
  };

  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };

  const handleAddButtonClick = async () => {
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
    toggleConfirm();
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
      setDeliveryPersonCreated(true);
      setSuccessPopupOpen(true);
    } catch (error) {
      if (error.response.data.message === 'This cpf is already registered') {
        setErrorType("Esse CPF ja foi registrado");
        setErrorPopupOpen(true);
      } else if (error.response.data.message === 'This email is already registered') {
        setErrorType("Esse Email ja foi registrado");
        setErrorPopupOpen(true);
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
          <div style={NewDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={nomeValue}
              onChange={(e) => setNomeValue(e.target.value)}
              placeholder="Nome"
              style={NewDeliveryPersonStyles.inputStyle}
              aria-label='nome'
            />
          </div>
          <div style={NewDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={cpfValue}
              onChange={(e) => setCpfValue(e.target.value)}
              placeholder="CPF"
              style={NewDeliveryPersonStyles.inputStyle}
              aria-label='cpf'
            />
          </div>
          <div style={NewDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={telefoneValue}
              onChange={(e) => setTelefoneValue(e.target.value)}
              placeholder="Telefone"
              style={NewDeliveryPersonStyles.inputStyle}
              aria-label='telefone'
            />
          </div>
          <div style={NewDeliveryPersonStyles.inputContainer}>
            <input
              type="text"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Email"
              style={NewDeliveryPersonStyles.inputStyle}
              aria-label='email'
            />
          </div>
          <div
            style={{ ...NewDeliveryPersonStyles.inputContainer, cursor: 'pointer' }}
            onClick={toggleEndereco}
          >
            <text style={{ fontSize: '16px', color: '#9ca3af' }}>Endereço</text>
          </div>
          {enderecoOpen && (
            <div style={{ flexDirection: 'column', width: '400px' }}>
              <input
                type="text"
                value={enderecoData.postalCode}
                onChange={(e) => setEnderecoData({ ...enderecoData, postalCode: e.target.value })}
                placeholder="CEP"
                style={NewDeliveryPersonStyles.inputStyle}
                aria-label='cep'
              />
              <input
                type="text"
                value={enderecoData.street}
                onChange={(e) => setEnderecoData({ ...enderecoData, street: e.target.value })}
                placeholder="Rua"
                style={NewDeliveryPersonStyles.inputStyle}
                aria-label='rua'
              />
              <input
                type="text"
                value={enderecoData.city}
                onChange={(e) => setEnderecoData({ ...enderecoData, city: e.target.value })}
                placeholder="Cidade"
                style={NewDeliveryPersonStyles.inputStyle}
                aria-label='cidade'
              />
              <input
                type="text"
                value={enderecoData.district}
                onChange={(e) => setEnderecoData({ ...enderecoData, district: e.target.value })}
                placeholder="Bairro"
                style={NewDeliveryPersonStyles.inputStyle}
                aria-label='bairro'
              />
              <input
                type="text"
                value={enderecoData.number}
                onChange={(e) => setEnderecoData({ ...enderecoData, number: e.target.value })}
                placeholder="Número"
                style={NewDeliveryPersonStyles.inputStyle}
                aria-label='numero'
              />
              <input
                type="text"
                value={enderecoData.state}
                onChange={(e) => setEnderecoData({ ...enderecoData, state: e.target.value })}
                placeholder="Estado"
                style={NewDeliveryPersonStyles.inputStyle}
                aria-label='estado'
              />
              <input
                type="text"
                value={enderecoData.complement}
                onChange={(e) => setEnderecoData({ ...enderecoData, complement: e.target.value })}
                placeholder="Complemento"
                style={NewDeliveryPersonStyles.inputStyle}
                aria-label='complemento'
              />
              <input
                type="text"
                value={enderecoData.reference}
                onChange={(e) => setEnderecoData({ ...enderecoData, reference: e.target.value })}
                placeholder="Referência"
                style={NewDeliveryPersonStyles.inputStyle}
                aria-label='referencia'
              />
            </div>
          )}
        </div>
      </div>

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

      {successPopupOpen && (
        <div style={NewDeliveryPersonStyles.confirmPopup}>
          <div style={NewDeliveryPersonStyles.confirmPopupInner}>
            <p>Entregador cadastrado com sucesso</p>
            <button onClick={() => setSuccessPopupOpen(false)} style={NewDeliveryPersonStyles.confirmButton}>OK</button>
          </div>
        </div>
      )}

      {errorPopupOpen && (
        <div style={NewDeliveryPersonStyles.confirmPopup}>
          <div style={NewDeliveryPersonStyles.confirmPopupInner}>
            <p>{`Ocorreu um erro ao cadastrar o entregador (${errorType})`}</p>
            <button onClick={() => setErrorPopupOpen(false)} style={NewDeliveryPersonStyles.confirmButton}>OK</button>
          </div>
        </div>
      )}

      <AddButton onClick={handleAddButtonClick} />
    </div>
  );
}