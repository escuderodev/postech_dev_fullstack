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
- instalar o db postgres com docker => docker run -d -t -e --name mypostgres  POSTGRES_PASSWORD=juan 5432:5432 postgres

## criar banco de dados
create table product (
id uuid primary key,
name varchar(255) not null,
description text,
image_url varchar(255),
price double precision
);

create table category (
id serial primary key,
name varchar(255) not null,
creation_date timestamp without time zone
);

create table product_category (
product_id uuid not null,
category_id serial not null,
primary key (product_id, category_id),
foreign key (product_id) references product (id) on delete cascade,
foreign key (category_id) references category (id) on delete cascade
);

create table address (
id serial primary key,
street varchar(255) not null,
city varchar(255) not null,
state varchar(2) not null,
zip_code varchar(10) not null
);

create table person (
id bigserial primary key,
cpf varchar(11) not null,
name varchar(100) not null,
birth date not null,
email varchar(255) not null
);

alter table address add column person_id bigint not null;

alter table address add constraint fk_address_person foreign key (person_id) references person (id);

create table "user" (
id serial primary key,
username varchar(255) not null,
password varchar(255) not null
);

alter table person 
add column user_id int unique,
add constraint fk_user_id foreign key (user_id) references "user" (id);

## continar anotações
- em src, criar pasta entities
- em entities, criar as entidades necessárias
- criar os repositories
