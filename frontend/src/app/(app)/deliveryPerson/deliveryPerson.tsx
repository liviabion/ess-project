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
  const [cpfValue, setCpfValue] = useState(""); // Estado para armazenar o valor do CPF
  const [getExample, setGetExample] = useState<any>(null); // Estado para armazenar os dados obtidos
  const [enderecoOpen, setEnderecoOpen] = useState(false);
  const router = useRouter();

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const handleArrowClick = async () => {
    try {
      // Chamamos a função para obter os dados somente quando a seta é clicada
      const example = await ApiDeliveryPerson.getExample(cpfValue);
      setGetExample(example);
    } catch (error) {
      console.error("Erro ao obter informações do entregador:", error);
    }
  };

  const handleButtonClick = () => {
    router.push("/newDeliveryPerson");
  };

  const toggleEndereco = () => {
    setEnderecoOpen(!enderecoOpen);
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
              onChange={(e) => setCpfValue(e.target.value)}
              placeholder="Digite o CPF"
              style={DeliveryPersonStyles.input}
            />
            <Image
              src={Arrow}
              alt="Ícone de seta"
              width={40}
              height={40}
              onClick={handleArrowClick} // A função handleArrowClick será chamada apenas quando a seta for clicada
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
            <text>{getExample.nome}</text>
           
          </div>
          <div style={{ padding: '0 25px' }}>
            <div style={{ padding: '5px' }}>
              <text>Cpf</text>
            </div>
          </div>
          <div style={DeliveryPersonStyles.searchDiv}>
            <text>{getExample.cpf}</text>
          </div>
          <div style={{ padding: '0 25px' }}>
            <div style={{ padding: '5px' }}>
              <text>Email</text>
            </div>
          </div>
          <div style={DeliveryPersonStyles.searchDiv}>
            <text>{getExample.email}</text>
          </div>
          <div style={{ padding: '0 25px' }}>
            <div style={{ padding: '5px' }}>
              <text>Telefone</text>
            </div>
          </div>
          <div >
            <div style={DeliveryPersonStyles.searchDiv}>
              <text>{getExample.telefone}</text>
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
                    <td>Rua:</td>
                    <td>{getExample?.enderecoData?.street}</td>
                  </tr>
                  <tr>
                    <td>Cidade:</td>
                    <td>{getExample?.enderecoData?.city}</td>
                  </tr>
                  <tr>
                    <td>Bairro:</td>
                    <td>{getExample?.enderecoData?.district}</td>
                  </tr>
                  <tr>
                    <td>Número:</td>
                    <td>{getExample?.enderecoData?.number}</td>
                  </tr>
                  <tr>
                    <td>Estado:</td>
                    <td>{getExample?.enderecoData?.state}</td>
                  </tr>
                  <tr>
                    <td>Complemento:</td>
                    <td>{getExample?.enderecoData?.complement}</td>
                  </tr>
                  <tr>
                    <td>Referência:</td>
                    <td>{getExample?.enderecoData?.reference}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
      <div style={DeliveryPersonStyles.addButtonContainer}>
        <div style={DeliveryPersonStyles.addButton} onClick={handleButtonClick}>
          <text style={DeliveryPersonStyles.addButtonText}>+</text>
        </div>
      </div>
    </div>
  );
}