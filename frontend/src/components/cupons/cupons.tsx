'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Importando a tag Image do Next.js
import { useRouter } from 'next/navigation'
import {Input} from "@nextui-org/react";
import { trash, sale, add } from './assets';
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import { FileX } from 'lucide-react';


interface CuponsProps {
  name: string;
  discout: string;
  end_date: string;
}


export default function CuponsComponent (props: CuponsProps) {
  return (
    <div className="flex flex-col items-center pb-5">
      <div style={{borderRadius: 10, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'}}>
        <div className='flex flex-row m-10 justify-between' style={{width: 450, height: 20}}>
            <div className="flex flex-col items-start ">
                <div className="flex flex-row items-start">
                    <h1 className="text-36 font-bold pr-4 ">{props.name}</h1>
                    <h2 className="text-32">{props.discout}</h2>
                </div>
                <h2 className="text-rose-700">Data de expiração: {props.end_date}</h2>
            </div>
            <div className='flex flex-col items-end pt-2'>
              <button className='flex bg-rose-700 rounded-md' style={{width: 50, alignItems: 'center', justifyContent: 'center'}}>
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


export function ModalAddCupom() {
const [name, setName] = useState("");
const [discount, setDiscount] = useState("");
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [showModal, setShowModal] = useState(false);

const handleAddPromotion = () => {
  console.log("Name:", name);
  console.log("Discount:", discount);
  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);
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
          alt="Icone de mais"
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
          <div className='flex flex-col items-start justify-start pl-0 pt-5' >
            <Input
              label="Código:"
              placeholder="Código do Cupom"
              value={discount}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Desconto:"
              placeholder="Valor do desconto"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <div className='flex flex-row justify-between' style={{width: 450}}>
              <Input
                label="Data de início"
                placeholder="dd/mm/aaaa"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                label="Data de término"
                placeholder="dd/mm/aaaa "
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className='flex flex-row justify-between' style={{width: 450}}>
              <button
                onClick={handleAddPromotion}
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
        </div>
      </>
    ) : null}
  </div>
);
}



