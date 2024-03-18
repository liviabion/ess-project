Feature: Comprovante de pedido
    Como um usuário do site
    Eu quero poder visualizar os detalhes do meu pedido
    Para que eu possa garantir que o meu pedido foi confirmado

Scenario: Visualizar detalhes do pedido confirmado
    Given o usuário realizou um pedido "Blusa Polo" e está na página "/receipt"
    Then o usuário deve ver os detalhes do pedido, incluindo o nome do usuário "João", o nome do produto "Blusa Polo", a quantidade "1" e o preço total "30 reais"

