function Tweet(text, user) {
  this.text = text;
  this.user = user;
}

Tweet.prototype.post = function () {
  console.log(this.user);
  console.log(this.text);
};

Tweet.prototype.edit = function (text) {
  this.text = text;
};

// напишите код здесь

const tweet1 = new Tweet(
  'I’m starting a candy company & it’s going to be amazing',
  'Elon Musk'
);

tweet1.post();

/*
  "I’m starting a candy company & it’s going to be amazing"
  "Elon Musk"
*/

tweet1.edit('Never mind');
tweet1.post();

/*
  "Never mind"
  "Elon Musk"
*/
