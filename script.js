const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const filterButtons = document.querySelectorAll('.filter-button');
const phoneCards = document.querySelectorAll('.phone-card');
const phoneForm = document.querySelector('#phone-form');
const formMessage = document.querySelector('#form-message');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Desativar modo noturno' : 'Ativar modo noturno');
    const label = themeToggle.querySelector('.theme-label');
    if (label) label.textContent = isDark ? 'Dia' : 'Noite';
  });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    phoneCards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

if (phoneForm && formMessage) {
  phoneForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selected = phoneForm.querySelector('input[name="celular"]:checked');
    formMessage.textContent = selected
      ? `Preferência registrada: ${selected.value}.`
      : 'Selecione uma opção antes de continuar.';
    formMessage.classList.toggle('is-error', !selected);
  });
}
