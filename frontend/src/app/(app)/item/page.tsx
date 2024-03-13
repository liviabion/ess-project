'use client'

import * as styles from './styles'; // Import styles from styles.ts
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
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

    return (
        <div style={styles.pageContainer}>
            <div style={styles.sectionContainer}>
                <div style={styles.rowContainer}>
                    <div style={styles.columnContainer}>
                        <img 
                            src="https://s3-alpha-sig.figma.com/img/447f/8553/c83699df07857228fb0f1ddb0e36ff46?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NAjsO4NOErvFD3ywNi27YIRwlk32i2fFLalSeXwj0E3W2mxtrl2pN9kkK127CDtuwRHAxkUuxsheg-mm0ysf63FD8OZVY1-eLohuZqH46yyLXXRiz9p-aockFpUY-Oc6N6uSx0nFnsPAELumsB6lLR2HVcaKZYF5DXmTghvJm0Z9KmjlUfv-ebQQWNuzo2AOpbvRLo4HUnDjrFb4JrS4tAFYcmsX4zG9so7LP9cHv17uioPwF~Y6wcr26pxUBefszBFkLXrX1~hywBKmqm0UygacmgMYkSGHe3fJBN1xO6JqzaOYfRsC4cOdvs8munECfAUavNnlHgEkz4nyER8w2w__"
                            style={styles.itemImage}
                            alt="Item Image"
                        />
                        <p style={styles.itemPrice} className='font-semibold'>R$ 50,00</p>
                    </div>

                    <div style={styles.itemNameContainer}>
                        <div style={styles.blackBar}></div>

                        <div>
                            <text style={styles.itemName} className='font-bold'>Nome do item</text>
                        </div>

                        <p style={styles.itemAttribute} className='font-medium'><strong>Cor:</strong> {selectedColor}</p>

                        <div style={styles.colorSizeRow}>
                            <ColorComponent color='preto' selected={selectedColor === 'preto'} onClick={() => handleColorSelect('preto')} />
                            <ColorComponent color='vermelho' selected={selectedColor === 'vermelho'} onClick={() => handleColorSelect('vermelho')} />
                            <ColorComponent color='azul' selected={selectedColor === 'azul'} onClick={() => handleColorSelect('azul')} />
                        </div>

                        <p style={styles.itemAttribute}><strong>Tamanho:</strong> {selectedSize}</p>
                        
                        <div style={styles.colorSizeRow}>
                            <SizeComponent size='P' selected={selectedSize === 'P'} onClick={() => handleSizeSelect('P')} />
                            <SizeComponent size='M' selected={selectedSize === 'M'} onClick={() => handleSizeSelect('M')} />
                            <SizeComponent size='G' selected={selectedSize === 'G'} onClick={() => handleSizeSelect('G')} />
                        </div>

                        <a href='#' style={styles.addToCartButton}>
                            <p style={styles.addToCartButtonText} className='font-semibold'>Adicionar ao carrinho</p>
                        </a>
                    </div>
                </div>  
                
                <div style={styles.descriptionSection}>
                    <p style={styles.itemPrice} className='font-bold'>Descrição</p>
                    <p style={styles.itemAttribute} className='font-medium'>Sed vulputate porta facilisis Curabitur. massa, pretium Vestibulum cursus ante quis. orci efficitur Duis laoreet iaculis. congue justo nec lectus Aenean velit dictum. Pellentesque ut nisi in eleifend gravida. amet, id Etiam mi bibendum justo, ultricies nec. egestas leo Curabitur congue, tempus, mi. ante massa, pretium quis cursus Vestibulum. neque laoreet non. dignissim aliquam Aenean suscipit quis. nulla, dapibus orci mauris Proin a, semper eu.</p>
                </div>
                <div>
                    <div style={styles.ratingsRow}>
                        <p style={styles.itemPrice} className='font-bold'>Avaliações</p>
                        <Rating style={{ maxWidth: 250, marginBottom: '5px' }} value={3} readOnly={true}/>
                    </div>
                    <div style={{ marginLeft: '30px', marginTop: '30px' }}>
                        <RatingComponent rating={3} comment='Sed vulputate porta facilisis Curabitur.'/>
                    </div>
                    <div style={styles.viewMoreRow}>
                        <a href="#" style={styles.viewMoreLink} className='font-medium'>Ver mais</a>
                        <a href='#' style={styles.goToCartButton}>
                            <p style={styles.goToCartButtonText} className='font-semibold'>Ir para o carrinho</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
