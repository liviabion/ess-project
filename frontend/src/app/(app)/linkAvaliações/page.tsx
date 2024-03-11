import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import RatingComponent from '@/components/ratings/ratings';
import LinkComponent from '@/components/link/link';

export default function LinkAvaliações() {
    return(
        <div style={{
            backgroundColor: '#FCF6F6',
            minHeight: '100vh',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10%',
            }}>
                <div style={{
                width: '318px',
                height: '27px',
                backgroundColor: 'black'
                }}></div>

                <div style={{
                    padding: '20px',
                }}>
                    <text style={{
                        color: '#9B1127',
                        fontSize: '40px',
                        fontFamily: 'Red Hat Display, sans-serif',
                    }} className='font-bold'>Compra concluída com sucesso.</text>
                </div>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '30px'
                }}>
                    <LinkComponent itemName='calça'/>
                    <LinkComponent itemName='camisa'/>
                    <LinkComponent itemName='meia'/>
                    <LinkComponent itemName='tênis'/>
                </div>
            </div>
    
        </div>
    );
}