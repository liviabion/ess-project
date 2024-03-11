'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Importando a tag Image do Next.js
import { useRouter } from 'next/navigation'
import {Input} from "@nextui-org/react";
import { trash, sale, add } from './assets';
import { ApiPromotions } from '@/services/promotions';
import { useForm, SubmitHandler} from 'react-hook-form';

// Props das promoções
interface SaleProps {
  id: number;
  category: string;
  discount: string;
  end_date: string;
  start_date: string;
}

export default function PromotionComponent (props: SaleProps) {
  const handleDelete = async (id:number) => {
    try {
      await ApiPromotions.deleteExample(id);
      console.log("Promoção excluída");
      alert("Promoção excluída com sucesso!");
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
                    <h1 className="text-36 font-bold pr-4 ">{props.category}</h1>
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

//Modal de Promoção
export function ModalPromotion() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);

  interface createPromotion {
    id: number,
    category: string,
    discount: string,
    start_date: string,
    end_date: string,
  }

  const [promotions, setPromotions] = useState<createPromotion[]>([]); 
  useEffect(() => {
    getPromotion();
  }, []);

  const getPromotion = async () => {
    try {
      const fetchedPromotions: createPromotion[] = await ApiPromotions.getPromotions();
      console.log("Fetched Items:", fetchedPromotions);
  
      // Set the Promotions state
      setPromotions(fetchedPromotions);
    } catch (error) {
      console.error("Erro ao obter informações:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className='bg-rose-700 h-50 w-105 rounded-md'
        style={{width: 60, justifyContent: 'center', alignItems:'center', display: 'flex'}}
      >
        <Image
          src={sale}
          alt="Icone de sale"
          width={36}
          height={36}
        />
      </button>
      {showModal ? (
        <>
          <div
            className='fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50'
            onClick={() => setShowModal(false)}
          ></div>
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-5 rounded-md' style={{minHeight: 400, minWidth: 600, overflowY: 'scroll'}}>
            <div className='flex flex-row justify-end'>
              <ModalAddPromotion /> 
            </div>
            <div className='flex flex-col items-start justify-start pl-0 pt-5' >
            {promotions.map((promotions, index) => (
              <PromotionComponent
                key={index}
                id={promotions.id}
                category={promotions.category}
                discount={promotions.discount}
                end_date={promotions.end_date}
                start_date={promotions.start_date}
              />
              ))}
            </div> 
          </div>
          
        </>
      ) : null}


    </div>
    );
}


export function ModalAddPromotion() {
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<SaleProps>();
 
  const onSubmit: SubmitHandler<SaleProps> = async (data) => {
     console.log("Submitting data:", data);
     try {
       await ApiPromotions.createExample(data); // Supondo que ApiPromotions.create aceita um objeto com as informações da promoção
       console.log("Promoção criada com sucesso!");
       setShowModal(false); // Fechar o modal após o envio bem-sucedido
     } catch (error) {
       console.error("Erro ao criar a promoção:", error);
     }
     window.location.reload();
  };
 
  return (
     <div>
       <button
         onClick={() => setShowModal(true)}
         className='bg-rose-700 h-50 w-105 rounded-md'
       >
         <Image
           src={add}
           alt="Icone de mais"
           width={30}
           height={30}
         />
       </button>
       {showModal ? (
         <>
           <div
             className='fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50'
             onClick={() => setShowModal(false)}
           ></div>
           <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-5 rounded-md' >
             <form onSubmit={handleSubmit(onSubmit)}>
               <div className='flex flex-col items-start justify-start pl-0 pt-5' >
                 <Input
                  label="Categoria:"
                  placeholder="Nome da Categoria"
                  {...register("category", { required: true })}
                 />
                 {errors.category && <span>Este campo é obrigatório</span>}
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