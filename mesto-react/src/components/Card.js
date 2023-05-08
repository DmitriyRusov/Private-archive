function Card({ card, onClickCard }) {
  function handleCardClick() {
    onClickCard(card);
  }

  return (
    <li className="element">
      <img className="element__image" alt={card.name} src={card.link} onClick={handleCardClick} />
      <div className="element__description-block">
        <h3 className="element__description">{card.name}</h3>
        <div className="element__like-box">
          <button className="element__like" aria-label="Нравится."></button>
          <p className="element__number-likes">{card.likes.length}</p>
        </div>
      </div>
      <button className="element__delete-button" aria-label="Удалить."></button>
    </li>
  );
}

export default Card;
