Feature: Percurso Usuário

    Scenario Outline: Usuário realiza o percurso completo no site
        Given que o usuario acessa o site
        And realiza o registro <username> <lastname> <dia> <mes> <ano> <email> <companhia> <senha>
	    And vai ate o produto desejado e adiciona ao carrinho
        When realizar o checkout das compras
        Then ele deve concluir a compra com sucesso <pais> <caixaCidadeVar> <caixaEndereco1Var> <caixaEndereco2Var> <caixaCepVar> <caixaTelefoneVar> <seletorTipoCartaoVar> <caixaNomeDonoCartaoVar> <caixaNumeroCartaoVar> <seletorDataExpiraMesVar> <seletorDataExpiraAnoVar> <caixaCvcCartaoVar>

        Examples:
            | pais   | username| lastname | dia | mes | ano  | email           | companhia | senha  | caixaCidadeVar | caixaEndereco1Var | caixaEndereco2Var | caixaCepVar | caixaTelefoneVar | seletorTipoCartaoVar | caixaNomeDonoCartaoVar | caixaNumeroCartaoVar | seletorDataExpiraMesVar | seletorDataExpiraAnoVar | caixaCvcCartaoVar |
            | Brazil | Aline   | Rosa     | 8   | 2   | 1999 | tujhe@teste.com | Anima     | 123456 | Porto Alegre   | Rua das Laranjas  | 158               | 90000000    | 51987654321      | Master card          | Nome do Dono do Cartão | 0000000000000000     | 03                      | 2028                    | 000               |
