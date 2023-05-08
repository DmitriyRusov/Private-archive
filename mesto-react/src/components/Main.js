import { useState, useEffect } from "react";
import { apiClass } from "../utils/Api.js";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onCardAdd, onClickCard }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setСards] = useState([]);

  useEffect(() => {
    Promise.all([apiClass.getUserData(), apiClass.getInitialCards()])
      .then(([userData, cardItems]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setСards(cardItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__logo" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button hover-animation" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-button hover-animation" type="button" onClick={onCardAdd}></button>
      </section>

      <section className="elements">
        <ul className="elements__section-elements">
          {cards.map((card) => (
            <Card card={card} key={card._id} onClickCard={onClickCard} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
