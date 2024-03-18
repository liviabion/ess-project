import { Given, When, Then} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ICustomWorld } from "../support/custom-world";

// cenário: adicionar uma promoção

Given("eu estou na página de categorias",{timeout: 15000}, async function (this: ICustomWorld) {
  await this.page!.goto("http://localhost:3000/categorias");
});

When ('eu seleciono o botão "sale"', async function (this: ICustomWorld) {
    await this.page!.click('img[alt="Icone de sale"]');
});

When ('eu seleciono o botão de mais "+"', async function (this: ICustomWorld) {
    await this.page!.click('img[alt="Icone de mais"]');
});

When(
  "eu preencho o formulário com: category com {string}, discount com {string}, start_date com {string}, end_date com {string} e aperto o botão Confirmar"
  ,{timeout: 15000}, async function (
        this: ICustomWorld,
        category: string,
        discount: string,
        start_date: string,
        end_date: string

    ) {
        await this.page!.fill('input[name="category"]', category);
        await this.page!.fill('input[name="discount"]', discount);
        await this.page!.fill('input[name="start_date"]', '2024-03-11');
        await this.page!.fill('input[name="end_date"]', '2024-03-23');
        await this.page!.click('button[type="submit"]');
    }
);

Then("a página deverá ser recarregada para a visualização de novas promoções", async function (this: ICustomWorld) {
    await expect(this.page!).toHaveURL(`http://localhost:3000/categorias`);
});


