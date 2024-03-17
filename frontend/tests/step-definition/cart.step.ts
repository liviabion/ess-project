import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Browser, Page, chromium } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

let browser: Browser;
let page: Page;

// Scenario: Adicionar um item ao carrinho
Given('o usuário está na página {string}', async function (this: ICustomWorld, path: string) {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000${path}`);
    this.page = page;
});

Given('o nome do item seja {string}, tenha as cores {string}, {string} e {string} disponíveis, tenha os tamanhos {string}, {string} e {string} disponíveis e o preço {string} reais', async function (this: any, nome, cor1, cor2, cor3, tamanho1, tamanho2, tamanho3, preco) {
    const itemNome = await this.page.textContent('');
    expect(itemNome).toContain(nome);
});

When('clica no botão com o texto {string}', async function (this: ICustomWorld, buttonText: string) {
    await this.page!.click(`button:text-is("${buttonText}")`);
});

Then('o usuário deverá ser redirecionado para a página {string}', async function (this: ICustomWorld, expectedPath: string) {
    await this.page!.waitForNavigation();
    const url = this.page!.url();
    expect(url).toContain(expectedPath);
});

Then('deverá aparecer o item de nome {string} ', async function (this: ICustomWorld, name: string) {
    await this.page!.waitForSelector('text=' + name);
    const itemDetails = await this.page!.textContent('.item-details');
    expect(itemDetails).toContain(name);
});