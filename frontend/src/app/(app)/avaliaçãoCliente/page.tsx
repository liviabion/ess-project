'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import RatingComponent from '@/components/ratings/ratings';

export default function AvaliaçãoCliente() {
    const [rating, setRating] = useState(0) // Initial value
    const [comment, setComment] = useState("")
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
                        fontSize: '50px'
                    }} className='font-bold'>Avaliações</text>
                </div>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '20px'
                }}>
                    <RatingComponent/>
                    <RatingComponent/>
                    <RatingComponent />
                </div>
                <div>
                    <button style={{
                        backgroundColor: '#000000',
                        fontSize: '30px',
                        fontWeight: '600',
                        padding: '5px 30px',
                        borderRadius: '20px',
                        color: 'white',
                        marginBottom: '30px'
                    }}>Adicionar avaliação</button>
                    <div style={{
                        marginLeft: '5%'
                    }}>
                        <div>
                            <p style={{
                                fontSize: '40px',
                                fontWeight: '600',
                                color: '#000000',
                                marginLeft: '2%',
                            }}>Nota</p>
                            <div style={{
                                width: '30%',
                                minWidth: '400px',
                                height: '113px',
                                borderRadius: '20px',
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0px 5px 3px 1px #00000080',
                                marginBottom: '60px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems:'center'
                            }}>
                                <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating}/>
                            </div>
                        </div>
                        <div>
                            <p style={{
                                fontSize: '40px',
                                fontWeight: '600',
                                color: '#000000',
                                marginLeft: '2%',
                            }}>Comentário</p>
                            <div style={{
                                width: '70%',
                                minWidth: '700px',
                                height: '240px',
                                borderRadius: '20px',
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0px 5px 3px 1px #00000080',
                            }}>
                                <textarea placeholder='Digite aqui' value={comment} onChange={e=>setComment(e.target.value)}  maxLength={200} style={{
                                    fontSize: '25px',
                                    marginLeft: '50px',
                                    paddingTop: '20px',
                                    width: '670px',
                                    height: '200px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    outline: 'none',
                                }}/>
                            </div>
                            <div  style={{
                               display: 'flex',
                               flexDirection: 'row',
                               justifyContent: 'flex-end',
                               alignItems: 'flex-end',
                            }}>
                                <button style={{
                                    backgroundColor: '#000000',
                                    fontSize: '30px',
                                    fontWeight: '600',
                                    padding: '5px 30px',
                                    borderRadius: '20px',
                                    color: 'white',
                                    marginBottom: '30px',
                                    marginTop: '30px',
                                    marginRight: '350px'
                                }}>OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}