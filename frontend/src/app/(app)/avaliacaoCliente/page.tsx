'use client'
import * as styles from './styles';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import RatingComponent from '@/components/ratings/ratings';


export default function AvaliaçãoCliente() {
    const router = useRouter();
    const [rating, setRating] = useState(0); 
    const [comment, setComment] = useState("");

    const handleAddReview = () => {
        localStorage.setItem('newReview', JSON.stringify({ rating, comment }));
        router.push('/avaliacoes');
    };

    return (
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
                </div>
                <div>
                    <button style={styles.addButton} className='font-semibold'>Adicionar avaliação</button>
                    <div style={styles.ratingSection}>
                        <div>
                            <p style={styles.noteTitle}>Nota</p>
                            <div style={styles.noteContainer}>
                                <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating}/>
                            </div>
                        </div>
                        <div>
                            <p style={styles.commentTitle}>Comentário</p>
                            <div style={styles.commentContainer}>
                                <textarea 
                                    placeholder='Digite aqui' 
                                    value={comment} 
                                    onChange={e => setComment(e.target.value)}  
                                    maxLength={200} 
                                    style={styles.textareaStyle}
                                />
                            </div>
                            <div style={styles.okButtonContainer}>
                                <button style={styles.okButton} onClick={handleAddReview}>OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
