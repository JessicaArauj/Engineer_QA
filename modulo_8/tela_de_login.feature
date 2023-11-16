            #language: pt

            Funcionalidade: Tela de login
            Como aluno do Portal EBAC
            Quero me autenticar
            Para visualizar minhas notas

            Contexto:
            Dado que eu acesse a página de autenticação do portal EBAC

            Cenário: Autenticação válida
            Quando eu digitar o usuário "jessicateixeiraaraujo@gmail.com"
            E a senha "8161je"
            Então deve exibir uma mensagem de boas vindas "Olá Jessica"

            Cenário: Usuário inexistente
            Quando eu digitar o usuário "abcd@gmail.com"
            E a senha "8161je"
            Então deve exibir uma mensagem de boas vindas "Usuário inexistente"

            Cenário: Usuário com senha inválida
            Quando eu digitar o usuário "jessicateixeiraaraujo@gmail.com"
            E a senha "abcdje"
            Então deve exibir uma mensagem de boas vindas "Usuário ou senha inválida"

            Esquena do Cenário: Autenticar multiplos usuário
            Quando eu digitar o <usuário>
            E a <senha>
            Então deve exibir a <mensagem> de sucesso

            Exemplos:
            | usuário                           | senha    | mensagem      |
            | "jessicateixeiraaraujo@gmail.com" | "8161je" | "Olá Jessica" |
            | "abcd@gmail.com" | "8161je" | "Usuário inexistente" |
            | "jessicateixeiraaraujo@gmail.com" | "abcdje" | "Usuário ou senha inválida" |



