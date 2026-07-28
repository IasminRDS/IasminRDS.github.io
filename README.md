# 💻 Portfólio Pessoal

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/licença-MIT-blue)

Página de portfólio pessoal — o "cartão de visita" que reúne todos os projetos num só lugar. Site estático (sem dependências), rápido e responsivo, pronto para publicar **grátis no GitHub Pages**.

> 🔧 **Opcional**: coloque o currículo como `CV-Iasmin-Ribeiro-de-Souza.pdf` na pasta para
> ativar o botão "Baixar CV".

## ✨ Recursos

- 🎨 **Tema claro/escuro** com preferência salva no navegador
- 📱 **Responsivo** (desktop e mobile)
- ✨ **Animações de revelação** ao rolar a página (com respeito a `prefers-reduced-motion`)
- 🗂️ **Projetos via JavaScript** — adicionar um novo projeto é editar uma lista em `script.js`
- ⚡ **Zero dependências** — só HTML, CSS e JS puro

## 📂 Estrutura

```
portfolio-pessoal/
├── index.html    # Estrutura das seções (hero, sobre, skills, projetos, contato)
├── style.css     # Estilos + variáveis de tema
└── script.js     # Dados dos projetos, tema e animações
```

## 🚀 Como visualizar localmente

Basta abrir o `index.html` no navegador. Ou, para servir localmente:

```bash
python -m http.server 8090
```

E acessar `http://localhost:8090`.

## 🌐 Publicar no GitHub Pages (grátis)

1. Crie um repositório no GitHub (ex.: `portfolio` ou `IasminRDS.github.io`).
2. Suba os arquivos:
   ```bash
   git init
   git add .
   git commit -m "feat: portfólio pessoal"
   git branch -M main
   git remote add origin https://github.com/IasminRDS/portfolio.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Branch: `main` / root → Save**.
4. Em 1–2 minutos seu site estará no ar em `https://IasminRDS.github.io/portfolio/`.

## 📄 Licença

MIT — veja [LICENSE](./LICENSE).
