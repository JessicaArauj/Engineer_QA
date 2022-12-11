#language: pt

            Funcionalidade: Configurar produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho, gosto e quantidade
            Para depois inserir no carrinho


            Contexto:
            Dado que eu acesse a página de um produto da loja EBAC-SHOP

            Cenário: Inclusão válida
            Quando eu selecionar a cor "blue", tamanho "M" e quantidade "5"
            Então deve exibir uma mensagem de inclusão no carrinho "Produto inserido com sucesso"

            Cenário: Inclusão inválida
            Quando eu selecionar a cor "sem preenchimento", tamanho "M" e quantidade "5"
            Então deve exibir uma mensagem de inclusão no carrinho "Erro ao inserir produto no carrinho. Verifique a seleção da cor produto."

            Cenário: Inclusão inválida
            Quando eu selecionar a cor "blue", tamanho "sem preenchimento", quantidade "5"
            Então deve exibir uma mensagem de inclusão no carrinho "Erro ao inserir produto no carrinho. Verifique a seleção do tamanho produto."

            Cenário: Inclusão inválida
            Quando eu selecionar a cor "blue", tamanho "L", quantidade "15"
            Então deve exibir uma mensagem de inclusão no carrinho "Erro ao inserir produto no carrinho. Verifique a quantidade do produto."
           
            Esquena do Cenário: Autenticar multiplas configurações de produto
            Quando eu selecionar <cor>, <tamanho>, <quantidade>
            Então deve exibir a <mensagem> de inclusão no carrinho

            Exemplos:
            | cor       | tamanho   | quantidade   | mensagem|
            | "Blue" | "S" | "3" | "Produto inserido com sucesso"|
            | " " | "S" | "3" | "Erro ao inserir produto no carrinho. Verifique a seleção da cor produto."|
            | "Blue" | " " | "5" | "Erro ao inserir produto no carrinho. Verifique a seleção do tamanho produto"|
            | "Blue" | "L" | "" | "Erro ao inserir produto no carrinho. Verifique a quantidade do produto."|
            
            
