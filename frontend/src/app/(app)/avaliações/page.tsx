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
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <text style={{
                        color: '#9B1127',
                        fontSize: '50px',
                        fontFamily: 'Red Hat Display, sans-serif',
                        marginRight: '20px'
                    }} className='font-bold'>Avaliações</text>
                    <Rating style={{ maxWidth: 250, marginBottom: '5px' }} value={3} readOnly={true}/>
                </div>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '20px'
                }}>
                    <RatingComponent rating={3} comment='Sed vulputate porta facilisis Curabitur.'/>
                    <RatingComponent rating={3} comment='Sed vulputate porta facilisis Curabitur.'/>
                    <RatingComponent rating={3} comment='Sed vulputate porta facilisis Curabitur.'/>
                    <RatingComponent rating={3} comment='Sed vulputate porta facilisis Curabitur.'/>
                    <RatingComponent rating={3} comment='Sed vulputate porta facilisis Curabitur.'/>
                </div>
            </div>
    
        </div>
    );
}