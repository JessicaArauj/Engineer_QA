            #language: pt

            Funcionalidade: Tela de login
            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma  
            Para visualizar meus pedidos


            Contexto:
            Dado que eu acesse a página de autenticação da loja EBAC-SHOP

            Cenário: Autenticação válida
            Quando eu digitar o usuário "jessicateixeiraaraujo@gmail.com"
            E a senha "8161je"
            E clicar no botão "login"
            Então deve redirecionar-me para a "tela de checkout"

            Cenário: Usuário inexistente
            Quando eu digitar o usuário "abcd@gmail.com"
            E a senha "8161je"
            E clicar no botão "login"
            Então deve exibir uma mensagem de erro "Usuário ou senha inválidos"

            Esquena do Cenário: Autenticar multiplos usuários ou senha inválidos
            Quando eu digitar o <usuário>
            E a <senha>
            E clicar no botão <login>
            Então deve exibir a <mensagem> de erro

            Exemplos:
            | usuário             | senha    |  login  | mensagem                     |
            | "abeehcd@gmail.com" | "8161je" | "login" | "Usuário ou senha inválidos" |
            | "jrrruyt@gmail.com" | "abcdje" | "login" | "Usuário ou senha inválidos" |
            | "detsnjn@gmail.com" | "1545je" | "login" | "Usuário ou senha inválidos" |
            | "angrrhn@gmail.com" | "445155" | "login" | "Usuário ou senha inválidos" |
            | "eyr67wg@gmail.com" | "yrrhg6" | "login" | "Usuário ou senha inválidos" |




