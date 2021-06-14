import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {

  const paddingWidth = window.innerWidth - document.body.scrollWidth;

  modals(paddingWidth);
});