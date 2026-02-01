document.addEventListener('DOMContentLoaded', () => {
  const storedTheme = localStorage.getItem('salonbook-theme') || 'light';
  applyTheme(storedTheme);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    updateToggleLabel(toggleBtn, storedTheme);

    toggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('salonbook-theme', newTheme);
      updateToggleLabel(toggleBtn, newTheme);
    });
  }
});

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

function updateToggleLabel(button, theme) {
  if (!button) return;
  button.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}
