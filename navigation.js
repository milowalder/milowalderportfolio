const select = document.querySelector('#project-select');
select.addEventListener('change', () => {
  const target = document.getElementById(select.value);
  if (!target) return;
  history.replaceState(null, '', '#' + target.id);
  target.querySelector('h3')?.focus({ preventScroll: true });
  target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
});
const syncSelection = () => {
  const id = location.hash.slice(1);
  select.value = [...select.options].some(option => option.value === id) ? id : '';
};
window.addEventListener('hashchange', syncSelection);
syncSelection();
