import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Avaliações() {
    return(
        <div style={{
            backgroundColor: '#FCF6F6',
            height: '100vh',
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
                        fontSize: '40px',
                        fontFamily: 'Red Hat Display, sans-serif',
                    }}>Avaliações</text>
                </div>
                
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '20px'
                }}>
                    <div style={{
                        height: 'auto',
                        width: '1098px',
                        borderRadius: '20px',
                        backgroundColor: '#FFFFFF'
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
                            }}>De: Dodo</text>

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
                </div>
            </div>

        </div>
    );
}