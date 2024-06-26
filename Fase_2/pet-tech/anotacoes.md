# === ANOTAÇÕES IMPORTANTES ===

- criar pasta do projeto
- iniciar o projeto com npm init -y
- instalar libs => npm i -D @types/node tsup tsx typescript fastify
- instalar Fastify => npm i fastify
- instalar dotenv => npm i dotenv
- criar pasta src
- criar arquivo .npmrc para fixar as versões das libs do projeto => save-exact=true
- retirar o ^ das libs
- em src, criar os arquivos app.ts e server.ts
- em app.ts, imprtar fastify
- em server.ts, importar o nosso app
- instalar zod para validar schema => npm i -D zod
- em src, criar pasta env
- em  env, criar arquivo index.ts 
- em index.ts, importar dotenv e configurar nosso dotenv
- em server.ts, importar nosso env
- instalar eslint e libs para controlar a qualidade do código 
    - npm i -D @typescript-eslint/eslint-plugin@6.21.0 @typescript-eslint/parser@6.21.0 eslint@8.57.0 eslint-config-prettier@9.1.0 eslint-config-standard@17.1.0 eslint-plugin-import@2.29.1 eslint-plugin-n@16.6.2 eslint-plugin-prettier@5.1.3 eslint-plugin-promise@6.1.1 prettier@3.2.5