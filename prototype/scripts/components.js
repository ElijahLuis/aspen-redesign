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

document.addEventListener('DOMContentLoaded', () => {
  initComponents();
  initTabs();
});
