import React from 'react';
import { useRouter } from 'next/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import RatingComponent from '@/components/ratings/ratings';
import * as styles from './styles'; 

export default function Avaliações() {
    return(
        <div style={styles.pageContainer}>
            <div style={styles.sectionContainer}>
                <div style={styles.blackBar}></div>

                <div style={styles.headerContainer}>
                    <text style={styles.headerText} className='font-bold'>Avaliações</text>
                    <Rating style={{ maxWidth: 250, marginBottom: '5px' }} value={3} readOnly={true}/>
                </div>
                
                <div style={styles.ratingsContainer}>
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