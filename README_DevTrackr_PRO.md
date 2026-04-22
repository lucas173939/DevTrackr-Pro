# 🚀 DevTrackr PRO+

Sistema Full Stack SaaS para análise e gerenciamento de usuários do GitHub, com autenticação, dashboard e banco de dados.

## 📌 Visão Geral
Aplicação completa que permite:
- Buscar usuários do GitHub
- Visualizar métricas e gráficos
- Salvar usuários
- Acessar histórico
- Gerar insights

## 🧱 Arquitetura
Frontend (React)
↓
Backend (Node.js + Express)
↓
MongoDB Atlas

## 🛠 Tecnologias

Frontend:
- React.js
- Axios
- Recharts

Backend:
- Node.js
- Express
- JWT
- Mongoose

Banco:
- MongoDB Atlas

DevOps:
- GitHub Actions
- Vercel
- Render

## ✨ Funcionalidades
- Busca de usuários (API GitHub)
- Dashboard com gráficos
- Persistência no banco
- Autenticação JWT
- Cache básico

## 📁 Estrutura
devtrackr/
├── frontend/
├── backend/
├── .github/
└── README.md

## ▶️ Execução

Backend:
cd backend
npm install
node server.js

Frontend:
cd frontend
npm install
npm start

## 🌐 Deploy
Frontend: Vercel
Backend: Render
Banco: MongoDB Atlas

## 🔐 Variáveis de Ambiente
MONGO_URL=sua_string
JWT_SECRET=seu_segredo

## 🧪 Testes
npm test

## ⚙️ CI/CD
.github/workflows/ci.yml

## 🎯 Diferenciais
- Full stack real
- API externa + própria
- Autenticação
- Dashboard
- CI/CD

## 📈 Melhorias
- Login completo
- Mais gráficos
- Docker
- Mobile

## 👨‍💻 Autor
Lucas Fernandes Santos
linkedin.com/in/lucasfernandossantos
