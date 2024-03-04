Feature: Cadastro e Manutenção dos entregadores
Como uma companhia de delivery
Eu quero registrar meus profissionais entregadores na minha plataforma
Para que eu possa gerenciar meus trabalhadores

Scenario: Cadastro de entregador
  Given eu estou na página "criação e manuntenção de perfis dos entregadores"
  And eu vejo a opção “+”
  When eu seleciono “+”
  And eu preencho “nome” com “Bea”
  And eu preencho “CPF” com “12345678”
  And eu preencho “telefone” com “987654321”
  And eu preencho “email” com “bea@example.com”
  And eu preencho “rua” com “Rua das Flores”
  And eu preencho “cidade” com “Cidade Exemplo”
  And eu preencho “bairro” com “Bairro Exemplo”
  And eu preencho “numero” com “123”
  And eu preencho “estado” com “Estado Exemplo”
  And eu preencho “complemento” com “Apartamento 101”
  And eu preencho “referencia” com “Próximo à praça central”
  And eu seleciono “salvar”
  Then eu vejo uma mensagem de “Entregador Criado”

Scenario: Cadastro de entregador
  Given eu estou na página "criação e manuntenção de perfis dos entregadores"
  And existe um entregador com cpf "12345678"
  And eu vejo a opção “+”
  When eu seleciono “+”
  And eu preencho “nome” com “Paula”
  And eu preencho “CPF” com “12345678”
  And eu preencho “telefone” com “987654321”
  And eu preencho “email” com “paula@example.com”
  And eu preencho “rua” com “Rua das Flores”
  And eu preencho “cidade” com “Cidade Exemplo”
  And eu preencho “bairro” com “Bairro Exemplo”
  And eu preencho “numero” com “123”
  And eu preencho “estado” com “Estado Exemplo”
  And eu preencho “complemento” com “Apartamento 101”
  And eu preencho “referencia” com “Próximo à praça central”
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
And eu preencho “nome” com “Fred”
And eu seleciono “salvar”
Then eu vejo uma mensagem de “User updated”


Scenario: Falha udança de caracteristicas

Given eu estou na página "criação e manuntenção de perfis dos entregadores"
And nao existe um entregador com cpf "12345679"
And eu vejo a opção "CPF"
And eu seleciono “CPF”
When eu digito “12345679”
Then eu vejo uma mensagem de “User not found”