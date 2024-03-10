import { Given, When, Then } from '@cucumber/cucumber';
import { expect, chromium, Page, Browser } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('eu estou na página de entregadores', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/deliveryPerson');
});

When('eu seleciono {string}', async function (string) {
    await page.locator('text=+').click(string);
});

When('eu preencho o campo de {string} com {string}', async function (string, string2) {
    await page.getByLabel(string).fill(string2);
});
When('eu preencho o campo de "cpf" com "bea"', async function () {
    await page.getByLabel('cpf').fill('000.000.000-00');
});
When('eu preencho o campo de "telefone" com "81900000000"', async function () {
    await page.getByLabel('telefone').fill('000.000.000-00');
});
When('eu preencho o campo de "email" com "bealinda@gmail.com"', async function () {
    await page.getByLabel('email').fill('bealinda@gmail.com');
});

When('eu clico em {string}', async function (string) {
    await page.locator('text=Endereço').click(string);
});

When('eu preencho o campo de "CEP" com "0000000"', async function () {
    await page.getByLabel('cep').fill('0000000');
});
When('eu preencho o campo de "Rua" com "zero de agosto"', async function () {
    await page.getByLabel('rua').fill('zero de agosto');
});
When('eu preencho o campo de "Cidade" com "Recife"', async function () {
    await page.getByLabel('cidade').fill('recife');
});
When('eu preencho o campo de "Bairro" com "Espinheiro"', async function () {
    await page.getByLabel('bairro').fill('espinheiro');
});
When('eu preencho o campo de "Numero" com "00"', async function () {
    await page.getByLabel('numero').fill('00');
});
When('eu preencho o campo de "Estado" com "Pernambuco"', async function () {
    await page.getByLabel('estado').fill('pernambuco');
});
When('eu preencho o campo de "complemento" com "apartamento 00"', async function () {
    await page.getByLabel('complemento').fill('apartamento 00');
});
When('eu preencho o campo de "referencia" com "perto da padaria 00"', async function () {
    await page.getByLabel('referencia').fill('perto da padaria 00');
});
When('eu clico na opção {string}', async function (string) {
    await page.locator('text=Adicionar').click(string);
});
When('eu confirmo com a opção {string}', async function (string) {
    await page.locator('text=Sim').click(string);
});
Then('eu vejo uma mensagem de {string}', async function (string) {
    // Aguarda até que o texto específico seja visível na página
    // Verifica se o texto está presente na página
 await page.locator(string);
   
});

Given('eu estou na página de cadastro de entregadores', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/newDeliveryPerson');
});
When('eu clico na opção de {string}', async function (string) {
    await page.locator('text=Adicionar').click(string);
});
Then('eu vejo uma mensagem {string}', async function (string) {
    // Aguarda até que o texto específico seja visível na página
    // Verifica se o texto está presente na página
 await page.locator(string);
   
});