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
- instalar POSTGRES com o comando => docker run --name my-postgres -e POSTGRES_PASSWORD=1403 -d -p 5432:5432 postgres
- criando o banco de dados com os comandos abaixo:
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

alter table address 
add constraint fk_address_person
foreign key (person_id)
references person(id);

create table "user" (
id serial primary key,
username varchar(255) not null,
password varchar(255) not null
);

alter table person
add column user_id int unique,
add constraint fk_user_id foreign key (user_id) references "user"(id);

- 

