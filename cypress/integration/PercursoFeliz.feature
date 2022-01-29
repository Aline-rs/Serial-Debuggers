Feature: Login site

    Scenario: Login
        Given que o usuário acessa o site
        And clica em login
        When digita seu e-mail e senha cadastrados
        Then ele deve conseguir acessar a plataforma