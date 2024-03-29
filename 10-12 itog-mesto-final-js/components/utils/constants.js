const initialCards = [
  {
    name: "Териберка.",
    link: "./images/places/teriberka.jpg",
  },
  {
    name: "Москва.",
    link: "./images/places/moscow.jpg",
  },
  {
    name: "Кинерма.",
    link: "./images/places/kinerma.jpg",
  },
  {
    name: "Кировск.",
    link: "./images/places/kirkovsk.jpg",
  },
  {
    name: "Самара.",
    link: "./images/places/samara.jpg",
  },
  {
    name: "Иваново.",
    link: "./images/places/ivanovo.jpg",
  },
];

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const popName = document.querySelector(".profile__title");
const popUpdescription = document.querySelector(".profile__description");

const avatarImage = document.querySelector(".profile__logo");


const formElementAccount = document.forms["popup-form-account"];
const nameInput = formElementAccount.elements["input-name"];
const jobInput = formElementAccount.elements["input-description"];

const formElementCard = document.forms["popup-form-card"];

const formElementAvatar = document.forms["popup-form-avatar"];

const authorizationToken = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "731083b8-75e9-4b19-a7af-5fdc5003b112",
    "Content-Type": "application/json",
  },
};

export { initialCards, editButton, addButton, popName, popUpdescription, formElementAccount, nameInput, jobInput, formElementCard, formElementAvatar, avatarImage, authorizationToken };