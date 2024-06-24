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