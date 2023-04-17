function Tweet (text, user) {
  this.text = text;
  this.user = user;
}

const tweet1 = new Tweet(
  'I’m starting a candy company & it’s going to be amazing',
  'Elon Musk'
);

const tweet2 = new Tweet(
  'The United States has VERY LOW INFLATION, a beautiful thing!',
  'Donald Trump'
);

const tweet3 = new Tweet('Vk mho cucumber', 'Дмитрий Медведев');

console.log(tweet1.user); // "Elon Musk"
console.log(tweet2.user); // "Donald Trump"
console.log(tweet3.text); // "Vk mho cucumber"
