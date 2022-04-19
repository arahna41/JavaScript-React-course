//part 4
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов Вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let c = prompt("Один из последних просмотренных фильмов?", ""),
        C = prompt("На сколько оцените его?", "");
      if (
        c != "" &&
        c.length < 50 &&
        c != null &&
        C != "" &&
        C.length < 50 &&
        C != null
      ) {
        personalMovieDB.movies[c] = C;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы - класический зритель!");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы - киноман!");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      
      /* method 1 */
      /* let genre = prompt(`Ваш любимый жанр под номером ${i} ?`,"");

      if ( genre === null || genre === "") {
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      } */

     /*  method 2 */
      let genres = prompt(`Введите Ваши любимые жанры через запятую:`,"").toLowerCase();

      if ( genres === null || genres === "") {
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      } 
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log( `Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

console.log(personalMovieDB.writeYourGenres());
