# Lista de Tarefas (Todo List)
Aplicação web completa para gerenciamento de tarefas, construída com Node.js, Express, PostgreSQL e JavaScript vanilla.

## ⚙️ Pré-requisitos
- Node.js e npm
- PostgreSQL
- Navegador web moderno

## 🚀 Funcionalidades
- Criar novas tarefas
- Listar todas as tarefas
- Editar títulos das tarefas
- Marcar tarefas como concluídas
- Excluir tarefas
- Interface responsiva
- Atualizações em tempo real

## 💻 Tecnologias
- Frontend:
    - HTML5
    - CSS3
    - JavaScript puro
- Backend:
    - Node.js
    - Express
    - PostgreSQL

## 📁 Estrutura do Projeto
```bash
.
├── api/              # Aplicação backend
│   ├── node_modules/ # Dependências do projeto         
│   ├── src/          
│   │   ├── db/       # Configuração do banco
│   │   └── server.js # Servidor Express
│   └── package.json  # Metadados do projeto
│   └── README.md     # Documentação da API
└── web/              # Aplicação frontend
    ├── scripts/      # JavaScript 
    ├── styles/       # CSS
    └── index.html    # Página principal
```

## 🔧 Instalação
Sigas as intruções presentes na documentação da API. Em seguida, navegue até a pasta `web` e abra o arquivo `index.html` no seu navegador.

## 🎯 Como Usar
1. Digite uma nova tarefa no campo de entrada
2. Clique em "Criar" ou pressione Enter
3. Use o checkbox para marcar como concluída
4. Use o botão de edição para modificar o título
5. Use o botão X para excluir