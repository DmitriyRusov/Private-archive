export const items = [
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID',
    description: 'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
    price: '82 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID Premium kit',
    description: 'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
    price: '126 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
    title: 'Airwheel',
    description: 'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
    price: '145 000'
  },
];

export const cardListSelector = '.card-list__items';
export const cardList = document.querySelector('.card-list__items');
export const popupElement = document.querySelector('.popup');
export const popupCloseButton = document.querySelector('.popup__close');
export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');
export const defaultCardButton = document.querySelector('.filter__button_type_grid');
export const horizontalCardButton = document.querySelector('.filter__button_type_column');