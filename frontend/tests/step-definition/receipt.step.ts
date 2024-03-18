import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

// Scenario: Visualizar detalhes do pedido confirmado
Given('o usuário realizou um pedido {string} e está na página {string}', async function (this: ICustomWorld, nomeProduto: string, pagina: string) {
    await this.page!.goto(`http://localhost:3000${pagina}`);
});

Then('o usuário deve ver os detalhes do pedido, incluindo o nome do usuário {string}, o nome do produto {string}, a quantidade {int} e o preço total {float} reais', async function (this: ICustomWorld, nomeUsuario: string, nomeProduto: string, quantidade: number, preco: number) {
    // Aguardar a presença do elemento .nomeUsuario
    await this.page!.waitForSelector('.nomeUsuario');
    const nomeUsuarioElement = await this.page!.locator('.nomeUsuario').textContent();
    expect(nomeUsuarioElement).toContain(nomeUsuario);

    // Aguardar a presença do elemento .nomeProduto
    await this.page!.waitForSelector('.nomeProduto');
    const nomeProdutoElement = await this.page!.locator('.nomeProduto').textContent();
    expect(nomeProdutoElement).toContain(nomeProduto);

    // Aguardar a presença do elemento .quantidade
    await this.page!.waitForSelector('.quantidade');
    const quantidadeElement = await this.page!.locator('.quantidade').textContent();
    expect(quantidadeElement).toContain(quantidade.toString()); // Convertendo para string antes de comparar

    // Aguardar a presença do elemento .preco
    await this.page!.waitForSelector('.preco');
    const precoElement = await this.page!.locator('.preco').textContent();
    expect(precoElement).toContain(preco.toString());
});
