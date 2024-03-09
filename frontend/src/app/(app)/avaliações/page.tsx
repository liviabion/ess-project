import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import RatingComponent from '@/components/ratings/ratings';

export default function Avaliações() {
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
                    }}>Avaliações</text>
                </div>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '20px'
                }}>
                    <RatingComponent/>
                    <RatingComponent/>
                    <RatingComponent/>
                    <RatingComponent/>
                    <RatingComponent/>
                </div>
            </div>
    
        </div>
    );
}