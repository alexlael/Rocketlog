# Rocketlog

Este repositório contém uma pequena API de controle de entregas. O projeto foi criado com o objetivo de consolidar meus conhecimentos nas tecnologias utilizadas e faz parte da minha jornada para me tornar um desenvolvedor fullstack.

## Tecnologias

- **Node.js** e **Express** para criação da API.
- **TypeScript** para tipagem estática.
- **Prisma** como ORM com **PostgreSQL**.
- **JWT** para autenticação.
- **Jest** e **Supertest** para testes automatizados.

## Estrutura de Pastas

```text
Rocketlog/
├── docker-compose.yml
├── jest.config.js
├── package.json
├── tsconfig.json
├── prisma/
│   ├── schema.prisma
│   └── migrations/
└── src/
    ├── app.ts
    ├── env.ts
    ├── server.ts
    ├── configs/
    ├── controllers/
    ├── database/
    ├── middlewares/
    ├── routes/
    ├── tests/
    ├── types/
    └── utils/
```

## Configuração

1. Copie o arquivo `.env-example` para `.env` e preencha as variáveis `DATABASE_URL`, `JWT_SECRET` e `PORT`.
2. Caso queira subir um banco de dados local, há um `docker-compose.yml` com uma instância PostgreSQL pronta para uso.
3. Instale as dependências:

   ```bash
   npm install
   ```
4. Gere o cliente Prisma e aplique as migrações:

   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

## Executando

- Ambiente de desenvolvimento:

  ```bash
  npm run dev
  ```

- Construção para produção:

  ```bash
  npm run build
  npm start
  ```

## Testes

Para rodar os testes automatizados:

```bash
npm run test:dev
```

---

Sinta-se à vontade para explorar o código e utilizar este projeto como referência ou ponto de partida para estudos e experimentações.