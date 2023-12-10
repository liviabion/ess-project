Feature: Cadastro e manuntenção de métodos de pagamento
    As a usuário X
    I want to conseguir cadastrar, atualizar e remover meus métodos de pagamento no sistema
    So that eu possa confirmar o pagamento dos produtos

Scenario: Cadastro de cartão de crédito com sucesso
Given o usuário X está logado como cliente
And está na tela "Métodos de Pagamento"
When ele seleciona "Novo cartão de crédito"
And digita nos campos X,Y e Z, respectivamente, "X", "Y" e "Z"
Then o usuário X clica em "Cadastrar"
And ele visualiza a mensagem "Cartão cadastrado com sucesso"

Scenario: Cadastro de cartão de crédito inválido
Given o usuário X está logado como cliente
And está na tela "Métodos de Pagamento"
When ele seleciona "Novo cartão de crédito"
And digita nos campos X,Y e Z, respectivamente, "X", "Y" e "Z" incorretamente
Then o usuário X clica em "Cadastrar"
And ele visualiza a mensagem "Cartão inválido. Verifique as informações."

Scenario: Cadastro de cartão de crédito repetido
Given o usuário X está logado como cliente
And está na tela "Métodos de Pagamento"
When ele seleciona "Novo cartão de crédito"
And digita nos campos X,Y e Z, respectivamente, "X", "Y" e "Z"
Then o usuário X clica em "Cadastrar"
And ele visualiza a mensagem "Cartão já cadastrado. Tente outro cartão."

Scenario: Remoção de um método de pagamento
Given o usuário X está logado como cliente
And está na tela "Métodos de Pagamento"
When ele seleciona a opção "Gerenciar métodos de pagamento"
And ele vê e seleciona o cartão "X" de campo "Y"
And ele seleciona a opção "Remover cartão de crédito"
Then o usuário X clica em "Confirmar"
And ele vê uma mensagem "Cartão removido com sucesso"

Scenario: Atualização de um método de pagamento
Given o usuário X está logado como cliente
And está na tela "Métodos de Pagamento"
When ele seleciona a opção "Gerenciar métodos de pagamento"
And ele vê e seleciona o cartão "X" de campo "Y"
And ele seleciona a opção "Atualizar cartão de crédito"
Then o usuário X clica em "Confirmar"
And ele vê uma mensagem "Cartão atualizado com sucesso"
