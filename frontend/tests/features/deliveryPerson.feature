Feature: Cadastro e Manutenção dos entregadores

Scenario: Cadastro de entregador
    Given eu estou na página de entregadores
    When eu seleciono "+"
    When eu preencho o campo de "Nome" com "Bea"
    When eu preencho o campo de "CPF" com "12345678900"
    When eu preencho o campo de "Telefone" com "81900000000"
    When eu preencho o campo de "Email" com "bea@example.com"
    When eu clico em "Endereço"
    When eu preencho o campo de "CEP" com "00000000"
    When eu preencho o campo de "Rua" com "Rua das Flores"
    When eu preencho o campo de "Cidade" com "Cidade Exemplo"
    When eu preencho o campo de "Bairro" com "Bairro Exemplo"
    When eu preencho o campo de "Numero" com "123"
    When eu preencho o campo de "Estado" com "Pernambuco"
    When eu preencho o campo de "Complemento" com "Apartamento 101"
    When eu preencho o campo de "Referencia" com "Próximo à praça central"
    When eu clico na opção "Adicionar"
    When eu confirmo com a opção "Sim" 
    Then eu vejo uma mensagem de "Entregador cadastrado com sucesso"

Scenario: Falha em cadastro de entregador
    Given eu estou na página de entregadores
    When eu seleciono o botao com "+"
    When eu preencho o campo "Nome" com "João"
    When eu preencho o campo "CPF" com "12345678900"
    When eu preencho o campo "Telefone" com "81999999999"
    When eu preencho o campo "Email" com "joao@example.com"
    When eu clico no campo de "Endereço"
    When eu preencho o campo "Cep" com "11111111"
    When eu preencho o campo "Rua" com "Rua das Palmeiras"
    When eu preencho o campo "Cidade" com "Cidade Nova"
    When eu preencho o campo "Bairro" com "Bairro Novo"
    When eu preencho o campo "Numero" com "456"
    When eu preencho o campo "Estado" com "Bahia"
    When eu preencho o campo "Complemento" com "Apartamento 202"
    When eu preencho o campo "Referencia" com "Próximo ao mercado local"
    When eu clico na opção de "Adicionar" 
    Then eu vejo uma mensagem "Ocorreu um erro ao cadastrar o entregador (Esse CPF ja foi registrado)"

Scenario: Mudança de característica
    Given eu estou na página de entregadores
    When eu seleciono o botao de "CPF"
    When eu pesquiso em "Digite o CPF", "12345678900"
    When eu clico na imagem da seta
    When eu seleciono em "Editar Dados"
    When eu digito "Paula" no campo "Nome" 
    When eu clico no botao "Atualizar"
    When eu marco "Sim"
    Then eu vejo a mensagem "Dados atualizados" 

Scenario: Falha para encontrar entregador
     Given eu estou na página de entregadores
     When eu seleciono o botao "CPF"
     When eu pesquiso em "Digite o CPF", o cpf inválido "0"
     When eu clico no icone de seta
     Then eu vejo a mensagem de "Usuario nao encontrado"
