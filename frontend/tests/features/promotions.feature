Feature: Cadastro e manutenção de promoções
    Como um administrador da loja
    Eu quero adicionar promoções na minha plataforma
    Para que os itens das minhas lojas possam ser vendidos com desconto

    Scenario: Cadastro de promoção
        Given eu estou na página de categorias
        When eu seleciono o botão "sale"
        When eu seleciono o botão de mais "+"
        And eu preencho o formulário com: category com 'BLUSAS', discount com '40%', start_date com '11-03-2024', end_date com '17-03-2024' e aperto o botão "Confirmar"
        Then a página deverá ser recarregada para a visualização de novas promoções