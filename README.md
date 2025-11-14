# Projeto Banestes - Sistema de Gerenciamento de Clientes

Uma aplicação web moderna desenvolvida em React e TypeScript para gerenciamento de clientes do Banestes, permitindo visualização de informações de clientes, contas bancárias e agências.

## 📋 Sobre o Projeto

Este projeto é uma aplicação front-end que consome dados de planilhas Google Sheets e apresenta uma interface intuitiva para visualização e gerenciamento de informações de clientes bancários. A aplicação permite:

- Visualização de lista de clientes com paginação
- Busca e filtragem de clientes por nome, CPF/CNPJ ou email
- Visualização detalhada de informações do cliente
- Exibição de contas bancárias associadas a cada cliente
- Informações sobre agências bancárias

## 🚀 Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.5.3** - Superset JavaScript com tipagem estática
- **Vite 5.4.2** - Build tool e dev server de alta performance
- **Tailwind CSS 3.4.1** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones moderna
- **ESLint** - Linter para garantir qualidade de código

## 📦 Estrutura do Projeto

```
projetoBanestes/
├── src/
│   ├── components/          # Componentes React
│   │   ├── AgenciaInfo.tsx
│   │   ├── ClienteCard.tsx
│   │   ├── ClienteDetails.tsx
│   │   ├── ClienteList.tsx
│   │   ├── ContaCard.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── Layout.tsx
│   │   ├── Loading.tsx
│   │   └── Pagination.tsx
│   ├── services/            # Serviços de dados
│   │   └── dataService.ts
│   ├── types/               # Definições TypeScript
│   │   └── index.ts
│   ├── utils/               # Utilitários
│   │   ├── csvParser.ts
│   │   └── formatCpfCnpj.ts
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Ponto de entrada
│   └── index.css            # Estilos globais
├── public/                  # Arquivos estáticos
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório:
```bash
git clone https://github.com/gustavofiorotti/projetoBanestes.git
cd projetoBanestes
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação no navegador:
```
http://localhost:5173
```

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar erros de código
- `npm run deploy` - Faz deploy da aplicação para GitHub Pages

## 🌐 Deploy

A aplicação está configurada para deploy no GitHub Pages. O deploy é feito automaticamente através do script `npm run deploy`, que:

1. Executa o build de produção (`predeploy`)
2. Publica a pasta `dist` na branch `gh-pages`

A aplicação está disponível em: [https://gustavofiorotti.github.io/projetoBanestes/](https://gustavofiorotti.github.io/projetoBanestes/)

## 📊 Fonte de Dados

Os dados são consumidos de planilhas Google Sheets exportadas em formato CSV. As planilhas contêm três abas:

- **Clientes**: Informações pessoais e financeiras dos clientes
- **Contas**: Dados das contas bancárias (corrente e poupança)
- **Agências**: Informações das agências bancárias

## 🎨 Funcionalidades

### Lista de Clientes
- Exibição paginada de clientes (10 por página)
- Busca em tempo real por nome, CPF/CNPJ ou email
- Cards informativos com dados principais do cliente

### Detalhes do Cliente
- Visualização completa das informações pessoais
- Lista de contas bancárias associadas
- Informações da agência vinculada
- Formatação adequada de valores monetários e datas

### Interface
- Design responsivo e moderno
- Loading states durante carregamento de dados
- Tratamento de erros com mensagens amigáveis
- Navegação intuitiva entre lista e detalhes

## 👤 Autor

**Gustavo Fiorotti**

- GitHub: [@gustavofiorotti](https://github.com/gustavofiorotti)

## 📝 Licença

Este projeto é privado e todos os direitos reservados.

---

Desenvolvido para o Banestes.