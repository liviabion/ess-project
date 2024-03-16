import React from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './styles';
import { Trash } from '@/assets';

export default function Cart() {
    return(
        <div style={styles.pageContainer}>
            <div style={styles.sectionContainer}>
                <div style={styles.blackBar}></div>

                <div style={styles.headerContainer}>
                    <text style={styles.headerText} className='font-bold'>Carrinho</text>
                </div>

                <div style={styles.cartContainer}>
                    <div style={styles.cartItemContainer}>
                        <div style={styles.leftCart}>
                            <div style={styles.imageContainer}>
                                <img 
                                    src="https://s3-alpha-sig.figma.com/img/447f/8553/c83699df07857228fb0f1ddb0e36ff46?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NAjsO4NOErvFD3ywNi27YIRwlk32i2fFLalSeXwj0E3W2mxtrl2pN9kkK127CDtuwRHAxkUuxsheg-mm0ysf63FD8OZVY1-eLohuZqH46yyLXXRiz9p-aockFpUY-Oc6N6uSx0nFnsPAELumsB6lLR2HVcaKZYF5DXmTghvJm0Z9KmjlUfv-ebQQWNuzo2AOpbvRLo4HUnDjrFb4JrS4tAFYcmsX4zG9so7LP9cHv17uioPwF~Y6wcr26pxUBefszBFkLXrX1~hywBKmqm0UygacmgMYkSGHe3fJBN1xO6JqzaOYfRsC4cOdvs8munECfAUavNnlHgEkz4nyER8w2w__" 
                                    alt="foto do item" 
                                    style={styles.itemImage}
                                />
                                <p style={styles.itemPrice} className='font-semibold'>50</p>
                            </div>
                            <div style={styles.informationContainer}>
                                <p style={styles.itemTitle} className='font-semibold'>Nome Peça</p>
                                <div style={styles.atributesContainer}>
                                    <p style={styles.itemAtributes} className='font-semibold'>Preta / S</p>
                                </div>
                            </div>
                        </div>
                        <div style={styles.rightCart}>
                            <div style={styles.buttonContainer}>
                                <button style={styles.operationButtonPlus}>
                                    <p style={styles.quantity} className='font-bold'>–</p>
                                </button>
                                <div style={styles.divisor}></div>
                                <div style={styles.quantityContainer}>
                                    <p style={styles.quantity} className='font-semibold'>1</p>
                                </div>
                                <div style={styles.divisor}></div>
                                <button style={styles.operationButtonMinus}>
                                    <p style={styles.quantity} className='font-bold'>+</p>
                                </button>
                            </div>
                            <img
                                src={Trash.src} 
                                alt="Trash" 
                                style={styles.trashImage}
                            />
                        </div>
                    </div>

                    <div style={styles.totalPriceContainer}>
                        <div style={styles.priceContainer}>
                            <p style={styles.totalPrice} className='font-semibold'>Total: 55</p>
                            <button style={styles.buyButton}>
                                <p style={styles.buyText} className='font-semibold'>Comprar</p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

