"use client"

// Assuming styles.ts is in the same directory
import * as styles from './styles';
import React from 'react';
import { useRouter } from 'next/router';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import RatingComponent from '@/components/ratings/ratings';
import LinkComponent from '@/components/link/link';
import { ApiRatings } from '@/services/ratings';

export default function LinkAvaliações() {
    return(
        <div style={styles.pageContainer}>
            <div style={styles.sectionContainer}>
                <div style={styles.blackBar}></div>

                <div style={styles.completionMessageContainer}>
                    <text style={styles.completionMessageText} className='font-bold'>Compra concluída com sucesso.</text>
                </div>
                
                <div style={styles.linkContainer}>
                    <LinkComponent itemName='camisa' />
                    <LinkComponent itemName='camisa' />
                    <LinkComponent itemName='camisa' />
                    <LinkComponent itemName='camisa' />
                </div>
            </div>
        </div>
    );
}
