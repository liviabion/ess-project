'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import SearchIcon from './Search.jpg';
import Arrow from './Forward.jpg';
import { useRouter } from 'next/navigation';
import { DeliveryPersonStyles } from './styles';
import { ApiDeliveryPerson } from '@/services/deliveryPerson';

export default function DeliveryPerson() {
  const [showDiv, setShowDiv] = useState(false);
  const [cpfValue, setCpfValue] = useState(""); 
  const [errorPopupOpen, setErrorPopupOpen] = useState(false);
  const [getExample, setGetExample] = useState<any>(null); 
  const [errorType, setErrorType] = useState(""); 
  const [enderecoOpen, setEnderecoOpen] = useState(false);
  const router = useRouter();

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const handleArrowClick = async () => {
    try {
     
      const example = await ApiDeliveryPerson.getExample(cpfValue);
      setGetExample(example);
    } catch (error) {
        setErrorType("Usuario nao encontrado");
        setErrorPopupOpen(true);
    }
  };

  const AddButtonClick = () => {
    router.push("/newDeliveryPerson");
  };
  const EditButtonClick = () => {
    localStorage.setItem('cpfValue', cpfValue);
    router.push("/editDeliveryPerson");
  };
  const toggleEndereco = () => {
    setEnderecoOpen(!enderecoOpen);
  };

  const handleChangeCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setCpfValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  
    if (e.key === 'Enter') {
      handleArrowClick();
    }
  };

  return (
    <div style={DeliveryPersonStyles.container}>
      <div style={DeliveryPersonStyles.navBar}></div>
      <div style={DeliveryPersonStyles.titleContainer}>
        <text style={DeliveryPersonStyles.title}>Entregadores</text>
      </div>
      <div style={DeliveryPersonStyles.inputContainer}>
        <div style={DeliveryPersonStyles.inputWrapper}>
          <text style={DeliveryPersonStyles.inputLabel}>CPF</text>
          <Image
            src={SearchIcon}
            alt="Ícone de pesquisa"
            width={40}
            height={40}
            onClick={toggleDiv}
            style={DeliveryPersonStyles.searchIcon}
          />
        </div>
        {showDiv && (
          <div style={DeliveryPersonStyles.searchDiv}>
            <input
              type="text"
              value={cpfValue}
              onChange={handleChangeCPF} 
              onKeyPress={handleKeyPress} 
              placeholder="Digite o CPF"
              style={DeliveryPersonStyles.input}
            />
            <Image
              src={Arrow}
              alt="Ícone de seta"
              width={40}
              height={40}
              onClick={handleArrowClick} 
              style={DeliveryPersonStyles.searchIcon}
            />
          </div>
        )}
      </div>

      {getExample && (
        <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ padding: '0 25px', marginTop: '20px' }}>
            <div style={{ padding: '5px' }}>
              <text>Nome</text>
            </div>
          </div>
          <div style={DeliveryPersonStyles.searchDiv}>
            <text>{getExample.user.name}</text>
          </div>
          <div style={{ padding: '0 25px' }}>
            <div style={{ padding: '5px' }}>
              <text>Cpf</text>
            </div>
          </div>
          <div style={DeliveryPersonStyles.searchDiv}>
            <text>{getExample.user.cpf}</text>
          </div>
          <div style={{ padding: '0 25px' }}>
            <div style={{ padding: '5px' }}>
              <text>Email</text>
            </div>
          </div>
          <div style={DeliveryPersonStyles.searchDiv}>
            <text>{getExample.user.email}</text>
          </div>
          <div style={{ padding: '0 25px' }}>
            <div style={{ padding: '5px' }}>
              <text>Telefone</text>
            </div>
          </div>
          <div>
            <div style={DeliveryPersonStyles.searchDiv}>
              <text>{getExample.user.phone}</text>
            </div>
          </div>
          {/* Campo de Endereço */}
          <div style={{ padding: '0 25px' }}>
            <div style={{ padding: '5px' }}>
              <text>Endereco</text>
            </div>
          </div>
          <div
            style={{ ...DeliveryPersonStyles.searchDiv, cursor: 'pointer' }}
            onClick={toggleEndereco}
          ></div>
          {/* Detalhes do endereço */}
          {enderecoOpen && (
            <div style={{ marginTop: '10px', backgroundColor: 'white', padding: '10px', borderRadius: '8px', width: '400px', marginLeft:'15px'}}>
              <table>
                <tbody>
                <tr>
                    <td>CEP:</td>
                    <td>{getExample?.address?.postalCode}</td>
                  </tr>
                  <tr>
                    <td>Rua:</td>
                    <td>{getExample?.address?.street}</td>
                  </tr>
                  <tr>
                    <td>Cidade:</td>
                    <td>{getExample?.address?.city}</td>
                  </tr>
                  <tr>
                    <td>Bairro:</td>
                    <td>{getExample?.address?.district}</td>
                  </tr>
                  <tr>
                    <td>Número:</td>
                    <td>{getExample?.address?.number}</td>
                  </tr>
                  <tr>
                    <td>Estado:</td>
                    <td>{getExample?.address?.state}</td>
                  </tr>
                  <tr>
                    <td>Complemento:</td>
                    <td>{getExample?.address?.complement}</td>
                  </tr>
                  <tr>
                    <td>Referência:</td>
                    <td>{getExample?.address?.reference}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

         
        </div>
        
      )} 
      { getExample && (
 <div style={DeliveryPersonStyles.EditButtonContainer}>
 <div style={DeliveryPersonStyles.EditButton}onClick={EditButtonClick}>
   <text style={DeliveryPersonStyles.EditButtonText}>Editar Dados</text>
 </div>
 </div>

      )

      }
      <div style={DeliveryPersonStyles.addButtonContainer}>
        <div style={DeliveryPersonStyles.addButton} onClick={AddButtonClick}>
          <text style={DeliveryPersonStyles.addButtonText}>+</text>
        </div>
      </div>
      {errorPopupOpen && (
        <div style={DeliveryPersonStyles.confirmPopup}>
          <div style={DeliveryPersonStyles.confirmPopupInner}>
            <p>{errorType}</p>
            <button onClick={() => setErrorPopupOpen(false)} style={DeliveryPersonStyles.confirmButton}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}