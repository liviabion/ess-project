import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import axios from 'axios';

Given("eu estou na página {string}", (page: string) => {
    cy.visit(page);
});
When("eu seleciono {string}", (button: string) => {
    cy.getDataCy(button).click();
});    

When("eu preenchoco campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});

When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu seleciono {string}", (button: string) => {
    cy.getDataCy(button).click();
});  
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu preencho o campo de {string} com {string}", (field: string, value: string) => {
    cy.getDataCy(field).type(value);
});
When("eu seleciono {string}", (button: string) => {
    cy.getDataCy(button).click();
});  
When("eu seleciono {string}", (button: string) => {
    cy.getDataCy(button).click();
});  

Then("eu vejo uma mensagem de {string}", (message: string) => {
    cy.getDataCy('success-message').should('contain', message);
});
