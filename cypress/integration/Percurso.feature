Feature: Percurso Usuário

    Scenario: Usuário realiza o percurso completo no site
        Given que o usuario acessa o site
        And realiza o registro
	    And vai ate o produto desejado e adiciona ao carrinho
        When realizar o checkout das compras
        Then ele deve concluir a compra com sucesso
