# 💻 Portfólio — Iasmin Ribeiro de Souza

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/licença-MIT-blue)

Meu portfólio pessoal: um site estático que reúne, num lugar só, os projetos que venho construindo em **desenvolvimento web** e **análise de dados**.

🔗 **No ar em [iasminrds.github.io](https://iasminrds.github.io)**

## ✨ O que tem de técnico aqui

Não é só uma página bonita — cada recurso foi feito à mão, sem framework nem biblioteca:

- 🎨 **Tema claro/escuro** que respeita a preferência do sistema (`prefers-color-scheme`) e guarda a escolha do visitante. O tema é aplicado antes da primeira pintura da tela, então não existe a "piscada" de cor no carregamento.
- ✨ **Animação de revelação** conforme as seções entram na tela, com `IntersectionObserver` — e desligada automaticamente para quem usa `prefers-reduced-motion`.
- 🗂️ **Projetos renderizados por JavaScript** a partir de uma lista em `script.js`: adicionar um projeto novo é acrescentar um objeto ao array, sem tocar no HTML.
- 📋 **Botão de copiar e-mail** usando a Clipboard API, com alternativa para quando a página é aberta direto do disco (onde a API moderna não está disponível).
- 📱 **Responsivo**, com navegação que se reorganiza no celular em vez de sumir.
- ⚡ **Zero dependências** — HTML, CSS e JavaScript puro. Sem build, sem `node_modules`.

## 🗂️ Projetos reunidos

| Projeto | Stack |
|---|---|
| [Controle de Estoque](https://github.com/IasminRDS/Controle-de-Estoque) — app full-stack com CRUD, dashboard e alerta de estoque baixo | React · Flask · SQLite |
| [Pipeline de ETL + Dashboard de Vendas](https://github.com/IasminRDS/Pipeline-de-ETL-Dashboard-de-Vendas) — do CSV bruto ao painel de BI | Python · pandas · SQLite |
| [FinDash](https://github.com/IasminRDS/FinDash-Dashboard-Financeiro) — controle de finanças pessoais com gráficos interativos | React · Vite |
| [Análise de Vendas com Python](https://github.com/IasminRDS/analise-de-vendas-python) — tratamento, indicadores e relatório | Python · pandas · matplotlib |
| [Insights de Negócio com IA](https://github.com/IasminRDS/Insights_IA_Gemini) — CSV vira insight em linguagem natural | Python · Gemini API |
| [API REST de Biblioteca](https://github.com/IasminRDS/API-REST-de-Biblioteca) — CRUD com validação e status HTTP corretos | Python · Flask |
| [API de Produtos](https://github.com/IasminRDS/api-produtos-php) — PHP puro, com proteção contra SQL Injection | PHP · PDO · SQLite |
| [Explorador de Personagens](https://github.com/IasminRDS/Explorador-de-Personagens) — busca, filtros e paginação sobre API pública | React · Fetch API |
| [ETL Consolidador](https://github.com/IasminRDS/ETL-Consolidador) — planilhas soltas viram base limpa para o Power BI | Python · pandas |

## 📂 Estrutura

```
IasminRDS.github.io/
├── index.html    # Seções: hero, sobre, habilidades, projetos e contato
├── style.css     # Estilos e variáveis de tema (claro/escuro)
└── script.js     # Lista de projetos, tema, cópia de e-mail e animações
```

## 🚀 Como rodar localmente

Abrir o `index.html` no navegador já funciona. Para servir por HTTP — o que habilita a Clipboard API moderna:

```bash
python -m http.server 8090
```

E acessar `http://localhost:8090`.

## 📄 Licença

MIT — veja [LICENSE](./LICENSE).

---

Feito por **Iasmin Ribeiro de Souza** · [LinkedIn](https://www.linkedin.com/in/iasmin-ribeiro-de-souza-033536401) · [GitHub](https://github.com/IasminRDS) · [iasminrds1@gmail.com](mailto:iasminrds1@gmail.com)
