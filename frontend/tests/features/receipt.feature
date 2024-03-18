Feature: Comprovante de pedido
    Como um usuário do site
    Eu quero poder visualizar os detalhes do meu pedido
    Para que eu possa garantir que o meu pedido foi confirmado

Scenario: Visualizar detalhes do pedido confirmado
    Given o usuário realizou um pedido "Produto X" e está na página "/receipt"
    Then o usuário deve ver os detalhes do pedido, incluindo o nome do usuário "João", o nome do produto "Produto X", a quantidade 2 e o preço total 50 reais
