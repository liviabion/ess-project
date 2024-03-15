import React from 'react';
import ComprovantePedido from '@/components/receipt/EntregasComponent';

export default function MinhaPagina() {
    // Supondo que você tenha uma lista de pedidos disponíveis
    const pedidos = [
        {
            nomeUsuario: 'João',
            nomeProduto: 'Produto X',
            quantidade: 2,
            preco: 'R$ 50,00'
        },
        {
            nomeUsuario: 'Maria',
            nomeProduto: 'Produto Y',
            quantidade: 1,
            preco: 'R$ 30,00'
        },
        // Adicione outros pedidos conforme necessário
    ];

    return (
        <div>
            <ComprovantePedido pedidos={pedidos} />
        </div>
    );
}
