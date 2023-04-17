const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');

function search (entity, entityId) {
 return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}/`)
 // .then((res) => {return res.json()})
}

form.addEventListener('submit', function submit(e) {
  e.preventDefault();
  
  renderLoading(true)
  
  search(form.elements.entity.value, form.elements.entityId.value)
  
  .then((res) => {console.log('1',res);if (res.ok) {return res.json()} {return Promise.reject(res.status);}})
  .then((res) => { console.log('2',res); renderResult(res.name)})
  .catch((err) => {console.log(`Ошибка: ${err}`); renderError(`Ошибка: ${err}`)})
  .finally(() => {renderLoading (false)}); 
})

function renderResult(text) {
  result.textContent = text;
  error.textContent = '';
}

function renderError(err) {
  error.textContent = err;
  result.textContent = '';
}

function renderLoading  (isLoading) {
  if (isLoading) { spinner.classList.add('spinner_visible'); content.classList.add('content_hidden') }
  else  { spinner.classList.remove('spinner_visible'); content.classList.remove('content_hidden') }
}





