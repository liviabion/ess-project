'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import RatingComponent from '@/components/ratings/ratings';
import ColorComponent from '@/components/color/color';
import SizeComponent from '@/components/size/size';

export default function Item() {
    const [selectedColor, setSelectedColor] = useState('preto');
    const [selectedSize, setSelectedSize] = useState('P');
    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
    };
    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
    };  
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
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <img style={{
                            width: '410px',
                            height: '538.5px',
                            borderRadius: '20px'
                        }}src="https://s3-alpha-sig.figma.com/img/447f/8553/c83699df07857228fb0f1ddb0e36ff46?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NAjsO4NOErvFD3ywNi27YIRwlk32i2fFLalSeXwj0E3W2mxtrl2pN9kkK127CDtuwRHAxkUuxsheg-mm0ysf63FD8OZVY1-eLohuZqH46yyLXXRiz9p-aockFpUY-Oc6N6uSx0nFnsPAELumsB6lLR2HVcaKZYF5DXmTghvJm0Z9KmjlUfv-ebQQWNuzo2AOpbvRLo4HUnDjrFb4JrS4tAFYcmsX4zG9so7LP9cHv17uioPwF~Y6wcr26pxUBefszBFkLXrX1~hywBKmqm0UygacmgMYkSGHe3fJBN1xO6JqzaOYfRsC4cOdvs8munECfAUavNnlHgEkz4nyER8w2w__">                        
                        </img>
                        <p style={{
                            fontSize: '35px',
                            fontFamily: 'Red Hat Display, sans-serif',
                        }} className='font-semibold'>R$ 50,00</p>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            width: '318px',
                            height: '27px',
                            backgroundColor: 'black'
                        }}></div>

                        <div style={{
                            marginLeft: '-70px'
                        }}>
                            <text style={{
                                color: '#9B1127',
                                fontSize: '50px',
                                fontFamily: 'Red Hat Display, sans-serif',
                            }} className='font-bold'>Nome do item</text>
                        </div>

                        <p style={{
                            marginTop: '10px',
                            marginLeft: '-70px',
                            fontSize: '30px',
                            fontFamily: 'Red Hat Display, sans-serif',
                        }} className='font-medium'><strong>Cor:</strong> {selectedColor}</p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '30px',
                            marginLeft: '-30px',
                            justifyContent: 'space-around'
                        }}>
                            <ColorComponent color='preto' selected={selectedColor === 'preto'} onClick={() => handleColorSelect('preto')} />
                            <ColorComponent color='vermelho' selected={selectedColor === 'vermelho'} onClick={() => handleColorSelect('vermelho')} />
                            <ColorComponent color='azul' selected={selectedColor === 'azul'} onClick={() => handleColorSelect('azul')} />
                        </div>

                        <p style={{
                            marginTop: '40px',
                            marginLeft: '-70px',
                            fontSize: '30px',
                            fontFamily: 'Red Hat Display, sans-serif',
                        }} className='font-medium'><strong>Tamanho:</strong> {selectedSize}</p>
                        
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '30px',
                            marginLeft: '-70px',
                            justifyContent: 'space-around'
                        }}>
                            <SizeComponent size='P' selected={selectedSize === 'P'} onClick={() => handleSizeSelect('P')} />
                            <SizeComponent size='M' selected={selectedSize === 'M'} onClick={() => handleSizeSelect('M')} />
                            <SizeComponent size='G' selected={selectedSize === 'G'} onClick={() => handleSizeSelect('G')} />
                        </div>

                        <a href='#'>
                            <div style={{
                                display: 'flex',
                                alignItems:'center',
                                justifyContent: 'center',
                                marginLeft: '-200px',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                                backgroundColor: '#000000',
                                marginTop: '50px',
                                borderRadius: '20px'
                            }}>
                                <p style={{
                                    color: '#FFFFFF',
                                    fontSize: '40px',
                                    fontFamily: 'Red Hat Display, sans-serif',
                                }} className='font-semibold'>Adicionar ao carrinho</p>
                            </div>
                        </a>
                    </div>
                </div>  
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '30px'
                }}>
                    <div>
                        <p style={{
                            fontSize: '40px',
                            fontFamily: 'Red Hat Display, sans-serif'
                        }} className='font-semibold'>Descrição</p>
                        <p style={{
                             fontSize: '30px',
                             fontFamily: 'Red Hat Display, sans-serif',
                             marginBottom: '30px'
                        }} className='font-normal'>Sed vulputate porta facilisis Curabitur. massa, pretium Vestibulum cursus ante quis. orci efficitur Duis laoreet iaculis. congue justo nec lectus Aenean velit dictum. Pellentesque ut nisi in eleifend gravida. amet, id Etiam mi bibendum justo, ultricies nec. egestas leo Curabitur congue, tempus, mi. ante massa, pretium quis cursus Vestibulum. neque laoreet non. dignissim aliquam Aenean suscipit quis. nulla, dapibus orci mauris Proin a, semper eu.</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <p style={{
                        fontSize: '40px',
                        fontFamily: 'Red Hat Display, sans-serif',
                        marginRight: '20px'
                    }} className='font-bold'>Avaliações</p>
                        <Rating style={{ maxWidth: 250, marginBottom: '5px' }} value={3} readOnly={true}/>
                    </div>
                    <div style={{
                        marginLeft: '30px',
                        marginTop: '30px'
                    }}>
                        <RatingComponent rating={3} comment='Sed vulputate porta facilisis Curabitur.'/>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '-30px',
                        marginLeft: '30px',
                        marginBottom: '50px'
                    }}>
                        <a href="#" style={{
                            fontSize: '25px',
                            fontFamily: 'Red Hat Display, sans-serif',
                            textDecoration: 'underline'
                        }} className='font-normal'>Ver mais</a>

                        <a href='#'>
                            <div style={{
                                display: 'flex',
                                alignItems:'center',
                                justifyContent: 'center',
                                paddingTop: '10px',
                                paddingBottom: '10px',
                                paddingRight: '20px',
                                paddingLeft: '20px',
                                backgroundColor: '#000000',
                                borderRadius: '20px'
                            }}>
                                <p style={{
                                    color: '#FFFFFF',
                                    fontSize: '30px',
                                    fontFamily: 'Red Hat Display, sans-serif',
                                }} className='font-semibold'>Ir para o carrinho</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
    
        </div>
    );
}