class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }
}

class SongCover extends Song {
  constructor(title, artist, originalAuthor) {
    //this.title = title; // эта строчка дублирует код из конструктора Song
    //this.artist = artist; // и эта дублирует
    //this.isLiked = false; // и эта тоже
    super(title, artist); // Возрат из Song
    this.originalAuthor = originalAuthor;
    this.isReported = false;
  }

    report() { 
    this.isReported = true; // Осталось добавить недостающий метод report
  }
}

const song = new SongCover('The Man Who Sold the World', 'Nirvana', 'David Bowie');

song.like();
song.report();