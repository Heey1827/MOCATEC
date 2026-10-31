/* =====================================================
   cards.js — TODOS os cards do site (dados + templates)
   Para adicionar/editar um card, basta mexer nas listas abaixo.
   ===================================================== */

// Escapa texto digitado pelo usuário (evita injeção de HTML)
const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- 1. CONTADORES (hero) ---------- */
// Exemplo: { value: '100', label: 'Texto do contador' }
const counters = [];

const counterCard = c => `
  <div class="col-6 col-md-3">
    <div class="counter-card h-100">
      <span class="d-block tw-text-3xl tw-font-extrabold tw-text-brand-200">${c.value}</span>
      <span class="tw-text-xs tw-text-white/80 tw-font-medium tw-uppercase tw-tracking-wider">${c.label}</span>
    </div>
  </div>`;

/* ---------- 2. EQUIPE (cards + conteúdo do modal) ---------- */
/* Exemplo:
  {
    key: 'id-unico',            // identificador do card (sem espaços)
    category: 'categoria1',     // deve bater com data-filter dos botões no index.html
    badge: 'Etiqueta',
    name: 'Nome',
    subtitle: 'Subtítulo do card',
    img: 'caminho/ou/url-da-imagem.jpg',
    quote: 'Frase de destaque do card.',
    modal: {
      title: 'Título do modal',
      role: 'Cargo / função',
      time: 'Tempo / data',
      text: 'Texto principal do modal.',
      details: 'Texto complementar do modal.'
    }
  }
*/
const teamCards = [];

const teamCard = c => `
  <div class="col-12 col-sm-6 col-lg-4 team-col" data-category="${c.category}">
    <div class="card card-item h-100 shadow-sm tw-rounded-xl tw-overflow-hidden">
      <div class="position-relative">
        <img src="${c.img}" alt="${esc(c.name)}" class="card-img-top">
        <span class="badge rounded-pill badge-soft position-absolute top-0 end-0 m-3">${c.badge}</span>
      </div>
      <div class="card-body d-flex flex-column p-4">
        <h3 class="tw-text-lg tw-font-bold tw-text-brand-500">${c.name}</h3>
        <p class="tw-text-xs tw-text-gray-500 tw-font-medium tw-mb-3">${c.subtitle}</p>
        <p class="tw-text-sm tw-text-gray-600 tw-italic tw-line-clamp-3 tw-mb-4">"${c.quote}"</p>
        <button class="btn btn-soft btn-sm w-100 mt-auto fw-semibold" data-bs-toggle="modal" data-bs-target="#modal" data-key="${c.key}">
          Ver mais
        </button>
      </div>
    </div>
  </div>`;

/* ---------- 3. BLOCOS DE CONTEÚDO ---------- */
// Exemplo: { icon: '🔬', title: 'Título', text: 'Texto do bloco.', tag: 'Etiqueta' }
const scienceCards = [];

const scienceCard = s => `
  <div class="col-12 col-md-4">
    <div class="science-card h-100 tw-p-6 tw-rounded-xl">
      <div class="icon-box">${s.icon}</div>
      <h3 class="tw-text-lg tw-font-bold tw-text-brand-500 tw-mb-2">${s.title}</h3>
      <p class="tw-text-sm tw-text-gray-600 tw-leading-relaxed tw-mb-3">${s.text}</p>
      <span class="tag-soft">${s.tag}</span>
    </div>
  </div>`;

/* ---------- 4. DADOS (barras) ---------- */
// Exemplo: { label: 'Descrição do dado', value: 80, tone: 'accent' }   (tone: 'accent' ou 'brand')
const dataBars = [];

const dataBar = d => `
  <div class="mb-4">
    <div class="d-flex justify-content-between tw-text-sm tw-font-semibold mb-1">
      <span class="tw-text-gray-700">${d.label}</span>
      <span class="tw-text-brand-500">${d.value}%</span>
    </div>
    <div class="progress" role="progressbar" aria-valuenow="${d.value}" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bar-${d.tone}" style="width: ${d.value}%"></div>
    </div>
  </div>`;

/* ---------- 5. MURAL (recados) ---------- */
// Exemplo: { text: 'Mensagem', to: 'Destinatário', author: 'Autor' }
const muralPosts = [];

const muralPost = p => `
  <div class="col-12 col-md-4 fade-in">
    <div class="mural-post h-100 d-flex flex-column justify-content-between">
      <p class="tw-text-sm tw-text-gray-700 tw-italic tw-mb-3">"${esc(p.text)}"</p>
      <div>
        <span class="d-block tw-text-xs tw-font-bold tw-text-brand-500">Para: ${esc(p.to)}</span>
        <span class="d-block tw-text-xs tw-text-gray-400">— ${esc(p.author)}</span>
      </div>
    </div>
  </div>`;

/* ---------- Renderização ---------- */
const renderList = (selector, items, template) => {
  document.querySelector(selector).innerHTML = items.map(template).join('');
};

renderList('#counters',      counters,      counterCard);
renderList('#cards-container', teamCards,   teamCard);
renderList('#science-cards', scienceCards,  scienceCard);
renderList('#data-bars',     dataBars,      dataBar);
renderList('#mural-posts',   muralPosts,    muralPost);
