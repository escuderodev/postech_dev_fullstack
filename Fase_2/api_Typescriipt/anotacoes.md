# === anotações importantes ===

- criando aplicação com os comandos abaixo:
    - npm init -y
    - npm i -D @types/node tsup tsx typescript fastify
    - npm i fastify

- criar arquivo .npmrc para armazenar as configurações do npm
    - não esquecer de remover o ^ das versões das libs no package.json

- criar pasta src
- criar dentro de src o arquivo app.ts com todas as configurações principais para execução da api
- criar dentro de src o server.ts que será o nosso servidor
- instalar lib zod para validação => npm i zod
- instalar dotenv para criar variaveis de ambiente => npm i dotenv
- instalar eslint com o comando abaixo:
    - npm i -D @typescript-eslint/eslint-plugin@6.21.0 @typescript-eslint/parser@6.21.0 eslint@8.57.0 eslint-config-prettier@9.1.0 eslint-config-standard@17.1.0 eslint-plugin-import@2.29.1 eslint-plugin-n@16.6.2 eslint-plugin-prettier@5.1.3 eslint-plugin-promise@6.1.1 prettier@3.2.5
- criar arquivo .eslintrc.json para configurar o eslint
- criar arquivo de configuração do typescript => npx tsc --init

