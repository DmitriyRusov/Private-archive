export default class FilterButton {
  constructor({data, handleButtonClick}, buttonSelector) {
    this._additionalButtonClass = data.buttonClass
    this._buttonSelector = buttonSelector
    this._handleButtonClick = handleButtonClick
    this._isGrid = data.isGrid
  }
  
  _getTemplate () {
    const buttonElement = document.querySelector(this._buttonSelector).content.querySelector('.filter__button').cloneNode(true);
    return buttonElement;
  }
  
_setEventListeners() {
  this._element.addEventListener('click', () => {
    this._handleButtonClick(this._isGrid);
  });
}
  
    generateButton() {
    this._element = this._getTemplate();
    this._element.classList.add(this._additionalButtonClass);
     
    this._setEventListeners()
    return this._element;
  }
  
  
  
  
}
