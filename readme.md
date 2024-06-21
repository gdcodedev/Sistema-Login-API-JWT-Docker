# Estrutura do sistema API + Mongo + React + Docker


```
Sistema/
├── node-api/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── calcController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   └── user.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── calcRoutes.js
│   │   ├── config.js
│   │   ├── server.js
│   ├── .env
│   ├── package.json
│   ├── Dockerfile
└── react-frontend/
    ├── public/
    │   ├── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Calculator.js
    │   │   └── Login.js
    │   ├── App.js
    │   ├── index.js
    │   └── api.js
    ├── package.json
    ├── Dockerfile


```
