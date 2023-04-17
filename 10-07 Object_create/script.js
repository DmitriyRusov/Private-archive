// прототип объекта newSong
const songPrototype = {
  like: function () {
    this.isLiked = !this.isLiked;
  }
};

function createSong(title, artist) {
  // создаём пустой объект с прототипом
  const newSong = Object.create(songPrototype);

  // добавляем нужные свойства в объект
  newSong.title = title;
  newSong.artist = artist;
  newSong.isLiked = false;

  // возвращаем объект песни
  return newSong;
}

const song1 = createSong('Футбольный мяч', 'Антоха MC');
const song2 = createSong('На заре', 'Альянс');
const song3 = createSong('Ай', 'Хаски');

console.log(song1); // { title: 'Футбольный мяч' ... }
console.log(song2); // { title: 'На заре' ... }
console.log(song1.like === song2.like); // true