
Feature: Cadastro e manutenção de itens no menu
    Como um administrador da loja
    Eu quero registrar e alterar os itens na minha plataforma
    Para que eu possa gerenciar meus itens

  Scenario: Cadastro de item
    Given eu estou na página de itens
    When eu seleciono “+”
    And eu preencho o formulário com os seguintes dados: name com "Blusa de POA", price com "49.50", category com "Blusas", description com "Camisa de algodão", image com "https://cdn.awsli.com.br/625/625932/produto/139198255/6cbf73a3ee.jpg", colors com "branco", sizes com "P", amount com "10" e aperto o botão “Check”
    Then a página deve ser recarregada
    
  Scenario: Editar item
    Given eu estou na página de itens
    When eu seleciono o item "Blusa de Alça Floral" e clico na imagem do lápis
    And eu preencho o formulário com o seguintes dado: amount com "12" e aperto o botão “Check”
    Then a página deve ser recarregada
