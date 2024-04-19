# anotações importantes

- criar a pasta do projeto;
- criar um novo projeto com o comando: npm init -y
- instalar typescript e seu types: npm install typescript @types/typescript
- instalar express para server: npm install express @types/express
- instalar o ts-node: pm install ts-node
- criar arquivo de configuração do typescript: npx tsc --init
    - neste arquivo configurar os itens abaixo:
        - "incremental": true, 
        - "target": "es2016", 
        - "module": "commonjs",
        - "outDir": "./",
        - "esModuleInterop": true,    
        - "strict": true, 
          "include": [
            "src"
            ]
- 
