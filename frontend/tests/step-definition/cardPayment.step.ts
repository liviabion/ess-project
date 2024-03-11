import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';
import path from 'path';
import exp from 'constants';
import { text } from 'stream/consumers';

// Scenario: Cadastro de cartão de crédito com sucesso
Given('o usuário está na página {string}', async function (this: ICustomWorld, path: string) {
    await this.page!.goto(path);
});

When('preenche os campos card_number {string}, name {string}, cvv {string}, expire_date {string}, password {string}, type {string}',
      async function (
          this: ICustomWorld,
          card_number: string,
          name: string,
          cvv: string,
          expire_date: string,
          password: string,
          type: string,
      ) {
          await this.page!.getByPlaceholder('Número do cartão').fill(card_number)
          await this.page!.getByPlaceholder('Nome').fill(name);
          await this.page!.getByPlaceholder('CVV').fill(cvv);
          await this.page!.getByPlaceholder('Data de validade').fill(expire_date);
          await this.page!.getByPlaceholder('Senha').fill(password);
          await this.page!.getByLabel(type).check();
      }
  );

When('o usuário clica em {string} e em seguida clica em {string}', async function (this: ICustomWorld, confirm: string, choice: string) {
    await this.page!.getByText(confirm).click();
    await this.page!.getByText(choice).click();
});

Then('ele visualiza a mensagem {string}', async function (this: ICustomWorld, mensagem: string) {
    this.page!.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await expect(text).toBe(mensagem)
    })

});

Then('ele é redirecionado para a página {string}', async function (this: ICustomWorld, path: string) {
    await this.page!.goto(path);
});

Then('o cartão de número {string} e tipo {string} aparece na lista de cartões disponíveis', async function (this: ICustomWorld, card_number: string, type: string) {
    const element = await expect(this.page?.getByText(card_number)).toBeTruthy();
    const element2 = await expect(this.page?.getByText(type)).toBeTruthy();
});

// Scenario: Cadastro de cartão de crédito incompleto
When('o usuário clica em {string}', async function (this: ICustomWorld, confirm: string) {
    await this.page!.getByText(confirm).click();
});

Then('ele permanece na página {string}', async function (this: ICustomWorld, path: string) {
    await expect(this.page!.url()).toBe(path);
});

// // Scenario: Remoção de um método de pagamento
Given('o usuário está na tela {string}', async function (this: ICustomWorld, path: string) {
    await this.page!.goto(path);
});

Given('ele visualiza o cartão cadastrado com card_number {string} e type {string}', async function (this: ICustomWorld, card_number: string, type: string) {
    const element = await expect(this.page!.getByText(card_number)).toBeTruthy();
    const element2 = await expect(this.page!.getByText(type)).toBeTruthy();
});

When('o usuário seleciona o cartão', async function (this: ICustomWorld) {
        await this.page!.click('button[aria-checked="false"]');
    });

When('ele seleciona a opção {string} e confirma clicando em {string}', async function (this: ICustomWorld, remove: string, confirm: string) {
        await this.page!.getByText(remove).click();
        await this.page!.getByText(confirm).click();
    });


