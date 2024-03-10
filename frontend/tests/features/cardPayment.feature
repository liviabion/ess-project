Feature: Cadastro e manuntenção de métodos de pagamento
    As a usuário José
    I want to conseguir cadastrar, atualizar e remover meus métodos de pagamento no sistema
    So that eu possa confirmar o pagamento dos produtos

Scenario: Cadastro de cartão de crédito com sucesso
Given o usuário está na página "./newCardPayment"
Given não existe cartão de crédito cadastrado com número "1234 5678 9101 1121", nome de titular "José", CVV "999", data de validade "2/25", senha "13456" e tipo "credit"
When ele clica em "+"
When digita nos campos número "1234 5678 9101 1121", nome de titular "José", CVV "999", data de validade "2/25", senha "13456" e seleciona "Credit"
When o usuário clica em "Cadastrar" e confirma clicando em "Sim"
Then ele visualiza a mensagem "Cartão cadastrado com sucesso"
Then ele é redirecionado para a página "./cardPayment"
Then o cartão "1234 5678 9101 1121" aparece na lista de cartões disponíveis

Scenario: Cadastro de cartão de crédito repetido
Given o usuário "José" está logado como cliente
Given está na página "./newCardPayment"
Given existe cartão de crédito cadastrado com número "1234 5678 9101 1121", nome de titular "José", CVV "999", data de validade "2/25", senha "13456" e tipo "credit"
When ele clica em "+"
When digita nos campos número "1234 5678 9101 1121", nome de titular "José", CVV "999", data de validade "2/25", senha "13456" e seleciona "Credit"
When o usuário "José" clica em "Cadastrar" e confirma clicando em "Sim"
Then ele visualiza a mensagem "Esse cartão já está cadastrado"
Then ele permanece na página "./newCardPayment"

Scenario: Cadastro de cartão de crédito incompleto
Given o usuário "José" está logado como cliente
Given está na página "./newCardPayment"
Given existe cartão de crédito cadastrado com número "1234 5678 9101 1121", nome de titular "José", CVV "999", data de validade "2/25", senha "13456" e tipo "credit"
When ele clica em "+"
When digita nos campos número "1234 5678 9101 1121", nome de titular "José", CVV "999", data de validade "2/25", senha em branco e seleciona "Credit"
When o usuário "José" clica em "Cadastrar" e confirma clicando em "Sim"
Then ele visualiza a mensagem "Preencha todos os campos antes de adicionar."
Then ele permanece na página "./newCardPayment"

Scenario: Remoção de um método de pagamento
Given o usuário "José" está logado como cliente
Given está na tela "./cardPayment"
Given existe cartão de crédito cadastrado com número "1234 5678 9101 1121", nome de titular "José", CVV "999", data de validade "2/25" e senha "13456" 
When ele seleciona o cartão de número "1234 5678 9101 1121" e tipo "credit"
When ele seleciona a opção "Remover cartão" e confirma clicando em "Sim"
Then ele vê uma mensagem "Cartão removido com sucesso!"
And o cartão "1234 5678 9101 1121" é removido da lista de cartões disponíveis
