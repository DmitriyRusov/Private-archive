const moreQuote = document.querySelector('.header__btn')

moreQuote.addEventListener('click', updateQuote)

const quoteElement = document.querySelector('.quote')

function updateQuote() {
  fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then((data) => {
      quoteElement.textContent = data.quote;
    });
}