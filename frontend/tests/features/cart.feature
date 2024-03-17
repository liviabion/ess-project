Feature: Carrinho de compras
    Como um usuário do site
    Eu quero poder adicionar e remover itens de forma personalizada no meu carrinho
    Para que eu possa gerir e visualizar os itens no meu carrinho

Scenario: Adicionar um item ao carrinho
    Given o usuário está na página "/item/1"
    And o nome do item seja "Blusa Polo"
    When o usuário clica no botão com o texto "Adicionar ao carrinho"
    And clica no botão com o texto "Ir para o carrinho"
    Then o usuário deverá ser redirecionado para a página "/cart"
    And deverá aparecer o item de nome "Blusa Polo" 

Scenario: Aumentar a quantidade de um item no carrinho
    Given o usuário está na página "/cart"
    And é possível ver um item de nome "Blusa Polo" e o preço "50" reais
    When o usuário clica no botão "+" ao lado do item de nome "Blusa Polo"
    Then o preço do item de nome "Blusa Polo" deve se tornar "100" reais
    And o valor total deve aumentar em "50" reais

Scenario: Remover um item do carrinho
    Given o usuário está na página "/cart"
    And é possível ver um item de nome "Blusa Polo"
    When o usuário clica na imagem de "lixeiro" ao lado do item de nome "Blusa Polo"
    Then o item de nome "Blusa Polo" não deve ser mais visto nessa página   