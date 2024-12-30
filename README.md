# TODOAPP

Este repositório contém uma aplicação backend de TODO list simples, construída em Node.js com Express e utilizando um banco de dados PostgreSQL. Trata-se de um projeto introdutório para quem está começando no desenvolvimento backend.

## Sumário
1. [Visão geral](#visão-geral)
2. [Pré-requisitos](#pré-requisitos)
3. [Instalação e configuração do ambiente](#instalação-e-configuração-do-ambiente)
   - [Instalar Node.js e npm](#instalar-nodejs-e-npm)
   - [Instalar e configurar o PostgreSQL](#instalar-e-configurar-o-postgresql)
4. [Clonar este repositório](#clonar-este-repositório)
   - [Instalar as dependências](#instalar-as-dependências)
   - [Configurar o banco de dados](#configurar-o-banco-de-dados)
   - [Rodar a aplicação](#rodar-a-aplicação)
5. [Rotas (endpoints)](#rotas-endpoints)
6. [Recursos adicionais](#recursos-adicionais)

## Visão geral

A aplicação consiste em uma API REST simples que permite efetuar operações de CRUD (Create, Read, Update, Delete) em uma tabela de tarefas. Ela serve como um exemplo prático para quem está iniciando no mundo do desenvolvimento de servidores Node.js e na interação com um banco de dados relacional como o PostgreSQL.

## Pré-requisitos

Para seguir o passo a passo, recomenda-se:

- Computador com Windows, Linux ou macOS.
- Acesso à internet para baixar as ferramentas necessárias.
- Algumas noções básicas de linha de comando (abrir terminal, navegar em pastas, etc.).

## Instalação e configuração do ambiente

### Instalar Node.js e npm

Node.js é a plataforma utilizada para rodar código JavaScript no servidor. O npm (Node Package Manager) é o gerenciador de pacotes padrão que acompanha o Node.

1. Acesse o site oficial do Node.js: https://nodejs.org/pt
2. Baixe a versão recomendada (LTS) para o seu sistema operacional.
3. Siga as instruções de instalação.
4. Para verificar se a instalação foi bem-sucedida, abra o terminal e digite:

```bash
node -v
npm -v
```

Você deverá ver as versões instaladas do Node.js e do npm.

### Instalar e configurar o PostgreSQL

PostgreSQL é o banco de dados relacional utilizado neste projeto.

- Acesse o site oficial: https://www.postgresql.org
- Baixe o instalador adequado ao seu sistema operacional (Windows, Linux ou macOS).
- Siga as instruções de instalação, definindo um usuário e senha para o PostgreSQL. Geralmente, define-se o usuário “postgres” e uma senha a sua escolha.
- Para testar se o PostgreSQL foi instalado corretamente, você pode abrir o psql (CLI) ou usar uma ferramenta gráfica como pgAdmin.
- Para criar o banco de dados, digite no terminal (psql) ou no pgAdmin:

```sql
CREATE DATABASE oficina_db;
```

- Para criar a tabela de tarefas, execute o script SQL abaixo:

```sql
CREATE TABLE IF NOT EXISTS tasks (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
completed BOOLEAN DEFAULT false
);
```

## Clonar este repositório

Caso você queira clonar este repositório para o seu computador, abra o terminal e digite:

```bash
git clone https://github.com/joaomarcosmb/oficina-backend.git
cd oficina-backend
```

### Instalar as dependências

Para instalar as dependências do projeto, abra o terminal na pasta raiz do projeto e digite:

```bash
npm install
```

### Configurar o banco de dados

É importante que você confira (e, se necessário, atualize) as credenciais do banco de dados no arquivo `src/db/index.js`.

- user: o nome de usuário do PostgreSQL (ex.: “postgres”)
- host: se estiver rodando localmente, mantenha “localhost”
- database: o nome do banco criado, por padrão “oficina_db”
- password: a senha escolhida durante a instalação do PostgreSQL
- port: porta padrão do PostgreSQL (5432)

Confirme que os valores batem com a sua configuração local.

### Rodar a aplicação

Após a instalação das dependências e a configuração do banco de dados, você pode rodar a aplicação com o comando:

```bash
npm start
```

O servidor será iniciado por padrão na porta 8000. Se tudo estiver correto, você verá algo como:

```bash
Servidor rodando na porta 3000
```

## Rotas (endpoints)

- Criar uma tarefa (POST): `http://localhost:3000/tasks`
    - Corpo da requisição (Body):
    ```json
    {
        "title": "Criar planejamento para oficina"
    }
    ```
    - Retorno esperado: a tarefa criada, com o id gerado automaticamente.
- Listar tarefas (GET): `http://localhost:3000/tasks`
    - Retorno esperado: um array com todas as tarefas cadastradas.
- Editar uma tarefa (PUT): `http://localhost:3000/tasks/:id`
    - Corpo da requisição (Body):
    ```json
    {
        "title": "Criar planejamento para oficina",
        "completed": true
    }
    ```
    - Retorno esperado: a tarefa atualizada.
- Deletar uma tarefa (DELETE): `http://localhost:3000/tasks/:id`
    - Retorno esperado: mensagem de sucesso.

## Recursos adicionais
- [Documentação do Node.js](https://nodejs.org/docs/latest/api/)
- [Documentação do Express](https://expressjs.com/pt-br/)
- [Documentação do PostgreSQL](https://www.postgresql.org/docs/)