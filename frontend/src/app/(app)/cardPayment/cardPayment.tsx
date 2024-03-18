'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CardPaymentStyles } from './styles';
import { ApiCardPayment } from '@/services/cardPayment';
import { number, string } from 'zod';
import Credit_card from './credit-card.png'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const id = '2'

export default function CardPayment() {
  const [cardIdValue, setcardIdValue] = useState(""); 
  const [getExample, setGetExample] = useState<ApiCardPayment.CardPayment[] | null>(null); 
  const router = useRouter();

  const [confirmOpen, setConfirmOpen] = useState(false);

  const showCards = async () =>{
    try{
      const examples = await ApiCardPayment.getExample(id)
      console.log(examples)
      setGetExample(examples)
    } catch (error){
      alert('Não há cartões cadastrados')
    }

  };

  const toggleConfirm = () => {
    setConfirmOpen(!confirmOpen);
  };

  const AddButtonClick = () => {
    router.push("/newCardPayment");
  };

  const RemoveButtonClick = async () => {
    localStorage.setItem('cardIdValue', (cardIdValue).toString());
    toggleConfirm()
  };

  const handleConfirmYes = async () => {
    toggleConfirm(); // Fecha o popup de confirmação
    // Prepara os dados para enviar para o backend
    try {
      const response = await ApiCardPayment.removeExample(cardIdValue.toString());
      console.log("Cartão removido com sucesso!", response);
      alert("Cartão removido com sucesso!");
      window.location.reload()
    } catch (error) {
    };
    }
    console.log('123')

    useEffect(() => {
      showCards()
    }, [])

  return (
    <div style={CardPaymentStyles.container}>
      <div style={CardPaymentStyles.navBar}></div>
      <div style={CardPaymentStyles.titleContainer}>
        <p style={CardPaymentStyles.title}>Cartões de crédito</p>
      </div>

    { getExample && (
      <RadioGroup defaultValue={cardIdValue} onValueChange={setcardIdValue}>
      {
        getExample.map(card => {
          return (<div className="flex items-center space-x-2">
          <RadioGroupItem value={card.card_id} id={card.card_id} />
          <label htmlFor={card.card_id}>
            <div style={{display: 'flex', gap: 16, alignItems: 'center'}}>
              <Image src={'/credit-card.png'} alt='Cartao de credito' width={100} height={100}/>
              <p style={{fontWeight: '700'}}>{card.card_number}</p>
              <p style={{fontWeight: '700', backgroundColor: '#bb5c6b', borderRadius: 20, padding: '4px 8px'}}>{card.type}</p>
            </div>
            </label>
        </div>)
        })
      }
    </RadioGroup>    
    )}

      { getExample && (
    <div style={CardPaymentStyles.EditButtonContainer}>
      <div style={CardPaymentStyles.EditButton}onClick={RemoveButtonClick}>
        <text style={CardPaymentStyles.EditButtonText}>Remover cartão</text>
      </div>
    </div>)
      }

    {confirmOpen && (
      <div style={CardPaymentStyles.confirmPopup}>
        <div style={CardPaymentStyles.confirmPopupInner}>
          <p>Tem certeza que quer remover?</p>
          <div>
            <button onClick={toggleConfirm} style={CardPaymentStyles.confirmButton}>Não</button>
            <button onClick={handleConfirmYes} style={CardPaymentStyles.confirmButton}>Sim</button>
          </div>
        </div>
      </div>
    )} 

    <div style={CardPaymentStyles.addButtonContainer}>
        <button style={CardPaymentStyles.addButton} onClick={AddButtonClick}>
          <text style={CardPaymentStyles.addButtonText}>+</text>
        </button>
      </div>

    </div>
  );
}
