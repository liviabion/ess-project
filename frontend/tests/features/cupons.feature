Feature: Cadastro e manutenção de cupons
    Como um administrador da loja
    Eu quero adicionar cupons na minha plataforma
    Para que eu os usuários possam utiliza-los

    Scenario: Cadastro de cupom
        Given eu estou na página de cupons
        When eu seleciono o botão “+”
        And eu preencho o formulário com os seguintes dados: name com "CUPOM40", discount com "40%", start_date com "11-03-2024", end_date com "23-03-2024" e aperto o botão "Confirmar"
        Then a página deverá ser recarregada
