function ImagePopup({ card, onClose }) {
  // console.log(card)

  return (
    <div className={`popup popup_type_image ${card && "popup_opened"}`}>
      <div className="popup__container-image">
        <img className="popup__image" src={card && card.link} alt={card && card.name} />
        <h3 className="popup__description">{card && card.name}</h3>
        <button type="button" className="popup__button-close hover-animation" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
