' use client'
import React from 'react';

interface AddButtonProps {
  onClick: () => void;
}

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <div style={{ position: 'absolute', marginTop: '800px', right: '20px' }}>
      <button
        style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        onClick={onClick}
      >
        Adicionar
      </button>
    </div>
  );
}