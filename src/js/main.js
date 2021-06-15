import modals from './modules/modals';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const paddingWidth = window.innerWidth - document.body.scrollWidth;

  modals(paddingWidth);
  sliders('.main-slider-item', 'vertical');
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
});