'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Importando a tag Image do Next.js
import { useRouter } from 'next/navigation'
import CuponsComponent from '@/components/cupons/cupons';
import { blackBar } from './assets'
import { ModalAddCupom } from '@/components/cupons/cupons';


export default function Home() {

  return (
    <div>
      <Image alt="black bar" src={blackBar} />
      <text style={{
        color: '#9B1127',
        fontSize: '40px',
        fontFamily: 'Red Hat Display, sans-serif'
      }}>Cupons</text>
        <ModalAddCupom/>
        <CuponsComponent name="Nome" discout="Desconto" end_date="Data de expiração" />
        <CuponsComponent name="Nome" discout="Desconto" end_date="Data de expiração" />
        <CuponsComponent name="Nome" discout="Desconto" end_date="Data de expiração" />   
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