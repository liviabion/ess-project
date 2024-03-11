import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Browser, Page, chromium } from '@playwright/test';

let browser: Browser;
let page: Page;

// Scenario: Notificação de Nova Entrega para Pessoa Entregadora

Given('o usuário está na página {string}, apenas com entregas pendentes', async function (string) {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto(`http://localhost:3000/${string}`);
})

When('o usuário clica no botão com texto {string} na primeira entrega da lista', async function (string) {
  await page.click(`text=${string}`);
})

When('no modal de confirmação, clica no botão com texto {string}', async function (string) {
  await page.on('popup', async (popup) => {
    await popup.click(`text=${string}`);
  });
})

Then('deverá aparecer um modal com título {string} e descrição {string}', async function (string, string2) {
  await page.on('popup', async (popup) => {
    const title = await popup.$eval('div.font-semibold', (el: any) => el.textContent);
    const description = await popup.$eval('div.opacity-90', (el: any) => el.textContent);
    expect(title).toBe(string);
    expect(description).toBe(string2);
  });
  await browser.close();
});

// Scenario: Notificação de Entrega em Deslocamento para Pessoa Entregadora

Given('o usuário está na página {string}, com entregas solicitadas', async function (string) {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto(`http://localhost:3000/${string}`);
});

When('o usuário clica no botão com texto {string} na primeira entrega', async function (string) {
  await page.click(`text=${string}`);
});

When('no modal de atualização, clica no botão com texto {string}', async function (string) {
  await page.on('popup', async (popup) => {
    await popup.click(`text=${string}`);
  });
});

Then('deverá aparecer um pop-up com título {string} e descrição {string}', async function (string, string2) {
  await page.on('popup', async (popup) => {
    const title = await popup.$eval('div.font-semibold', (el: any) => el.textContent);
    const description = await popup.$eval('div.opacity-90', (el: any) => el.textContent);
    expect(title).toBe(string);
    expect(description).toBe(string2);
  });
  await browser.close();
});


// Scenario: Notificação de Entrega Realizada para Pessoa Entregadora

Given('o usuário está na página {string}, com entregas em deslocamento', async function (string) {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto(`http://localhost:3000/${string}`);
});

When('o usuário clica no botão com texto {string} na primeira entrega com esse status', async function (string) {
  await page.click(`text=${string}`);
});

When('no modal de atualização, clica no botão com título {string}', async function (string) {
  await page.on('popup', async (popup) => {
    await popup.click(`text=${string}`);
  });
});

Then('deverá aparecer um pop-up com título {string} e a descrição {string}', async function (string, string2) {
  await page.on('popup', async (popup) => {
    const title = await popup.$eval('div.font-semibold', (el: any) => el.textContent);
    const description = await popup.$eval('div.opacity-90', (el: any) => el.textContent);
    expect(title).toBe(string);
    expect(description).toBe(string2);
  });
  await browser.close();
});