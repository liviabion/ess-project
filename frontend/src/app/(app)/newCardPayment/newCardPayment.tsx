'use client'
import React, { useState } from 'react';
import { NewCardPaymentStyles } from './styles';
import AddButton from './ButtonAdd';
import { ApiCardPayment } from '@/services/cardPayment'; // Importe ApiDeliveryPerson
import { card } from '@nextui-org/react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRouter } from 'next/navigation';

export default function DeliveryPerson() {
  const [cardNumberValue, setCardNumberValue] = useState("");
  const [cvvValue, setCvvValue] = useState(0);
  const [expireDateValue, setExpireDateValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  const [confirmOpen, setConfirmOpen] = useState(false);
  const router = useRouter();
  
  const [deliveryPersonCreated, setDeliveryPersonCreated] = useState(false);

  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen); // Altera o estado confirmOpen para o oposto do valor atual
  };

  const handleAddButtonClick = () => {
    // Verifica se algum campo obrigatório está vazio antes de abrir o popup de confirmação
    if (
      cardNumberValue.trim() === "" ||
      cvvValue.toString().trim() === "" ||
      expireDateValue.trim() === "" ||
      nameValue.trim() === "" ||
      passwordValue.trim() === "" ||
      typeValue.trim() === "" 
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
      cardCreatedData: 
        {
          card_number: cardNumberValue,
          cvv: cvvValue,
          expire_date: new Date(expireDateValue),
          name: nameValue,
          password: passwordValue,
          type: typeValue
      },
      User_id: 2
    };

    try {
      const response = await ApiCardPayment.createExample(data);
      console.log("Informações enviadas com sucesso!", response);
      alert("Cartão cadastrado com sucesso!");
      setDeliveryPersonCreated(true); 
      router.push("/cardPayment")
  } catch (error) {
      if(error.response.data.message=='This card is already registered'){
        alert('Esse cartão já está cadastrado');
      }
      if(error.response.data.message=='Fields invalid'){
        alert('Preencha todos os campos corretamente');
      }
    }
  };
  

  
  return (
    <div style={NewCardPaymentStyles.container}>
      <div style={NewCardPaymentStyles.navBar}></div>
      <div style={NewCardPaymentStyles.titleContainer}>
        <text style={NewCardPaymentStyles.title}>Cartões</text>
      </div>
      <div style={{ paddingLeft: '30px' }}>
        <div style={{ flex: 1 }}>
          {/* Número do cartão */}
          <div style={NewCardPaymentStyles.inputContainer}>
            <input
              type="text"
              value={cardNumberValue}
              onChange={(e) => setCardNumberValue(e.target.value)}
              placeholder="Número do cartão"
              style={NewCardPaymentStyles.inputStyle}
            />
          </div>

          {/* CVV */}
          <div style={NewCardPaymentStyles.inputContainer}>
            <input
              type="text"
              value={cvvValue}
              onChange={(e) => setCvvValue(Number(e.target.value))}
              placeholder="CVV"
              style={NewCardPaymentStyles.inputStyle}
            />
          </div>

          {/* Telefone */}
          <div style={NewCardPaymentStyles.inputContainer}>
            <input
              type="text"
              value={expireDateValue}
              onChange={(e) => setExpireDateValue(e.target.value)}
              placeholder="Data de validade"
              style={NewCardPaymentStyles.inputStyle}
            />
          </div>

          {/* Email */}
          <div style={NewCardPaymentStyles.inputContainer}>
            <input
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Nome"
              style={NewCardPaymentStyles.inputStyle}
            />
          </div>

          <div style={NewCardPaymentStyles.inputContainer}>
            <input
              type="text"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              placeholder="Senha"
              style={NewCardPaymentStyles.inputStyle}
            />
          </div>

          <div style={NewCardPaymentStyles.inputContainer}>
            <RadioGroup defaultValue={typeValue} onValueChange={setTypeValue}>
          <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit" id="credit" />
                <label htmlFor="credit">Credit</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="debit" id="debit" />
                <label htmlFor="debit">Debit</label>
              </div>
            </RadioGroup>
          </div>
      </div>

      {/* Pop-up de confirmação */}
      {confirmOpen && (
        <div style={NewCardPaymentStyles.confirmPopup}>
          <div style={NewCardPaymentStyles.confirmPopupInner}>
            <p>Tem certeza que quer adicionar?</p>
            <div>
              <button onClick={toggleConfirm} style={NewCardPaymentStyles.confirmButton}>Não</button>
              <button onClick={handleConfirmYes} style={NewCardPaymentStyles.confirmButton}>Sim</button>
            </div>
          </div>
        </div>
      )}

      {/* Mensagem "Entregador Criado" */}
   

      {/* Botão Adicionar */}
      <AddButton onClick={handleAddButtonClick} />
    </div>
  </div>
  );
}