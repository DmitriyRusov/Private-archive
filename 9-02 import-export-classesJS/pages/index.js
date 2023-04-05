import { defaultCardButton, horizontalCardButton } from '../utils/constants.js';
import { renderElements } from '../utils/utils.js';







defaultCardButton.addEventListener('click', () => {
  renderElements(true);
});

horizontalCardButton.addEventListener('click', () => {
  renderElements(false);
});

renderElements();
