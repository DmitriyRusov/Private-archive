import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(true);
  }

  function closePopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onCardAdd={handleAddPlaceClick} onClickCard={handleCardClick} />

      <PopupWithForm name={"account"} titleText={"Редактировать профиль"} children={"card"} buttonText={"Сохранить"} isOpen={isEditAvatarPopupOpen} onClose={closePopups}>
        <input type="text" placeholder="name" d="input-account-name" className="popup__input" name="input-name" defaultValue="Nice Smart Guy" minLength="2" maxLength="40" required />
        <span className="input-account-name-error popup__span-error">Необходимо заполнить данное поле</span>
        <input type="text" placeholder="description" id="input-account-description" className="popup__input" name="input-description" defaultValue="Известный обман на собесеодвании" minLength="2" maxLength="200" required />
        <span className="input-account-description-error popup__span-error">Необходимо заполнить данное поле</span>
      </PopupWithForm>

      <PopupWithForm name={"avatar"} titleText={"Аватар"} children={"card"} buttonText={"Сохранить"} isOpen={isEditProfilePopupOpen} onClose={closePopups}>
        <input type="url" placeholder="Ссылка на картинку" id="input-avatar-link" className="popup__input" name="input-description" defaultValue="" required />
        <span className="input-avatar-link-error popup__span-error">Необходимо заполнить данное поле</span>
      </PopupWithForm>

      <PopupWithForm name={"card"} titleText={"Новое место"} children={"card"} buttonText={"Сохранить"} isOpen={isAddPlacePopupOpen} onClose={closePopups}>
        <input type="text" placeholder="Название" id="input-card-name" className="popup__input" name="input-name" defaultValue="" minLength="2" maxLength="30" required />
        <span className="input-card-name-error popup__span-error">Необходимо заполнить данное поле</span>
        <input type="url" placeholder="Ссылка на картинку" id="input-card-description" className="popup__input" name="input-description" defaultValue="" required />
        <span className="input-card-description-error popup__span-error">Необходимо заполнить данное поле</span>
      </PopupWithForm>

      <PopupWithForm name={"delete-card"} titleText={"Вы уверены?"} children={""} buttonText={"Да"} />

      <ImagePopup card={selectedCard} onClose={closePopups} />

      <Footer />
    </div>
  );
}

export default App;
