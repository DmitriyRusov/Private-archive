function PopupWithForm({ name, titleText, children, buttonText, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className={`popup__container popup__container_${name}`}>
        <h2 className="popup__title">{titleText}</h2>
        <form className="popup__form" name={`popup-form-${name}`}>
          {children}
          <button type="submit" className="popup__button-save">
            {buttonText}
          </button>
        </form>
        <button type="button" className="popup__button-close hover-animation" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
