import { Given, When, Then } from '@cucumber/cucumber';
import { expect, chromium, Page, Browser } from '@playwright/test';
import { ICustomWorld } from 'tests/support/custom-world';

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

When('eu preencho o campo de "Nome" com "Bea"', async function () {
    await page.getByLabel('nome').fill('Bea');
});
When('eu preencho o campo de "CPF" com "12345678900"', async function () {
    await page.getByLabel('cpf').fill('12345678900');
});
When('eu preencho o campo de "Telefone" com "81900000000"', async function () {
    await page.getByLabel('telefone').fill('000.000.000-00');
});
When('eu preencho o campo de "Email" com "bea@example.com"', async function () {
    await page.getByLabel('email').fill('bealinda@gmail.com');
});

// When('eu clico no campo de "Endereço"', async function (string) {
//     await page.getByLabel('endereco').click(string)
// });

When('eu clico em "Endereço"', async function () {
    await page.click(`div[aria-label="endereco"]`);
});

When('eu preencho o campo de "CEP" com "00000000"', async function () {
    await page.fill(`input[aria-label="cep"]`, "00000000");
});

When('eu preencho o campo de "Rua" com "Rua das Flores"', async function () {
    await page.fill(`input[aria-label="rua"]`, "Rua das Flores");
});
When('eu preencho o campo de "Cidade" com "Cidade Exemplo"', async function () {
    await page.fill(`input[aria-label="cidade"]`, "Cidade Exemplo");
});
When('eu preencho o campo de "Bairro" com "Bairro Exemplo"', async function () {
    await page.fill(`input[aria-label="bairro"]`, "Bairro Exemplo");
});
When('eu preencho o campo de "Numero" com "123"', async function () {
    await page.fill(`input[aria-label="numero"]`, "123");
});
When('eu preencho o campo de "Estado" com "Pernambuco"', async function () {
    await page.fill(`input[aria-label="estado"]`, "Pernambuco");
});
When('eu preencho o campo de "Complemento" com "Apartamento 101"', async function () {
    await page.fill(`input[aria-label="complemento"]`, "Apartamento 101");
});
When('eu preencho o campo de "Referencia" com "Próximo à praça central"', async function () {
    await page.fill(`input[aria-label="referencia"]`, "Próximo à praça central");
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

When('eu seleciono o botao com {string}', async function (string) {
    await page.locator('text=+').click(string);
});

When('eu preencho o campo "Nome" com "João"', async function () {
    await page.fill(`input[aria-label="nome"]`, "João");
});

When('eu preencho o campo "CPF" com "12345678900"', async function () {
    await page.fill(`input[aria-label="cpf"]`, "12345678900");
});

When('eu preencho o campo "Telefone" com "81999999999"', async function () {
    await page.fill(`input[aria-label="telefone"]`, "81999999999");
});

When('eu preencho o campo "Email" com "joao@example.com"', async function () {
    await page.fill(`input[aria-label="email"]`, "joao@example.com");
});

When('eu clico no campo de "Endereço"', async function () {
    await page.click(`div[aria-label="endereco"]`);
});

When('eu preencho o campo "Cep" com "11111111"', async function () {
    await page.fill(`input[aria-label="cep"]`, "11111111");
});

When('eu preencho o campo "Rua" com "Rua das Palmeiras"', async function () {
    await page.fill(`input[aria-label="rua"]`, "Rua das Palmeiras");
});

When('eu preencho o campo "Cidade" com "Cidade Nova"', async function () {
    await page.fill(`input[aria-label="cidade"]`, "Cidade Nova");
});

When('eu preencho o campo "Bairro" com "Bairro Novo"', async function () {
    await page.fill(`input[aria-label="bairro"]`, "Bairro Novo");
});

When('eu preencho o campo "Numero" com "456"', async function () {
    await page.fill(`input[aria-label="numero"]`, "456");
});

When('eu preencho o campo "Estado" com "Bahia"', async function () {
    await page.fill(`input[aria-label="estado"]`, "Bahia");
});

When('eu preencho o campo "Complemento" com "Apartamento 202"', async function () {
    await page.fill(`input[aria-label="complemento"]`, "Apartamento 202");
});

When('eu preencho o campo "Referencia" com "Próximo ao mercado local"', async function () {
    await page.fill(`input[aria-label="referencia"]`, "Próximo ao mercado local");
});
When('eu clico na opção de {string}', async function (string) {
    await page.locator('text=Adicionar').click(string);
});
Then('eu vejo uma mensagem {string}', async function (string) {

 await page.locator(string);
   
});

When('eu seleciono o botao de {string}', async function (string) {
    await page.locator('text=CPF').click(string);
});
When('eu pesquiso em "Digite o CPF", "12345678900"', async function () {
    await page.getByLabel('pesquisa_cpf').fill("12345678900");
});
When('eu clico na imagem da seta', async function () {
    await page.click('img[alt="seta"]');
});
When('eu seleciono em {string}', async function (string) {
    await page.locator('text=Editar Dados').click(string);
});
When('eu digito "Paula" no campo "Nome"', async function () {
    await page.fill('input[aria-label="nome"]', "Paula");
});
When('eu clico no botao {string}', async function (string) {
    await page.locator('text=Atualizar').click(string);
});
When('eu marco {string}', async function (string) {
    await page.locator('text=Sim').click(string);
});
Then('eu vejo a mensagem {string}', async function (string) {
 await page.locator(string);
   
});
When('eu seleciono o botao {string}', async function (string) {
    await page.locator('text=CPF').click(string);
});
When('eu pesquiso em "Digite o CPF", o cpf inválido "0"', async function () {
    await page.getByLabel('pesquisa_cpf').fill("0");
});
When('eu clico no icone de seta', async function () {
    await page.click('img[alt="seta"]');
});
Then('eu vejo a mensagem de {string}', async function (string) {
    await page.locator(string);
      
   });

