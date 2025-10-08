# 📱 Indica App

O **Indica App** é uma aplicação **fullstack** que integra um **frontend em React + Vite** com um **backend em Java + Spring Boot**, permitindo o **cadastro, login e gerenciamento de usuários** com **autenticação JWT persistente**.  

O principal objetivo deste projeto é demonstrar **boas práticas modernas** de autenticação, consumo de **APIs REST** e **desacoplamento entre frontend e backend**, mantendo uma estrutura simples, clara e escalável.


## 🚀 Funcionalidades

- Cadastro e login de usuários  
- Persistência do token JWT no `localStorage`  
- Rota `/me` para validação e recuperação do usuário logado  
- Redirecionamento automático de rotas protegidas  
- Interface responsiva e moderna  
- Comunicação entre frontend e backend via **REST API**  
- Backend seguro com **Spring Security + JWT**


## 🧠 Tecnologias Utilizadas e Motivos da Escolha

### **Frontend**

| Tecnologia | Motivo da Escolha |
|-------------|------------------|
| **React + Vite + TypeScript** | O **React** é ideal para construir interfaces reativas e modulares, enquanto o **Vite** acelera o desenvolvimento com build ultrarrápido e hot reload eficiente. O **TypeScript** adiciona segurança ao código com tipagem estática, reduzindo erros e tornando o projeto mais escalável — perfeito mesmo para apps pequenos que priorizam qualidade. |
| **Zustand** | Uma alternativa mais leve e intuitiva ao Redux. Ideal para projetos pequenos/médios que ainda exigem **gerenciamento de estado global**, com suporte nativo a **persistência no `localStorage`** — essencial para manter o usuário logado entre sessões. |
| **Axios** | Simplifica o consumo de APIs REST com suporte nativo a interceptors e headers dinâmicos, permitindo fácil injeção do token JWT em cada requisição. |
| **React Router DOM** | Fornece uma navegação declarativa e organizada, separando **rotas públicas e privadas** com base no estado de autenticação. |


### **Backend**

| Tecnologia | Motivo da Escolha |
|-------------|------------------|
| **Java 25 + Spring Boot 3** | O **Spring Boot** continua sendo o padrão do mercado para APIs REST em Java. Ele oferece **estrutura robusta, segurança integrada e configuração mínima**, o que o torna perfeito para demonstrar conceitos sólidos mesmo em projetos pequenos. |
| **Spring Security + JWT** | Implementa autenticação e autorização modernas de forma padronizada e segura, com **tokens JWT** garantindo sessões sem estado e compatibilidade com frontends desacoplados. |
| **JPA + Hibernate + PostgreSQL** | A combinação **JPA/Hibernate** reduz o boilerplate de SQL e facilita o mapeamento objeto-relacional, enquanto o **PostgreSQL** é um banco confiável, gratuito e ideal para projetos de aprendizado com foco em boas práticas de persistência. |
| **Lombok** | Reduz drasticamente o código repetitivo (getters, setters, builders), deixando as classes mais limpas e fáceis de manter — importante para manter um projeto pequeno mais legível e didático. |

> 💡 Em conjunto, essas tecnologias refletem o **stack mais utilizado no mercado** para aplicações **React + Spring Boot**, oferecendo **produtividade, segurança e clareza arquitetural** sem sacrificar simplicidade.


## ⚙️ Estrutura do Projeto

```
indica-app/
│
├── server/
│   ├── src/main/java/com/pericles/indicaapp/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── dto/
│   │   ├── mapper/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── security/
│   │   └── service/
│   ├── src/main/resources/
│   │   └── application.yml
│   └── pom.xml
│
├── src/
│   ├── interface/
│   ├── pages/
│   ├── service/
│   ├── store/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```


## 🧩 Como Rodar o Projeto Localmente

### 🔧 Pré-requisitos

- **Node.js**
- **Java 25+**
- **Maven** (para build do backend)
- **PostgreSQL** (ou outro banco configurado no `application.yml`)


### 🖥️ Backend (Java + Spring Boot)

1. Acesse a pasta do backend:
   ```bash
   cd server
   ```

2. Configure o banco em `src/main/resources/application.yml`:
   ```yaml
   spring:
     datasource:
       url: jdbc:postgresql://localhost:5432/indica_app
       username: postgres
       password: sua_senha
     jpa:
       hibernate:
         ddl-auto: update
   jwt:
     secret: minha_chave_super_secreta
   ```

3. Compile e execute:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. API disponível em:
   ```
   http://localhost:8080
   ```


### 💻 Frontend (React + Vite)

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o projeto:
   ```bash
   npm run dev
   ```

3. Acesse:
   ```
   http://localhost:5173
   ```


## 🔐 Fluxo de Autenticação

1. O backend retorna um **JWT** após login bem-sucedido.  
2. O frontend armazena o token no `localStorage` via Zustand.  
3. Ao recarregar a página, o app valida o token via `/api/me`.  
4. Se inválido, o token é removido e o usuário é redirecionado ao login.  

> Essa abordagem garante **sessões persistentes e seguras**, mantendo o sistema **sem estado (stateless)** no backend.


## 🤖 Colaboração com IA

Durante o desenvolvimento, **utilizei ferramentas de Inteligência Artificial como apoio**, especialmente o **ChatGPT (GPT-5)**, **para otimizar o processo de aprendizado e aumentar a qualidade do código**, sem substituir o trabalho manual de implementação.
 
A IA foi usada como **assistente técnica e educacional**, ajudando em pontos específicos como:

- Estruturar a arquitetura inicial do projeto (frontend + backend desacoplado).  
- Esclarecer dúvidas sobre o fluxo de autenticação com JWT.  
- Sugerir boas práticas de organização e persistência de estado com Zustand.  
- Revisar textos técnicos e auxiliar na criação deste `README.md`.

> Todo o código, estrutura e decisões de arquitetura foram **implementados manualmente por mim**, com a IA atuando como **suporte consultivo**, similar a um mentor técnico.

### 📘 Principais Aprendizados

- Entendimento mais profundo do fluxo de autenticação entre **React e Spring**.  
- Aplicação prática de **boas práticas de estado e segurança** em projetos fullstack.  
- Melhoria da **clareza e documentação técnica** do projeto.  
- Uso consciente da IA como ferramenta para **acelerar aprendizado e qualidade**, mantendo autoria própria.


## 🧱 Melhorias Futuras

- Implementar **refresh tokens** e **logout automático**.  
- Adicionar **testes unitários** (JUnit / Vitest).  
- Criar **testes E2E** com Cypress.  
- Adicionar **Docker Compose** para ambiente completo local. 
