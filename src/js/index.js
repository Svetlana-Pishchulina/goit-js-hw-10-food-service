import '../sass/styles.scss';
import menuMarkupTemplates from '../templates/gallery-items.hbs';
import dishes from '../menu.json';
const menuEl = document.querySelector('.js-menu');
const markup = menuMarkupTemplates(dishes);
menuEl.insertAdjacentHTML('beforeend', markup);

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// document.body.classList.add(Theme.LIGHT);
// const checkboxEl = document.querySelector('.theme-switch__toggle');
// checkboxEl.addEventListener('change', onCheckboxChange);
// function onCheckboxChange() {
//   if (checkboxEl.checked) {
//     document.body.classList.replace(Theme.LIGHT, Theme.DARK);
//     checkboxEl.removeAttribute(checked);
//   }
//   if (!checkboxEl.checked) {
//     document.body.classList.replace(Theme.DARK, Theme.LIGHT);
//     checkboxEl.setAttribute(checked, true);
//   }
// }

const checkboxEl = document.querySelector('.theme-switch__toggle');
checkboxEl.addEventListener('change', onCheckboxChange);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem('theme')) {
  document.body.classList.add(localStorage.getItem('theme'));
} else {
  document.body.classList.add(Theme.LIGHT);
}
if (localStorage.getItem('theme') === Theme.DARK) {
  checkboxEl.checked = true;
}

function onCheckboxChange() {
  if (checkboxEl.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
  if (!checkboxEl.checked) {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// let checkedTheme;
// // checkedTheme = Theme.LIGHT;
// localStorage.setItem('theme', checkedTheme);
// document.body.classList.add(Theme.LIGHT);
// const checkboxEl = document.querySelector('.theme-switch__toggle');
// checkboxEl.addEventListener('change', onCheckboxChange);

// function onCheckboxChange() {
//   if (checkboxEl.checked) {
//     checkedTheme = Theme.DARK;
//     console.log(checkedTheme);
//     localStorage.setItem('theme', checkedTheme);
//     // console.log(localStorage.getItem('theme'));
//     document.body.classList.replace(Theme.LIGHT, localStorage.getItem('theme'));
//     checkboxEl.removeAttribute(checked);
//   }
//   if (!checkboxEl.checked) {
//     checkedTheme = Theme.LIGHT;
//     localStorage.setItem('theme', checkedTheme);
//     console.log(checkedTheme);
//     // console.log(localStorage.getItem('theme'));
//     document.body.classList.replace(Theme.DARK, localStorage.getItem('theme'));
//     checkboxEl.setAttribute(checked, true);
//   }
// }
