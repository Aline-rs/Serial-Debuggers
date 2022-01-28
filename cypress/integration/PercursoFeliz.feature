Feature: Login site CWI

    Scenario: Visualizar opção de recuperar senha esquecida
        Given que o usuário acessa o site
        And clica em login
        When digita seu e-mail e senha cadastrados
        Then ele deve conseguir acessar a plataforma

--------------------------------------------

Feature: Registro na plataforma

    Scenario: registro válido
        Given que o usuário está na tela de registro
        When digita os dados válidos
        Then ele deve conseguir se cadastrar na plataforma

--------------------------------------------
Feature: Adicionar produto ao carrinho

    Scenario: Produto adicionado
        Given que o usuário está na tela de produtos
        When ele clica em adicionar
        Then o item deve ir para o carrinho de compras

--------------------------------------------
Feature: Realizar checkout

    Scenario: Finalizando compra
        Given que o usuário está na tela de checkout
        And o mesmo confirma seus dados
        When ele clica em confirmar
        Then a compra é finalizada com sucesso

--------------------------------------------
Feature: Logout

    Scenario: Finalizando sessão
        Given que o usuário está em qualquer tela
        When ele clicar em logout
        Then seu acesso é encerrado