#language: pt

            Funcionalidade: Configurar produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho


            Contexto:
            Dado que eu acesse a página de um produto da loja EBAC-SHOP

            Cenário: Inclusão válida
            Quando eu selecionar a cor "blue"
            E selecionar o tamanho do produto "M"
            E inserir a quantidade "5"
            E devo clicar no botão "comprar"
            Então deve exibir uma mensagem de inclusão no carrinho "Produto inserido com sucesso"

            Cenário: Inclusão inválida
            Quando eu selecionar a cor "sem preenchimento"
            E selecionar o tamanho do produto "M"
            E inserir a quantidade "5"
            E devo clicar no botão "comprar"
            Então deve exibir uma mensagem de inclusão no carrinho "Erro ao inserir produto no carrinho. Verifique a seleção da cor produto."

            Cenário: Inclusão inválida
            Quando eu selecionar a cor "blue"
            E selecionar o tamanho do produto "sem preenchimento"
            E inserir a quantidade "5"
            E devo clicar no botão "comprar"
            Então deve exibir uma mensagem de inclusão no carrinho "Erro ao inserir produto no carrinho. Verifique a seleção do tamanho produto."

            Cenário: Inclusão inválida
            Quando eu selecionar a cor "blue"
            E selecionar o tamanho do produto "L"
            E inserir a quantidade "15"
            E devo clicar no botão "comprar"
            Então deve exibir uma mensagem de inclusão no carrinho "Erro ao inserir produto no carrinho. Verifique a quantidade do produto."
           
            Esquena do Cenário: Autenticar multiplas configurações de produto
            Quando eu selecionar <cor>
            E a escolher <tamanho>
            E inserir a <quantidade>
            E clicar no botão <comprar>
            Então deve exibir a <mensagem> de inclusão no carrinho

            Exemplos:
            | cor       | tamanho   | quantidade      | comprar | mensagem|
            | "Blue" | "S" | "3" | "Comprar"|"Produto inserido com sucesso"|
            | "Blue" | "M" | "5" | "Comprar"|"Produto inserido com sucesso"|
            | "Blue" | "L" | "10" | "Comprar"|"Produto inserido com sucesso"|
            | "Orange" | "S" | "3" | "Comprar"|"Produto inserido com sucesso"|
            | "Orange" | "M" | "5" | "Comprar"|"Produto inserido com sucesso"|
            | "Orange" | "L" | "10" | "Comprar"|"Produto inserido com sucesso"|
            | "Red" | "S" | "3" | "Comprar"|"Produto inserido com sucesso"|
            | "Red" | "M" | "5" | "Comprar"|"Produto inserido com sucesso"|
            | "Red" | "L" | "10" | "Comprar"|"Produto inserido com sucesso"|