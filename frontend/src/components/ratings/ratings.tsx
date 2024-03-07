'use client'
import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

export default function RatingComponent() {
    return(
        <div style={{
            height: 'auto',
            width: '1098px',
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 5px 3px 1px #00000080',
            marginBottom: '50px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                paddingTop: '20px',
                paddingLeft: '30px',
            }}>
                <text style={{
                    fontFamily: 'Red Hat Display, sans-serif',
                    fontWeight: '700',
                    fontSize: '36px',
                    marginRight: '80px'
                }}>De: Dodo</text>
    
                <Rating style={{ maxWidth: 250, marginBottom: '5px' }} value={3} readOnly={true}/>
            </div>
    
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <text style={{
                    fontFamily: 'Red Hat Display, sans-serif',
                    fontWeight: '400',
                    fontSize: '36px',
                    paddingLeft: '30px',
                    paddingBottom: '20px',
                }}>Sed vulputate porta facilisis Curabitur.</text>
            </div>
        </div>
    )
}