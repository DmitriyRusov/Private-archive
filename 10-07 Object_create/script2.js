function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.isLiked = false;
}

const song1 = new Song('Футбольный мяч', 'Антоха MC');
const song2 = new Song('На заре', 'Альянс');
const song3 = new Song('Ай', 'Хаски');

console.log(song1); // { title: 'Футбольный мяч' ... }
console.log(song2); // { title: 'На заре' ... }
console.log(song1.like === song2.like); // true