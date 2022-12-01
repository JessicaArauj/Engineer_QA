            #language: pt

            Funcionalidade: Tela de Checkout
            Como cliente da EBAC-SHOP
            Quero fazer concluir meu cadastro   
            Para finalizar minha compra

            Contexto:
            Dado que eu acesse a página de checkout da loja EBAC-SHOP para finalização de compra

            Cenário: Checkout válido
            Quando eu digitar nome "Jessica"
            E digitar sobrenome "Teixeira Araujo"
            E selecionar país "Brasil"
            E digitar endereço "Passagem A, nº 00"
            E digitar cidade "Teste"
            E digitar cep "60821-354"
            E digitar telefone "(21)98161-8930"
            E digitar e-mail "jessicateixeiraaraujo@gmail.com"
            E clicar no botão "finalizar compra"
            Então deve exibir a "tela de confirmação do pedido"

            Cenário: Checkout inválido
            Quando eu digitar nome "Jessica"
            E digitar sobrenome "Teixeira Araujo"
            E selecionar país "Brasil"
            E digitar endereço "Passagem A, nº 00"
            E digitar cidade "Teste"
            E digitar cep "60821-354"
            E digitar telefone "(21)98161-8930"
            E digitar e-mail "jessicateixgmail.com"
            E clicar no botão "finalizar compra"
            Então deve exibir mensagem de erro "E-mail inválido"

            Cenário: Checkout inválido
            Quando eu digitar nome "campo vazio"
            E digitar sobrenome "campo vazio"
            E selecionar país "campo vazio"
            E digitar endereço "campo vazio"
            E digitar cidade "campo vazio"
            E digitar cep "campo vazio"
            E digitar telefone "campo vazio"
            E digitar e-mail "campo vazio"
            E clicar no botão "finalizar compra"
            Então deve exibir mensagem de erro "Para a finalização do pedido deve-se preencher corretamente os campos obrigátorios indicados acima"

            Esquena do Cenário: Autenticar multiplos checkouts válidos
            Quando eu digitar <nome> 
            E digitar <sobrenome> 
            E selecionar <país> 
            E digitar <endereço> 
            E digitar <cidade> 
            E digitar <telefone> 
            E digitar <e-mail>
            E clicar no botão <finalizar compra>
            Então deve exibir <tela de confirmação do pedido>

            Exemplos: 
            | nome | sobrenome | país | endereço | cidade | cep | telefone | e-mail | finalizar compra | tela de confirmação do pedido |
            | "jessica" | "teixeira araujo" | "Brasil" | "Passagem A, nº 00" | " Teste" | "60821-354" | "(21)98161-8930" | "jessicateixeiraaraujo@gmail.com" | finalizar compra | tela de confirmação do pedido |
            | "joão" | "alencar araujo" | "Brasil" | "Rua X, nº 9998" | " Plano" | "60821-388" | "(21)98161-8972" | "joaoaraujo@gmail.com" | finalizar compra | tela de confirmação do pedido |
            | "vanessa" | "moura araujo" | "Brasil" | "Travessa C, nº 05" | " Auditoria" | "60001-388" | "(21)98548-8972" | "vanessamoura@gmail.com" | finalizar compra | tela de confirmação do pedido |