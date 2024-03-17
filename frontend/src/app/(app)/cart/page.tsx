'use client'

import React, { useEffect } from 'react';
import { useRouter} from 'next/navigation';
import * as styles from './styles';
import { Trash } from '@/assets';
import { useCart } from '@/providers/cart';


export default function Cart() {
    const { cart, increaseQuantity, diminishQuantity, removeItemToCart  } = useCart();

    useEffect(() => {
        console.log('Current cart items:', cart);
    }, [cart]);

    const totalPrice = cart.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.price * currentItem.quantity);
    }, 0);

    return(
        <div style={styles.pageContainer}>
            <div style={styles.sectionContainer}>
                <div style={styles.blackBar}></div>

                <div style={styles.headerContainer}>
                    <text style={styles.headerText} className='font-bold'>Carrinho</text>
                </div>

                <div style={styles.cartContainer}>
                    {cart.map((item) => (
                        <div style={styles.cartItemContainer}>
                            <div style={styles.leftCart}>
                                <div style={styles.imageContainer}>
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        style={styles.itemImage}
                                    />
                                    <p style={styles.itemPrice} className='font-semibold'>{(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                </div>
                                <div style={styles.informationContainer}>
                                    <p style={styles.itemTitle} className='font-semibold'>{item.name}</p>
                                    <div style={styles.atributesContainer}>
                                        <p style={styles.itemAtributes} className='font-semibold'>{item.cor} / {item.size}</p>
                                    </div>
                                </div>
                            </div>
                            <div style={styles.rightCart}>
                                <div style={styles.buttonContainer}>
                                    <button style={styles.operationButtonPlus}>
                                        <p style={styles.quantity} className='font-bold' onClick={() => diminishQuantity(item.id)}>–</p>
                                    </button>
                                    <div style={styles.divisor}></div>
                                    <div style={styles.quantityContainer}>
                                        <p style={styles.quantity} className='font-semibold'>{item.quantity}</p>
                                    </div>
                                    <div style={styles.divisor}></div>
                                    <button style={styles.operationButtonMinus}>
                                        <p style={styles.quantity} className='font-bold' onClick={() => increaseQuantity(item.id)}>+</p>
                                    </button>
                                </div>
                                <button onClick={() => removeItemToCart(item.id)}>
                                <img
                                    src={Trash.src} 
                                    alt="Trash" 
                                    style={styles.trashImage}
                                />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div style={styles.totalPriceContainer}>
                        <div style={styles.priceContainer}>
                            <p>
                                <span style={styles.totalPrice} className='font-semibold'>Total: </span>
                                <span style={styles.totalPrice} className='font-medium'>{totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </p>
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

