const sendButton = {
  message: 'Меня нажали',
  click: function () {
    console.log(this.message);
  }
};

const anotherButton = {
  message: 'И меня нажали',
};

const button1 = document.querySelector('.btn-1');
const button2 = document.querySelector('.btn-2');

button1.addEventListener('click', sendButton.click.bind(sendButton));
button2.addEventListener('click', sendButton.click.bind(anotherButton));
