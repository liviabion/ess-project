Feature: Cadastro e manuntenção de métodos de pagamento
    As a usuário José
    I want to conseguir cadastrar, atualizar e remover meus métodos de pagamento no sistema
    So that eu possa confirmar o pagamento dos produtos

Scenario: Cadastro de cartão de crédito com sucesso
    Given o usuário está na página "http://localhost:3000/newCardPayment"
    When preenche os campos card_number "1234 5678 9101 1121", name "José", cvv "999", expire_date "2/25", password "13456", type "Credit" 
    When o usuário clica em "Cadastrar" e em seguida clica em "Sim"
    Then ele visualiza a mensagem "Cartão cadastrado com sucesso"
    Then ele é redirecionado para a página "http://localhost:3000/cardPayment"
    Then o cartão de número "1234 5678 9101 1121" e tipo "Credit" aparece na lista de cartões disponíveis

Scenario: Cadastro de cartão de crédito incompleto
    Given o usuário está na página "http://localhost:3000/newCardPayment"
    When preenche os campos card_number "1234 5678 9101 1121", name "José", cvv "999", expire_date "2/25", password "", type "Credit" 
    When o usuário clica em "Cadastrar"
    Then ele visualiza a mensagem "Preencha todos os campos antes de adicionar."
    Then ele permanece na página "http://localhost:3000/newCardPayment"

Scenario: Remoção de um método de pagamento
    Given o usuário está na tela "http://localhost:3000/cardPayment"
    Given ele visualiza o cartão cadastrado com card_number "1234 5678 9101 1121" e type "Credit"
    When o usuário seleciona o cartão
    When ele seleciona a opção "Remover cartão" e confirma clicando em "Sim"
    Then ele visualiza a mensagem "Cartão removido com sucesso!"

