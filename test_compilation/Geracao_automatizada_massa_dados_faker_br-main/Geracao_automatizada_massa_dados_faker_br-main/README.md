# Geracao Automatizada de Dados com Faker-br

Este repositório contém um projeto que gerar dados falsos de forma automatizada usando a biblioteca Faker-br no Node.js.

## Instalação

Para utilizar este projeto, siga os passos abaixo:

Para utilizar este projeto, você pode seguir os passos abaixo:

1. Faça um fork deste repositório.

2. Clone o seu fork para o seu ambiente local usando o seguinte comando:
   ```bash
   git clone https://github.com/seu_usuario/geracao_automatizada_dados_faker_br.git

3. Navegue até o diretório do projeto:
   ```bash
   cd geracao_automatizada_dados_faker_br

4. Instale as dependências necessárias:
   
   ```bash
   npm install
   
    ```bash
  npm install faker-br
 

## Execução

1. Execute o script para gerar dados fictícios:

    ```bash
    node generateData.js
  
6. O script irá gerar 05 usuários de exemplos, os resultados serão exibidos no console.

## Exemplo de Saída

```json
 {
    "email": "Clia11@teste.com",
    "phone": "+55 (51) 2243-0116",
    "documents": {
      "rg_9": 145810386,
      "rg_11": 19736906381,
      "cpf": "08575659405",
      "cnpj": "30043866000104",
      "pis": 35030621499
    },
    "address": {
      "number": 636,
      "zipPostalCodeValid": "72800070"
    }
  }
