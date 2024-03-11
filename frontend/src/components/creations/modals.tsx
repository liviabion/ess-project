import React, { use, useState } from "react";
import { ItensStyles } from "./styles";
import {
  Pencil,
  Trash,
  Check,
} from "./assets";

import { ApiItens } from "@/services/itens";
import { useForm, SubmitHandler, Form } from 'react-hook-form';


const Modal = ({ item }: { item: any }) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => {
      setIsEditing(!isEditing);
    }; 
    console.log(item); 
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmDelete, setDeletepen] = useState(false);

    const toggleConfirm = () => {
      setConfirmOpen(!confirmOpen); // Altera o estado confirmOpen para o oposto do valor atual
      setDeletepen(false); // Fecha o popup de confirmação
    };
  
    const toggle2Confirm = () => {
      setDeletepen(!confirmDelete); // Altera o estado confirmOpen para o oposto do valor atual
      setConfirmOpen(false); // Fecha o popup de confirmação
    };
  
    const handleDeleteButtonClick = () => {
      toggle2Confirm(); // Chama a função toggleConfirm quando o botão Add é clicado
    };
    type FormData = {
      id: number;
      name?: string;
      price?: number;
      category?: string;
      description?: string;
      image?: string;
      colors?: string;
      sizes?: string;
      amount?: number;
    }
    const { register, handleSubmit, setValue } = useForm<FormData>({
      defaultValues: {
         id: item.id, // Inicializa o campo 'id' com o ID do item
      },
     });
     const handleConfirm2: SubmitHandler<FormData> = async (data) => {
      // Atualiza o valor do campo 'id' com o ID atual do item
      setValue('id', item.id);

      console.log("entrou",data);

      const priceAsFloat = data.price ? parseFloat(String(data.price)) : undefined;
      const amountAsFloat = data.amount ? parseFloat(String(data.amount)) : undefined;
      
      
      const newData = { ...data, price: priceAsFloat, amount: amountAsFloat};
      console.log("alterado",newData);
     
      toggleConfirm(); 
      try {
        // Chama a função createExample de ApiDeliveryPerson para enviar os dados para o backend
        await ApiItens.updateUser(data.id,newData);
        console.log("Informações alteradas com sucesso!");
        alert("Item alterado com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar informações para o backend:", error);
      }
      window.location.reload();
    };

    const handleDelete = async (id:number) => {
      try {
        await ApiItens.deleteExample(id);
        console.log("Item excluído");
        alert("Item excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar informações para o backend:", error);
      }
      window.location.reload();
    };

  return (
    <div
    id="descricao"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <div style={ItensStyles.inputContainer}>
      <form onSubmit={handleSubmit(handleConfirm2)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2%",
          marginRight: "3%",
          marginTop: "3%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3 style={ItensStyles.infosStyle}>Nome da peça:</h3>
          <input {...register("name")}
            placeholder={item.name}
            style={{
              ...ItensStyles.inputBox,
              height: "65%",
              marginLeft: "2%",
            }}
            disabled={!isEditing}
          ></input>
        </div>
        <img
          src={Pencil.src}
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
          onClick={toggleEditing}
          alt="Editar"
        />
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Preço:</p>
        <input {...register("price")}
        placeholder={item.price}
        style={ItensStyles.inputBox}
        disabled={!isEditing}
      ></input>
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Quantidade:</p>
        <input {...register("amount")}
          placeholder={item.amount}
          style={ItensStyles.inputBox}
          disabled={!isEditing}
        ></input>
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Tamanhos:</p>
        <input {...register("sizes")}
          placeholder={item.sizes}
          style={ItensStyles.inputBox}
          disabled={!isEditing}
        ></input>
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Foto:</p>
        <input {...register("image")}
          placeholder={item.image}
          style={ItensStyles.inputBox}
          disabled={!isEditing}
        ></input>
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Cores:</p>
        <input {...register("colors")}
          placeholder={item.colors}
          style={ItensStyles.inputBox}
          disabled={!isEditing}
        ></input>
      </div>
      <div style={ItensStyles.inputItens}>
        <p style={ItensStyles.extra}>Descrição:</p>
        <input {...register("description")}
          placeholder={item.description}
          style={{
            ...ItensStyles.inputBox,
            width: "70%",
            height: '80px',
          }}
          disabled={!isEditing}
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "2%",
          padding: "3%",
        }}
      >
        <button type="submit">
        <img
          src={Check.src}
          style={{ width: "102px", height: "43px", cursor: "pointer" }}
        /></button>
        <img
          src={Trash.src}
          style={{ width: "102px", height: "43px", cursor: "pointer" }}
          onClick={handleDeleteButtonClick}
        />
      </div></form>
      {confirmDelete && (
          <div style={ItensStyles.confirmPopup}>
            <div style={ItensStyles.confirmPopupInner}>
              <p>Tem certeza que quer remover?</p>
              <div>
                <button
                  onClick={() => handleDelete(item.id)}
                  style={ItensStyles.confirmButton}
                >
                  Sim
                </button>
                <button
                  onClick={toggle2Confirm}
                  style={ItensStyles.confirmButton}
                >
                  Não
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  </div>      
  );
};


const Modal2 = () => {

    type FormData2 = {
        name: string;
        price: number;
        category: string;
        description: string;
        image: string;
        colors: string;
        sizes: string;
        amount: number;
      }
    const { register, handleSubmit, formState:{errors} } = useForm<FormData2>();

    const handleConfirmYes: SubmitHandler<FormData2> = async (data) => {
      console.log(data);
      const priceAsFloat = parseFloat(String(data.price));

      if (isNaN(priceAsFloat)) {
        console.error("Invalid price value:", data.price);
        return;
      }
      const amountAsFloat = parseFloat(String(data.amount));
      if (isNaN(amountAsFloat)) {
        console.error("Invalid amount value:", data.amount);
        return;
      }
      const newData = { ...data, price: priceAsFloat, amount: amountAsFloat};
    
      try {
        // Call the createExample function of ApiItens to send the data to the backend
        await ApiItens.createExample(newData);
        console.log("Informações enviadas com sucesso!");
        alert("Item cadastrado com sucesso!");
        window.location.reload();

      } catch (error) {
        console.error("Erro ao enviar informações para o backend:", error);
      }
    };
    
  
    return (
        <>
        <div id="criar" style={{ display: "flex", justifyContent: "center" }}>
        <div style={ItensStyles.inputContainer}>
        <form onSubmit={handleSubmit(handleConfirmYes)}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2%",
              marginRight: "3%",
              marginTop: "3%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <p style={ItensStyles.extra}>Nome da peça:</p>
              <input {...register("name", {required: true})}
                placeholder="escreva aqui"
                style={{
                  ...ItensStyles.inputBox,
                }}
              ></input>
              {errors.name && <p style={{color: 'red'}}>Campo obrigatório</p>}
            </div>
          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Categoria:</p>
            <input {...register("category", {required: true})}
            placeholder="escreva aqui"
            style={ItensStyles.inputBox}
          ></input>
          {errors.category && <p style={{color: 'red'}}>Campo obrigatório</p>}
          </div> <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Preço:</p>
            <input {...register("price", {required: true})}
            placeholder="escreva um número"
            style={ItensStyles.inputBox}
          ></input>
          {errors.price && <p style={{color: 'red'}}>Campo obrigatório</p>}
          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Quantidade:</p>
            <input {...register("amount", {required: true})}
          placeholder="escreva um número"
          style={ItensStyles.inputBox}
        ></input>
         {errors.amount && <p style={{color: 'red'}}>Campo obrigatório</p>}
          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Tamanhos:</p>
            <input {...register("sizes", {required: true})}
          placeholder="escreva aqui"
          style={ItensStyles.inputBox}
        ></input>
          {errors.sizes && <p style={{color: 'red'}}>Campo obrigatório</p>}
          </div>            
            <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Foto:</p>
            <input {...register("image", {required: true})}
          placeholder="escreva aqui"
          style={ItensStyles.inputBox}
        ></input>
        {errors.image && <p style={{color: 'red'}}>Campo obrigatório</p>}
          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Cores:</p>
            <input {...register("colors", {required: true})}
          placeholder="escreva aqui"
          style={ItensStyles.inputBox}
        ></input>
        {errors.colors && <p style={{color: 'red'}}>Campo obrigatório</p>}
          </div>
          <div style={ItensStyles.inputItens}>
            <p style={ItensStyles.extra}>Descrição:</p>
            <textarea {...register("description", {required: true})}
          placeholder="escreva aqui"
          style={{
            ...ItensStyles.inputBox,
            width: "70%",
            height: '80px',
            wordWrap: 'break-word', // or 'break-all'
          }}
        ></textarea>
        {errors.description && <p style={{color: 'red'}}>Campo obrigatório</p>}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "2%",
              padding: "3%",
            }}
          >
            <button type="submit">
            <img
              src={Check.src}
              style={{ width: "102px", height: "43px", cursor: "pointer" }}
            /></button>
            
          </div> </form>
        </div>
      </div>

      </>
    );
    }

export { Modal, Modal2 };
