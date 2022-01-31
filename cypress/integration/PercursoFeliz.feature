Feature: Login site

    Scenario Outline: Scenario Outline name: Login
        Given que o usuário acessa o site
        And clica em login
        When digita seu e-mail e senha cadastrados <email> <senha>
        Then ele deve conseguir acessar a plataforma

Examples:
    | email | senha | 
    | teste@teste3.com  | 123456  | 