'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CuponsComponent from '@/components/cupons/cupons';
import { blackBar } from './assets';
import { ModalAddCupom } from '@/components/cupons/cupons';
import { ApiCupons } from '@/services/cupons';

export default function Home() {

  interface createCupom {
    id: number,
    name: string,
    discount: string,
    start_date: string,
    end_date: string,
  }
  const [createdCupom, setCreateCupom] = useState(null);

  const [cupons, setCupons] = useState<createCupom[]>([]); 
  useEffect(() => {
    getCupons();
  }, []);

  const getCupons = async () => {
    try {
      const fetchedCupons: createCupom[] = await ApiCupons.getCupons();
      console.log("Fetched Items:", fetchedCupons);
  
      // Set the Cupons state
      setCupons(fetchedCupons);
    } catch (error) {
      console.error("Erro ao obter informações:", error);
    }
  };

 return (
    <div>
      <Image alt="black bar" src={blackBar} />
      <text style={{
        color: '#9B1127',
        fontSize: '40px',
        fontFamily: 'Red Hat Display, sans-serif'
      }}>Cupons</text>
      <ModalAddCupom />
      {cupons.map((cupons, index) => (
      <CuponsComponent
        key={index}
        id={cupons.id}
        name={cupons.name}
        discount={cupons.discount}
        end_date={cupons.end_date}
        start_date={cupons.start_date}
      />
    ))}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        margin: '20px',
      }}>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: '20px', 
      }}>
      </div>
    </div>
 );
}
