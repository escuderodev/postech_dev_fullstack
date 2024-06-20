# === ANOTAÇÕES IMPORTANTES ===

- iniciar o projeto com o comando => npm init -y
- instalar as libs iniciais de desenvolvimento
    - npm install -D @types/node tsup tsx typescript
- criar arquivo .npmrc que será responsável por armazenar as configurações do npm
- instalar o web framework fastify = > npm install fastify
- criar a pasta src
- em src, criar os arquivos srver.ts e app.ts
- em app.ts, importar o fastify e exportar o app como instância fastify
- em server.ts, importar o app

- em server.ts definir a porta do servidor conforme abaixo:
app.listen({
    host: '0.0.0.0',
    port: 3000
}).then(() => {
    console.log('Server is running on http://localhost:3000')
});

- instalar a lib ZOD para realizar validação de schema => npm install zod
- instalar a lib dotenv para criar variáveis de ambiente => npm install dotenv
- criar na raiz do projeto os arquivos .env e .env.example
- em src, criar pasta env
- em env, criar arquivo index.ts
- em index.ts, importar as lib's dotenv e zod
- em index.ts, declarar o envSchema
- em server.ts, importar env
- instalar lib eslint em ambiente de desenvolvimento => npm install -D @typescript-eslint/eslint-plugin@6.21.0 @typescript-eslint/parser@6.21.0 eslint@8.57.0 eslint-config-prettier@9.1.0 eslint-config-standard@17.1.0 eslint-plugin-import@2.29.1 eslint-plugin-n@16.6.2 eslint-plugin-prettier@5.1.3 eslint-plugin-promise@6.1.1 prettier@3.2.5
- criar o arquivo .eslintrc.json para configurar eslint
- criar arquivo de configuração do typescript => npx tsc --init