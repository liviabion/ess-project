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

Given('o nome do item seja {string}', async function (this: any, nome) {
    const itemName = await this.page.textContent('[data-testid="itemName"]');
    expect(itemName).toContain(nome);
});