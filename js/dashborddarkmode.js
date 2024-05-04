const body = document.body;
const lightModeIcon = document.querySelector('.light-mode-icon');
const darkModeIcon = document.querySelector('.dark-mode-icon');
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  lightModeIcon.style.display = body.classList.contains('dark-mode') ? 'none' : 'inline-block';
  darkModeIcon.style.display = body.classList.contains('dark-mode') ? 'inline-block' : 'none';
});