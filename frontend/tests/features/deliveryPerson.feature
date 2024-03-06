Feature: Cadastro e Manutenção dos entregadores
Como uma companhia de delivery
Eu quero registrar meus profissionais entregadores na minha plataforma
Para que eu possa gerenciar meus trabalhadores

Scenario: Cadastro de entregador
Given eu estou na página './deliveryPerson'
And eu vejo a opção “+”
When eu seleciono “+”
And eu preencho “nome” com “Bea”, “CPF” com “12345678”, “telefone” com “987654321”, “email” com “bea@example.com”, "cep" com "123" “rua” com “Rua das Flores”, “cidade” com “Cidade Exemplo”, “bairro” com “Bairro Exemplo”, “numero” com “123”, “estado” com “Estado Exemplo”, “complemento” com “Apartamento 101”, “referencia” com “Próximo à praça central”
And eu seleciono “salvar”
Then eu vejo uma mensagem de “Entregador Criado”

Scenario:  Falha Cadastro de entregador
Given eu estou na página "criação e manuntenção de perfis dos entregadores"
And existe um entregador com cpf "12345678"
And eu vejo a opção “+”
When eu seleciono “+”
And eu preencho “nome” com “Bea”, “CPF” com “12345678”, “telefone” com “987654321”, “email” com “bea@example.com”, "cep" com "123" “rua” com “Rua das Flores”, “cidade” com “Cidade Exemplo”, “bairro” com “Bairro Exemplo”, “numero” com “123”, “estado” com “Estado Exemplo”, “complemento” com “Apartamento 101”, “referencia” com “Próximo à praça central”
And eu seleciono “salvar”
Then eu vejo uma mensagem de “Cpf ja registrado”


Scenario: Mudança de caracteristicas

Given eu estou na página "criação e manuntenção de perfis dos entregadores"
And existe um entregador com cpf "12345678"
And eu vejo a opção "CPF"
And eu seleciono “CPF”
And eu digito “12345679”
And eu vejo a opção “editar perfil"
When eu seleciono “editar perfil”
And escrevo o nome "Fred" na opção "Bea"
And eu seleciono “salvar”
Then eu vejo uma mensagem de “Dados atualizados!”


Scenario: Falha mudança de caracteristicas

Given eu estou na página "criação e manuntenção de perfis dos entregadores"
And nao existe um entregador com cpf "12345679"
And eu vejo a opção "CPF"
And eu seleciono “CPF”
When eu digito “12345679”
Then eu vejo uma mensagem de “User not found”