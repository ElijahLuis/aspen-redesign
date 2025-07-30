// Placeholder for interactive widgets
// Future features: table sorting, toggle menus, modals

export function initComponents() {
  console.log('components will initialize here');
}

export function initTabs() {
  const tablists = document.querySelectorAll('[role="tablist"]');
  tablists.forEach(list => {
    const tabs = list.querySelectorAll('[role="tab"]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
        tab.setAttribute('aria-selected', 'true');
      });
    });
  });
}

export function initStickyActions() {
  const bars = document.querySelectorAll('.form-actions--sticky');
  const update = bar => {
    const floating = window.scrollY + window.innerHeight >= bar.offsetTop + bar.offsetHeight;
    bar.classList.toggle('form-actions--floating', floating);
  };
  bars.forEach(bar => {
    update(bar);
    window.addEventListener('scroll', () => update(bar));
    window.addEventListener('resize', () => update(bar));
  });
}

export function initModals() {
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.getAttribute('data-modal-open'));
      if (target) target.classList.add('modal--open');
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) modal.classList.remove('modal--open');
    });
  });
}

export function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  const setState = theme => {
    document.documentElement.dataset.theme = theme;
    toggleBtn.setAttribute('aria-pressed', theme === 'dark');
  };

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || 'light';
    const newTheme = current === 'dark' ? 'light' : 'dark';
    setState(newTheme);
  });

  // initialize button state
  setState(document.documentElement.dataset.theme || 'light');
}

export function initSearchBars() {
  document.querySelectorAll('.find-bar__search input[type="text"]').forEach(input => {
    const table = input.closest('main')?.querySelector('table');
    if (!table) return;
    input.addEventListener('input', () => {
      const query = input.value.toLowerCase();
      table.querySelectorAll('tbody tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.hidden = !text.includes(query);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initComponents();
  initTabs();
  initStickyActions();
  initModals();
  initThemeToggle();
  initSearchBars();
});
