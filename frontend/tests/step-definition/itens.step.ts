import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ICustomWorld } from "../support/custom-world";

// cenário: adicionar item

Given("eu estou na página de itens", async function (this: ICustomWorld) {
  await this.page!.goto("http://localhost:3000/itens");
});

When("eu seleciono “+”", async function (this: ICustomWorld) {
    await this.page!.click('img[alt="Adicionar"]');
});

When(
  "eu preencho o formulário com os seguintes dados: name com {string}, price com {string}, category com {string}, description com {string}, image com {string}, colors com {string}, sizes com {string}, amount com {string} e aperto o botão “Check”",
    async function (
        this: ICustomWorld,
        name: string,
        price: string,
        category: string,
        description: string,
        image: string,
        colors: string,
        sizes: string,
        amount: string
    ) {
        await this.page!.fill('input[name="name"]', name);
        await this.page!.fill('input[name="category"]', category);
        await this.page!.fill('input[name="price"]', price);
        await this.page!.fill('input[name="amount"]', amount);
        await this.page!.fill('input[name="sizes"]', sizes);
        await this.page!.fill('input[name="image"]', image);
        await this.page!.fill('input[name="colors"]', colors);
        await this.page!.fill('textarea[name="description"]', description);
        await this.page!.click('button[type="submit"]');
    }
);
    
// cenário: editar item


    When("eu seleciono o item {string} e clico na imagem do lápis", async function (this: ICustomWorld, item: string) {
        await this.page!.click(`img[alt="Look ${item}"]`);
        await this.page!.click('img[alt="Editar"]');
    });

    When(
        "eu preencho o formulário com o seguintes dado: amount com {string} e aperto o botão “Check”",
        async function (this: ICustomWorld, amount: string) {
            await this.page!.fill('input[name="amount"]', amount);
            await this.page!.click('button[type="submit"]');
        }
    );

    Then ("deve aparecer um alert escrito {string}", async function (this: ICustomWorld, alert: string) {
        this.page?.on("dialog", async (alert) => {
            expect(alert.type()).toContain("alert")
            expect(alert.message).toContain(alert)
    
            await alert.accept()
        });
    });
