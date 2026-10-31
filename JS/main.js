/* main.js — comportamentos da página (depende de cards.js) */

// Filtro dos cards da equipe
document.getElementById('filtros').addEventListener('click', e => {
  const btn = e.target.closest('[data-filter]');
  if (!btn) return;

  const category = btn.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === btn));
  document.querySelectorAll('.team-col').forEach(col => {
    col.classList.toggle('d-none', category !== 'todos' && col.dataset.category !== category);
  });
});

// Modal (Bootstrap): preenche o conteúdo com base no botão que o abriu
document.getElementById('modal').addEventListener('show.bs.modal', e => {
  const card = teamCards.find(c => c.key === e.relatedTarget?.dataset.key);
  if (!card) return;
  const m = card.modal;

  document.getElementById('modal-title').textContent = m.title;
  document.getElementById('modal-content').innerHTML = `
    <div class="tw-text-xs tw-font-bold tw-uppercase tw-text-brand-accent mb-3">${m.role} • ${m.time}</div>
    <div class="tw-bg-brand-lightAccent tw-p-3 tw-rounded-lg tw-text-sm tw-italic tw-text-gray-700 mb-3">"${m.text}"</div>
    <h4 class="tw-text-xs tw-font-bold tw-uppercase tw-text-gray-500 tw-mb-1">Detalhes:</h4>
    <p class="tw-text-xs tw-text-gray-600 tw-leading-relaxed mb-0">${m.details}</p>`;
});

// Mural do Afeto
document.getElementById('comment-form').addEventListener('submit', e => {
  e.preventDefault();
  const post = {
    author: document.getElementById('author-name').value,
    to: document.getElementById('target-person').value || 'Todos',
    text: document.getElementById('comment-text').value
  };
  document.getElementById('mural-posts').insertAdjacentHTML('afterbegin', muralPost(post));
  e.target.reset();
});
