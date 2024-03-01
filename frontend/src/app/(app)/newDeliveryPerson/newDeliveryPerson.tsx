'use client'
import React, { useState } from 'react';

// Componente do botão "Adicionar"
function AddButton({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) {
    return (
      <div style={{position: 'fixed', bottom: '20px', right: '20px'}}>
        <button style={{backgroundColor: 'black', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}} onClick={onClick}>
          Adicionar
        </button>
      </div>
    );
  }

export default function DeliveryPerson() {
  const [nomeValue, setNomeValue] = useState(""); // Estado para armazenar o valor do nome
  const [cpfValue, setCpfValue] = useState(""); // Estado para armazenar o valor do CPF
  const [telefoneValue, setTelefoneValue] = useState(""); // Estado para armazenar o valor do telefone
  const [emailValue, setEmailValue] = useState(""); // Estado para armazenar o valor do email

  // Estados para o endereço
  const [ruaValue, setRuaValue] = useState("");
  const [cidadeValue, setCidadeValue] = useState("");
  const [bairroValue, setBairroValue] = useState("");
  const [numeroValue, setNumeroValue] = useState("");
  const [estadoValue, setEstadoValue] = useState("");
  const [complementoValue, setComplementoValue] = useState("");
  const [referenciaValue, setReferenciaValue] = useState("");

  // Estado para controlar a visibilidade dos atributos do endereço
  const [enderecoOpen, setEnderecoOpen] = useState(false);

  // Estado para controlar a visibilidade do pop-up de confirmação
  const [confirmOpen, setConfirmOpen] = useState(false);

  // Função para alternar a visibilidade dos atributos do endereço
  const toggleEndereco = () => {
    setEnderecoOpen(!enderecoOpen);
  };

  // Função para alternar a visibilidade do pop-up de confirmação
  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };

  return (
    <div style={{backgroundColor: '#FCF6F6', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div style={{
        width: '318px',
        height: '27px',
        backgroundColor: 'black',
      }}>
   
      </div> 
      <div style={{padding:'20px'}}>
      <text style={{
        color: '#9B1127',
        fontSize: '40px',
        fontFamily: 'Red Hat Display, sans-serif'
      }}>Entregadores</text>
      </div>
     <div style={{paddingLeft: '30px'}}>
      <div style={{flex: 1}}>
        {/* Div para o nome */}
        <div style={inputContainerStyle}>
          <input 
            type="text" 
            value={nomeValue} 
            onChange={(e) => setNomeValue(e.target.value)} 
            placeholder="Nome" 
            style={inputStyle} 
          />
        </div>

        {/* Div para o CPF */}
        <div style={inputContainerStyle}>
          <input 
            type="text" 
            value={cpfValue} 
            onChange={(e) => setCpfValue(e.target.value)} 
            placeholder="CPF" 
            style={inputStyle} 
          />
        </div>

        {/* Div para o telefone */}
        <div style={inputContainerStyle}>
          <input 
            type="text" 
            value={telefoneValue} 
            onChange={(e) => setTelefoneValue(e.target.value)} 
            placeholder="Telefone" 
            style={inputStyle} 
          />
        </div>

        {/* Div para o email */}
        <div style={inputContainerStyle}>
          <input 
            type="text" 
            value={emailValue} 
            onChange={(e) => setEmailValue(e.target.value)} 
            placeholder="Email" 
            style={inputStyle} 
          />
        </div>

        {/* Div para o endereço */}
        <div 
          style={{...inputContainerStyle, cursor: 'pointer'}} 
          onClick={toggleEndereco}
        >
          <text style={{fontSize:'16px', color: '#9ca3af'}}>Endereço</text>
        </div>

        {/* Div com os atributos do endereço (exibida quando o usuário clica na div de endereço) */}
        {enderecoOpen && (
          <div style={{flexDirection: 'column', width:'400px'}}>
            <input 
              type="text" 
              value={ruaValue} 
              onChange={(e) => setRuaValue(e.target.value)} 
              placeholder="Rua" 
              style={inputStyle} 
            />
            <input 
              type="text" 
              value={cidadeValue} 
              onChange={(e) => setCidadeValue(e.target.value)} 
              placeholder="Cidade" 
              style={inputStyle} 
            />
            <input 
              type="text" 
              value={bairroValue} 
              onChange={(e) => setBairroValue(e.target.value)} 
              placeholder="Bairro" 
              style={inputStyle} 
            />
            <input 
              type="text" 
              value={numeroValue} 
              onChange={(e) => setNumeroValue(e.target.value)} 
              placeholder="Número" 
              style={inputStyle} 
            />
            <input 
              type="text" 
              value={estadoValue} 
              onChange={(e) => setEstadoValue(e.target.value)} 
              placeholder="Estado" 
              style={inputStyle} 
            />
            <input 
              type="text" 
              value={complementoValue} 
              onChange={(e) => setComplementoValue(e.target.value)} 
              placeholder="Complemento" 
              style={inputStyle} 
            />
            <input 
              type="text" 
              value={referenciaValue} 
              onChange={(e) => setReferenciaValue(e.target.value)} 
              placeholder="Referência" 
              style={inputStyle} 
            />
            
          </div>
        )}
        </div> 
      </div>
      {/* Pop-up de confirmação */}
      {confirmOpen && (
        <div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0,0,0,0.5)', textAlign: 'center'}}>
            <p>Tem certeza que quer adicionar?</p>
            <div>
              <button style={{marginRight: '10px'}} onClick={toggleConfirm}>Não</button>
              <button style={{backgroundColor: 'black', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer'}} onClick={toggleConfirm}>Sim</button>
            </div>
          </div>
        </div>
      )}
      <AddButton onClick={toggleConfirm} />
    </div>
  );
}

const inputContainerStyle = {
  backgroundColor: '#FFFFFF',
  width: '400px',
  height: '60px',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  marginBottom: '20px'
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  outline: 'none'
};
