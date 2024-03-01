'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Importando a tag Image do Next.js
import SearchIcon from './Search.jpg'; // Importando o ícone
import { useRouter } from 'next/navigation'
export default function DeliveryPerson() {
  const [showDiv, setShowDiv] = useState(false); // Estado para controlar a visibilidade da div branca
  const [cpfValue, setCpfValue] = useState(""); // Estado para armazenar o valor do CPF

  // Função para alternar a visibilidade da div branca
  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  // Função para lidar com a mudança no valor do input do CPF
  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpfValue(event.target.value);
  };
  const router  = useRouter();
  const handleButtonClick = () => {
    router.push("/newDeliveryPerson"); 
  };
  return (
    <div style={{
      backgroundColor: '#FCF6F6',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        width: '318px',
        height: '27px',
        backgroundColor: 'black',
      }}></div>
      <text style={{
        color: '#9B1127',
        fontSize: '40px',
        fontFamily: 'Red Hat Display, sans-serif'
      }}>Entregadores</text>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        margin: '20px',
      }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          width: '200px',
          height: '60px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px'
        }}>
          <text style={{fontSize:'32px'}}>CPF</text>
          <Image 
            src={SearchIcon} 
            alt="Ícone de pesquisa" 
            width={40} 
            height={40} 
            onClick={toggleDiv} 
            style={{ cursor: 'pointer' }} 
          /> 
        </div>
        {showDiv && (
          <div style={{
            backgroundColor: '#FFFFFF',
            width: '400px',
            height: '60px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 40px',
            marginLeft: '20px', // Ajuste de margem para posicionar abaixo da div de CPF
          }}>
            <input 
              type="text" 
              value={cpfValue} 
              onChange={handleCpfChange} 
              placeholder="Digite o CPF" 
              style={{ 
                width: '100%', 
                padding: '8px', 
                outline: 'none' 
              }} 
            />
          </div>
        )}
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: '20px', 
      }}>
        <div style={{
          backgroundColor: '#9B1127',
          width: '100px',
          height: '50px', // Ajuste de altura para igualar com a altura da div de CPF
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} onClick={handleButtonClick}>
          <text style={{color:'white', fontSize:'40px', marginBottom:'10px'}}>+</text>
        </div>
      </div>
    </div>
  );
}