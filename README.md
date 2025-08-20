# joelson-bet
Uma moderna e responsiva interface de casa de apostas esportivas, construída com Next.js, TypeScript e Tailwind CSS. Um projeto de portfólio que demonstra habilidades avançadas de front-end, incluindo consumo de APIs e gerenciamento de estado complexo.

# ⚽ Joelson-Bet

![Joelson-Bet](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-blue?logo=tailwind-css)

Joelson-Bet é uma sofisticada aplicação front-end para uma casa de apostas esportivas, desenvolvida como um projeto-chave para meu portfólio pessoal. O projeto demonstra práticas modernas de desenvolvimento web, uma interface de usuário responsiva e gerenciamento de estado complexo, consumindo dados esportivos em tempo real de uma API externa.

**🔗 Link para o Deploy:** [**INSERIR LINK DA VERCEL AQUI QUANDO FIZER O DEPLOY**](https://)

---

### 🎥 Demo da Aplicação

*[INSERIR UM GIF OU SCREENSHOT DA APLICAÇÃO AQUI]*

---

### ✨ Funcionalidades Principais

*   **Consumo de API Externa:** Busca e exibe dinamicamente jogos e odds de diferentes esportes.
*   **Boletim de Apostas Interativo:** Permite ao usuário adicionar e remover seleções, com cálculo automático de odds para apostas simples e múltiplas.
*   **Gerenciamento de Estado no Front-end:** Utiliza React Context API com `useReducer` para gerenciar o estado global da aplicação (boletim, saldo, histórico).
*   **Persistência de Dados com `localStorage`:** Simula um banco de dados salvando o saldo do usuário e seu histórico de apostas no navegador, garantindo que os dados não se percam ao recarregar a página.
*   **Resolução de Apostas:** Uma função que verifica os resultados finais dos jogos via API e atualiza o status das apostas do usuário para "Ganha" ou "Perdida", ajustando o saldo.
*   **Design Responsivo:** Interface totalmente adaptável para desktops, tablets e dispositivos móveis, construída com Tailwind CSS.

---

### 🛠️ Arquitetura e Tecnologias Utilizadas

Este projeto adota uma **arquitetura 100% front-end**, onde a lógica de "backend" é habilmente simulada no cliente. Isso foi uma decisão estratégica para focar em demonstrar maestria nas tecnologias de front-end.

*   **Framework:** [Next.js 14](https://nextjs.org/) (com App Router)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Gerenciamento de Estado:** React Context API (`useContext` + `useReducer`)
*   **Busca de Dados:** Fetch API (Async/Await)
*   **Linting & Formatting:** ESLint e Prettier
*   **Deploy:** [Vercel](https://vercel.com/)

---

### 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação em seu ambiente de desenvolvimento.

**1. Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/joelson-bet.git
cd joelson-bet
```

**2. Instale as dependências:**
```bash
npm install
# ou
yarn install
```

**3. Configure as Variáveis de Ambiente:**
Crie um arquivo chamado `.env.local` na raiz do projeto e adicione a chave da API de esportes que você está utilizando.

*.env.local*
```
NEXT_PUBLIC_ODDS_API_KEY=SUA_CHAVE_DA_API_AQUI
```
> **Nota:** É necessário usar o prefixo `NEXT_PUBLIC_` para que a variável de ambiente seja exposta ao navegador.

**4. Rode o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

### 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.````

### **Próximos Passos (Git):**

1.  Vá para o [GitHub](https://github.com) e crie um novo repositório chamado `joelson-bet`. **Não** adicione um `README.md` ou `.gitignore` pela interface do GitHub, pois seu projeto Next.js já tem isso.
2.  No seu terminal, dentro da pasta do projeto, inicie o git e conecte-o ao seu repositório remoto:

```bash
# Inicia o git no seu projeto local (o create-next-app já faz isso, mas não custa garantir)
git init

# Adiciona todos os arquivos para o primeiro commit
git add .

# Cria o primeiro commit
git commit -m "feat: setup initial project structure with Next.js and Tailwind CSS"

# Conecta seu repositório local ao repositório remoto que você criou no GitHub
git remote add origin https://github.com/SEU-USUARIO/joelson-bet.git

# Renomeia a branch principal para 'main' (boa prática)
git branch -M main

# Envia seu código para o GitHub
git push -u origin main
```