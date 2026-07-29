// ===== Dados dos projetos =====
// Edite esta lista para adicionar/remover projetos. Troque os links "repo"
// e "demo" pelos seus (repositório no GitHub e deploy na Vercel/Netlify).
const PROJETOS = [
  {
    emoji: '📦',
    titulo: 'Controle de Estoque (Full-stack)',
    descricao:
      'App completo: frontend React consumindo uma API REST em Flask com banco SQLite. CRUD, busca com debounce, dashboard e alertas de estoque baixo.',
    tags: ['React', 'Flask', 'Python', 'SQLite', 'API REST'],
    repo: 'https://github.com/IasminRDS/Controle-de-Estoque',
    demo: '',
  },
  {
    emoji: '🔄',
    titulo: 'Pipeline de ETL + Dashboard de Vendas',
    descricao:
      'Fluxo de dados de ponta a ponta em Python: extrai um CSV bruto de vendas, trata e enriquece os dados, carrega em SQLite e gera um dashboard de BI.',
    tags: ['Python', 'pandas', 'SQLite', 'ETL', 'BI'],
    repo: 'https://github.com/IasminRDS/Pipeline-de-ETL-Dashboard-de-Vendas',
    demo: '',
  },
  {
    emoji: '📊',
    titulo: 'FinDash — Dashboard Financeiro',
    descricao:
      'Controle de finanças pessoais em React: registro de receitas e despesas acompanhado em gráficos interativos, com os dados salvos no próprio navegador.',
    tags: ['React', 'Vite', 'Data Viz', 'localStorage'],
    repo: 'https://github.com/IasminRDS/FinDash-Dashboard-Financeiro',
    demo: '',
  },
  {
    emoji: '📈',
    titulo: 'Análise de Vendas com Python',
    descricao:
      'O fluxo completo do analista: obter os dados, tratar com pandas, extrair indicadores, visualizar e comunicar num relatório final.',
    tags: ['Python', 'pandas', 'matplotlib'],
    repo: 'https://github.com/IasminRDS/analise-de-vendas-python',
    demo: '',
  },
  {
    emoji: '🤖',
    titulo: 'Insights de Negócio com IA',
    descricao:
      'Lê um arquivo CSV, monta um resumo estatístico e usa a IA generativa do Google Gemini para transformar os números em insights em linguagem natural.',
    tags: ['Python', 'Gemini API', 'IA Generativa', 'pandas'],
    repo: 'https://github.com/IasminRDS/Insights_IA_Gemini',
    demo: '',
  },
  {
    emoji: '📚',
    titulo: 'API REST de Biblioteca (Flask)',
    descricao:
      'API para gerenciar um acervo de livros: CRUD completo, validação de dados, códigos de status HTTP corretos e persistência em JSON.',
    tags: ['Python', 'Flask', 'API REST', 'JSON'],
    repo: 'https://github.com/IasminRDS/API-REST-de-Biblioteca',
    demo: '',
  },
  {
    emoji: '🛒',
    titulo: 'API de Produtos (PHP)',
    descricao:
      'API REST em PHP puro, sem framework, com PDO e prepared statements — CRUD completo com foco em proteção contra SQL Injection.',
    tags: ['PHP', 'PDO', 'SQLite', 'API REST'],
    repo: 'https://github.com/IasminRDS/api-produtos-php',
    demo: '',
  },
  {
    emoji: '👽',
    titulo: 'Explorador de Personagens',
    descricao:
      'App React que consome a API pública do Rick and Morty: listagem, busca, filtros, paginação e modal de detalhes.',
    tags: ['React', 'API REST', 'Fetch'],
    repo: 'https://github.com/IasminRDS/Explorador-de-Personagens',
    demo: '',
  },
  {
    emoji: '🧹',
    titulo: 'ETL Consolidador para Power BI',
    descricao:
      'Junta planilhas soltas de um cliente em uma base única e limpa, pronta para consumo no Power BI.',
    tags: ['Python', 'pandas', 'Power BI', 'ETL'],
    repo: 'https://github.com/IasminRDS/ETL-Consolidador',
    demo: '',
  },
];

// ===== Renderiza os cards de projeto =====
function renderProjetos() {
  const grid = document.getElementById('projetos-grid');
  grid.innerHTML = PROJETOS.map((p) => {
    const demoLink = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo ao vivo →</a>`
      : '';
    const tags = p.tags.map((t) => `<span>${t}</span>`).join('');
    return `
      <article class="projeto-card">
        <div class="projeto-card__emoji">${p.emoji}</div>
        <h3 class="projeto-card__title">${p.titulo}</h3>
        <p class="projeto-card__desc">${p.descricao}</p>
        <div class="projeto-card__tags">${tags}</div>
        <div class="projeto-card__links">
          <a href="${p.repo}" target="_blank" rel="noopener">Código no GitHub →</a>
          ${demoLink}
        </div>
      </article>`;
  }).join('');
}

// ===== Alternância de tema (com preferência salva) =====
function initTema() {
  // O tema inicial já foi aplicado pelo script inline no <head>.
  const btn = document.getElementById('theme-toggle');
  const atualizarIcone = () => {
    btn.textContent =
      document.documentElement.dataset.theme === 'light' ? '☀️' : '🌙';
  };
  atualizarIcone();

  btn.addEventListener('click', () => {
    const atual = document.documentElement.dataset.theme;
    const novo = atual === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = novo;
    localStorage.setItem('tema', novo);
    atualizarIcone();
  });
}

// ===== Botão "copiar e-mail" =====
// O link mailto: só funciona para quem tem um cliente de e-mail configurado,
// então o endereço também fica visível e copiável.
function initCopiarEmail() {
  const btn = document.getElementById('copiar-email');
  const email = document.getElementById('email-texto').textContent.trim();

  const copiar = async () => {
    // navigator.clipboard exige contexto seguro (https ou localhost); aberto
    // direto do disco (file://) ele pode não existir. E, se a janela estiver
    // sem foco, a promessa às vezes nunca resolve — daí o limite de 1s.
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await Promise.race([
          navigator.clipboard.writeText(email),
          new Promise((_, rejeitar) => setTimeout(rejeitar, 1000)),
        ]);
        return;
      } catch {
        // segue para o modo alternativo abaixo
      }
    }
    const campo = document.createElement('textarea');
    campo.value = email;
    campo.setAttribute('readonly', '');
    campo.style.position = 'fixed';
    campo.style.opacity = '0';
    document.body.appendChild(campo);
    campo.select();
    document.execCommand('copy');
    campo.remove();
  };

  btn.addEventListener('click', async () => {
    try {
      await copiar();
      btn.textContent = 'Copiado ✓';
    } catch {
      btn.textContent = 'Selecione e copie';
    }
    setTimeout(() => {
      btn.textContent = 'Copiar';
    }, 2000);
  });
}

// ===== Revela as seções conforme entram na tela =====
function initReveal() {
  const alvos = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  alvos.forEach((el) => obs.observe(el));
}

// ===== Inicialização =====
document.addEventListener('DOMContentLoaded', () => {
  renderProjetos();
  initTema();
  initCopiarEmail();
  initReveal();
  document.getElementById('ano').textContent = new Date().getFullYear();
});
