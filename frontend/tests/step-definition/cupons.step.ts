import { Given, When, Then} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ICustomWorld } from "../support/custom-world";

// cenário: adicionar cupom

Given("eu estou na página de cupons",{timeout: 15000}, async function (this: ICustomWorld) {
  await this.page!.goto("http://localhost:3000/cupons");
});

When ("eu seleciono o botão “+”", async function (this: ICustomWorld) {
    await this.page!.click('img[alt="Adicionar"]');
});

When(
  'eu preencho o formulário com os seguintes dados: name com {string}, discount com {string}, start_date com {string}, end_date com {string} e aperto o botão "Confirmar"',
    async function (
        this: ICustomWorld,
        name: string,
        discount: string,
        start_date: string,
        end_date: string

    ) {
        await this.page!.fill('input[name="name"]', name);
        await this.page!.fill('input[name="discount"]', discount);
        await this.page!.fill('input[name="start_date"]', '2024-03-11');
        await this.page!.fill('input[name="end_date"]', '2024-03-23');
        await this.page!.click('button[type="submit"]');
    }
);

Then("a página deverá ser recarregada", async function (this: ICustomWorld) {
    await expect(this.page!).toHaveURL(`http://localhost:3000/cupons`);
});


