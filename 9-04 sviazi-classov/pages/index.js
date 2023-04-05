import Section from '../components/Section.js';
import DefaultCard from '../components/DefaultCard.js';
import HorizontalCard from '../components/HorizontalCard.js';

import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
  items
} from '../utils/constants.js';

const defaultCardList = new Section ({ data: items,  renderer: (item) => {
    const card = new DefaultCard(item, '.default-card')

    const cardElement = card.generateCard();

    defaultCardList.setItem(cardElement);
  } }, cardListSelector);

const horizontalCardList = new Section ({ data: items,  renderer: (item) => {
    const card = new HorizontalCard(item, '.horizontal-card');

    const cardElement = card.generateCard();

    horizontalCardList.setItem(cardElement);
  } }, cardListSelector);

defaultCardButton.addEventListener('click', () => {
  defaultCardList.renderItems();
});

horizontalCardButton.addEventListener('click', () => {
  horizontalCardList.renderItems();
});

defaultCardList.renderItems();