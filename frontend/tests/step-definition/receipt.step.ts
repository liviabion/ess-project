import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

// Scenario: Visualizar detalhes do pedido confirmado
Given('o usuário realizou um pedido {string} e está na página {string}', async function (this: ICustomWorld, nomeProduto: string, pagina: string) {
    await this.page!.goto(`http://localhost:3000/receipt`);
});

Then('o usuário deve ver os detalhes do pedido, incluindo o nome do usuário {string}, o nome do produto {string}, a quantidade {string} e o preço total {string}', async function (this: ICustomWorld, nomeUsuario: string, nomeProduto: string, quantidade: number, preco: string) {    // Aqui você verifica se os detalhes do pedido estão corretos na página de comprovante.

    // Verificando o nome do usuário
    const nomeUsuarioElement = await this.page!.locator('.nomeUsuario').textContent();
    expect(nomeUsuarioElement).toContain(nomeUsuario);

    // Verificando o nome do produto
    const nomeProdutoElement = await this.page!.locator('.nomeProduto').textContent();
    expect(nomeProdutoElement).toContain(nomeProduto);

    // Verificando a quantidade
    const quantidadeElement = await this.page!.locator('.quantidade').textContent();
    expect(quantidadeElement).toContain(quantidade);

    // Verificando o preço total
    const precoElement = await this.page!.locator('.preco').textContent();
    expect(precoElement).toContain(preco);
});


