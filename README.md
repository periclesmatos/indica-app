# 📱 Indica App

**Indica App** é uma aplicação web fullstack que permite o cadastro, login e gerenciamento de usuários, com persistência de autenticação e integração entre frontend em **React + Vite** e backend em **Java + Spring Boot**. O projeto é focado em demonstrar boas práticas de autenticação JWT, consumo de APIs REST e arquitetura moderna entre frontend e backend desacoplados.

---

## 🚀 Funcionalidades

- Cadastro e login de usuários  
- Persistência do token de autenticação no `localStorage`  
- Rota `/me` para validação do token e recuperação do usuário logado  
- Redirecionamento automático de rotas com base no estado de login  
- Interface moderna feita com React + TypeScript  
- Backend seguro e estruturado com Spring Boot, Spring Security e JWT  
- Comunicação via REST API entre backend e frontend  

---

## 🧠 Tecnologias Utilizadas

### **Frontend**
- **React + Vite + TypeScript** → Alta performance no desenvolvimento e tipagem estática.  
- **Zustand** → Gerenciamento de estado simples e reativo, com persistência automática no `localStorage`.  
- **Axios** → Cliente HTTP para comunicação com a API.  
- **React Router DOM** → Controle de rotas públicas e protegidas.  

### **Backend**
- **Java 25 + Spring Boot 3** → Framework robusto e produtivo para APIs REST.  
- **Spring Security + JWT** → Controle de autenticação e autorização seguro.  
- **JPA + Hibernate + PostgreSQL** → Persistência de dados eficiente.  
- **Lombok** → Reduz boilerplate (getters/setters, builders).  

Essas tecnologias foram escolhidas por refletirem o ecossistema mais utilizado no mercado para aplicações modernas com **React + Spring Boot**, mantendo alta performance e segurança.

---

## ⚙️ Estrutura do Projeto

```
indica-app/
│
├── server/
│   ├── src/main/java/com/pericles/indicaapp/
│   │   ├── confg/
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
├── src/
│   ├── interface/
│   ├── pages/
│   ├── service/
│   ├── store/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🧩 Como Rodar o Projeto Localmente

### 🔧 Pré-requisitos

- **Node.js** 
- **Java**
- **Maven** (para build do backend)  
- **PostgreSQL** (ou banco configurado no `application.yml`)

---

### 🖥️ Backend (Java + Spring Boot)

1. Entre na pasta do backend:
   ```bash
   cd server
   ```

2. Configure o banco de dados em `src/main/resources/application.yml`:
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

3. Compile e execute o backend:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. O servidor estará disponível em:
   ```
   http://localhost:8080
   ```

---

### 💻 Frontend (React + Vite)

1. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

2. Execute o projeto:
   ```bash
   npm run dev
   ```

5. Acesse no navegador:
   ```
   http://localhost:5173
   ```

---

## 🔐 Autenticação

- Ao realizar login, o backend retorna um **JWT** e os dados do usuário.  
- O frontend armazena o token no `localStorage` e o Zustand mantém o estado `isLoggedIn` e `user`.  
- Ao recarregar a página, o app tenta validar o token via `/api/me`.  
- Se o token for inválido, ele é removido e o usuário é redirecionado ao login.


---

## 🤖 Colaboração com IA

Durante o desenvolvimento deste projeto, utilizei ferramentas de **Inteligência Artificial (IA)** — em especial o **ChatGPT (GPT-5)** — como uma forma de **acelerar o aprendizado e melhorar a qualidade do código**.  
A IA foi usada principalmente para:

- Estruturar a arquitetura inicial do projeto (frontend + backend desacoplado).  
- Corrigir erros de autenticação JWT e fluxo de login persistente.  
- Explicar o comportamento do Zustand com `persist()`. 
- Criar este arquivo `README.md`.

### 📘 O que aprendi

- Compreensão mais profunda do fluxo de autenticação entre React e Spring.  
- Boas práticas de gerenciamento de estado com persistência local.  
- Estruturação de projetos fullstack e separação clara entre camadas.  
- Como descrever tecnicamente um projeto em um README profissional.

---

## 🧱 Melhorias Futuras

- Implementar testes unitarios
- Implementar refresh tokens e logout automático.  
- Implementar testes E2E com Cypress.   

