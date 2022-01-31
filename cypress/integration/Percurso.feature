Feature: Percurso Usuário

    Scenario Outline: Scenario Outline name: Usuário realiza o percurso completo no site
        Given que o usuario acessa o site
        And realiza o registro <username> <lastname> <dia> <mes> <ano> <email> <companhia> <senha>
	    And vai ate o produto desejado e adiciona ao carrinho
        When realizar o checkout das compras
        Then ele deve concluir a compra com sucesso

        Examples:
            | username| lastname | dia | mes | ano  | email           | companhia | senha  |
            | Aline   | Rosa     | 8   | 2   | 1999 | teste@teste.com | Anima     | 123456 |
