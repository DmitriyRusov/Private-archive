// создаёт разметку для поста
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

//const insertContainer =  document.querySelector('.container')
// вставляет разметку в DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML('afterbegin', markup);
}

function getPosts() {
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
    return res.json()
  })
  .then((data) => {
    //console.log(data)
  //data.forEach(a => console.log(a.body))
data.forEach(post => addPostToDOM(document.querySelector('.container'), createPostMarkup(post)))
  })
}

getPosts();
