import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ICustomWorld } from '../support/custom-world';

// Scenario: Cadastro de cartão de crédito com sucesso
Given('o usuário está na página {string}', async function (this: ICustomWorld, path: string) {
    await this.page!.goto(path);
});

Given('o cartão de número {string} e tipo {string} aparece na lista de cartões disponíveis', async function (this: ICustomWorld, card_number: string, type: string) {
    const element = await expect(this.page?.getByText(card_number)).toBeTruthy();
    const element2 = await expect(this.page?.getByText(type)).toBeTruthy();
});

When('preenche os campos card_number {string}, name {string}, cvv {string}, expire_date {string}, password {string}, type {string} e aperta o botão Cadastrar',
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
          await this.page!.locator('button:text("Cadastrar")').click();
      }
  );

When('o usuário confirma clicando em {string}', async function (this: ICustomWorld) {
    await this.page!.locator('button:text("Sim")').click();
});

Then('ele visualiza a mensagem {string}', async function (this: ICustomWorld, alert: string) {
    this.page?.on("dialog", async (alert) => {
        expect(alert.type()).toContain("alert")
        expect(alert.message).toContain("Cartão cadastrado com sucesso")

        await alert.accept()
    });
});

Then('ele é redirecionado para a página {string}', async function (this: ICustomWorld, path: string) {
    await this.page!.goto(path);
});

Then('o cartão de número {string} aparece na lista de cartões disponíveis', async function (this: ICustomWorld, card_number: string, type: string) {
    const element = await expect(this.page?.getByText(card_number)).toBeTruthy();
    const element2 = await expect(this.page?.getByText(type)).toBeTruthy();
});

// Scenario: Cadastro de cartão de crédito incompleto
// Given('o usuário está na página {string}', async function (this: ICustomWorld, path: string) {
//     await this.page!.goto(path);
// });

// Given('o cartão de número {string} e tipo {string} aparece na lista de cartões disponíveis', async function (this: ICustomWorld, card_number: string, type: string) {
//     const element = await expect(this.page?.getByText(card_number)).toBeTruthy();
//     const element2 = await expect(this.page?.getByText(type)).toBeTruthy();
// });

// When('preenche os campos card_number {string}, name {string}, cvv {string}, expire_date {string}, password {string}, type {string} e aperta o botão Cadastrar',
//       async function (
//           this: ICustomWorld,
//           card_number: string,
//           name: string,
//           cvv: string,
//           expire_date: string,
//           password: string,
//           type: string,
//       ) {
//           await this.page!.getByPlaceholder('Número do cartão').fill(card_number)
//           await this.page!.getByPlaceholder('Nome').fill(name);
//           await this.page!.getByPlaceholder('CVV').fill(cvv);
//           await this.page!.getByPlaceholder('Data de validade').fill(expire_date);
//           await this.page!.getByPlaceholder('Senha').fill(password);
//           await this.page!.getByLabel(type).check();
//           await this.page!.locator('button:text("Cadastrar")').click();
//       }
//   );

// When('o usuário confirma clicando em {string}', async function (this: ICustomWorld) {
//     await this.page!.locator('button:text(choice)').click();
// });

// Then('ele visualiza a mensagem {string}', async function (this: ICustomWorld, alert: string) {
//     this.page?.on("dialog", async (alert) => {
//         expect(alert.type()).toContain("alert")
//         expect(alert.message).toContain("Cartão cadastrado com sucesso")

//         await alert.accept()
//     });
// });

// Then('o usuário confirma clicando em "Sim"', async function (this: ICustomWorld) {
//     await this.page!.locator('button:text("Sim")').click();
// });