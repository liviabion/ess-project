Feature: Cadastro e Manutenção dos entregadores

Scenario: Cadastro de entregador
    Given eu estou na página de entregadores
    When eu seleciono "+"
    When eu preencho o campo de "Nome" com "Bea"
    When eu preencho o campo de "CPF" com "12345678900"
    When eu preencho o campo de "Telefone" com "81900000000"
    When eu preencho o campo de "Email" com "bea@example.com"
    When eu clico em "Endereço"
    When eu preencho o campo de "Cep" com "00000000"
    When eu preencho o campo de "Rua" com "Rua das Flores"
    When eu preencho o campo de "Cidade" com "Cidade Exemplo"
    When eu preencho o campo de "Bairro" com "Bairro Exemplo"
    When eu preencho o campo de "Numero" com "123"
    When eu preencho o campo de "Estado" com "pernambuco"
    When eu preencho o campo de "Complemento" com "Apartamento 101"
    When eu preencho o campo de "Referencia" com "Próximo à praça central"
    When eu clico na opção "Adicionar"
    When eu confirmo com a opção "Sim" 
    Then eu vejo uma mensagem de "Entregador cadastrado com sucesso"

