//part 3
//task 9
let numberOfFilms;
function start() {
    numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let c = prompt("Один из последних просмотренных фильмов?", ""),
            C = prompt("На сколько оцените его?", "");
        if (c != '' && c.length < 50 && c != null && C != '' && C.length < 50 && C != null) {
          personalMovieDB.movies[c] = C;
        } else {
          i--;
        }
         
      }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count >=0 && personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы - класический зритель!');
      } else if (personalMovieDB.count >= 30) {
        console.log('Вы - киноман!');
      } else {
        console.log('Произошла ошибка');
      }
}

detectPersonalLevel();

//var 1
function showMyDB() {
    if (personalMovieDB.privat == 'false') {
        console.log(personalMovieDB);
    }
}
showMyDB();

//var 2
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ?`, '');
    }
}
writeYourGenres();
