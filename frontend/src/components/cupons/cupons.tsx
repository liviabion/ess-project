'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {Input} from "@nextui-org/react";
import { trash, sale, add } from './assets';
import { ApiCupons } from '@/services/cupons';
import { useForm, SubmitHandler, Form } from 'react-hook-form';

interface CuponsProps {
  id: number;
  name: string;
  discount: string;
  start_date: string;
  end_date: string;
}

export const ModalAddCupom = () => {
 const { register, handleSubmit, formState: { errors } } = useForm<CuponsProps>();
 const [showModal, setShowModal] = useState(false);

 const onSubmit: SubmitHandler<CuponsProps> = async (data) => {
    console.log("Submitting data:", data);
    try {
      await ApiCupons.createExample(data); // Supondo que ApiCupons.create aceita um objeto com as informações do cupom
      console.log("Cupom criado com sucesso!");
      setShowModal(false); // Fechar o modal após o envio bem-sucedido
    } catch (error) {
      console.error("Erro ao criar o cupom:", error);
    }
    window.location.reload();
 };

 return (
    <div>
      <div className='flex justify-end'>
        <button
          onClick={() => setShowModal(true)} 
          className='bg-rose-700 h-50 w-105 rounded-md flex' style={{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}
        >
          <Image
            src={add}
            alt="Adicionar"
            width={24}
            height={24}
          />
        </button>
      </div>
      {showModal ? (
        <>
          <div
            className='fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50'
            onClick={() => setShowModal(false)}
          ></div>
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-5 rounded-md' style={{height: 400, width: 500}}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col items-start justify-start pl-0 pt-5' >
                <Input
                 label="Código:"
                 placeholder="Código do Cupom"
                 {...register("name", { required: true })}
                />
                {errors.name && <span>Este campo é obrigatório</span>}
                <Input
                 label="Desconto:"
                 placeholder="Valor do desconto"
                 {...register("discount", { required: true })}
                />
                {errors.discount && <span>Este campo é obrigatório</span>}
                <div className='flex flex-row justify-between' style={{width: 450}}>
                 <Input
                    label="Data de início"
                    placeholder="dd/mm/aaaa"
                    type="date"
                    {...register("start_date", { required: true })}
                 />
                 {errors.start_date && <span>Este campo é obrigatório</span>}
                 <Input
                    label="Data de término"
                    placeholder="dd/mm/aaaa "
                    type="date"
                    {...register("end_date", { required: true })}
                 />
                 {errors.end_date && <span>Este campo é obrigatório</span>}
                </div>
                <div className='flex flex-row justify-between' style={{width: 450}}>
                 <button
                    type="submit"
                    className='bg-rose-700 text-white p-2 rounded-md mt-4'
                 >
                    Confirmar
                 </button>
                 <button
                    onClick={() => setShowModal(false)}
                    className='bg-rose-700 text-white p-2 rounded-md mt-4'
                 >
                    Cancelar
                 </button>
                </div>
              </div> 
            </form>
          </div>
        </>
      ) : null}
    </div>
 );
}



export default function CuponsComponent (props: CuponsProps) {

  const handleDelete = async (id:number) => {
    try {
      await ApiCupons.deleteExample(id);
      console.log("Cupom excluído");
      alert("Cupom excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar informações para o backend:", error);
    }
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center pb-5">
      <div style={{borderRadius: 10, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'}}>
        <div className='flex flex-row m-10 justify-between' style={{width: 450, height: 20}}>
            <div className="flex flex-col items-start ">
                <div className="flex flex-row items-start">
                    <h1 className="text-36 font-bold pr-4 ">{props.name}</h1>
                    <h2 className="text-32">{props.discount}</h2>
                </div>
                <h2 className="text-rose-700">Data de expiração: {props.end_date}</h2>
            </div>
            <div className='flex flex-col items-end pt-2'>
              <button onClick={() => handleDelete(props.id)} className='flex bg-rose-700 rounded-md' style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  src={trash}
                  alt="Icone de lixeira"
                  width={24}
                  height={24}
                />
              </button>
            </div>
        </div>
      </div>
  </div>
  );
}





