"use strict";
//part 1
//task 1
const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

//task 2
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//task 3
const a = prompt("Один из последних просмотренных фильмов?", ""),
      A = prompt("На сколько оцените его?", ""),
      b = prompt("Один из последних просмотренных фильмов?", ""),
      B = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = A;
personalMovieDB.movies[b] = B;

console.log(personalMovieDB);

//part 2
//task 4-5

for (let i = 0; i < 2; i++) {
  let c = prompt("Один из последних просмотренных фильмов?", ""),
      C = prompt("На сколько оцените его?", "");
  if (c != '' && c.length < 50 && c != null && C != '' && C.length < 50 && C != null) {
    personalMovieDB.movies[c] = C;
  } else {
    i--;
  }
   
}
console.log(personalMovieDB);

//task 6
if (personalMovieDB.count >=0 && personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы - класический зритель!');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы - киноман!');
} else {
  console.log('Произошла ошибка');
}

//task 7
let i = 0;
while (i < 2) {
  let c = prompt("Один из последних просмотренных фильмов?", ""),
      C = prompt("На сколько оцените его?", "");
  if (c != '' && c.length < 50 && c != null && C != '' && C.length < 50 && C != null) {
    personalMovieDB.movies[c] = C;
  } else {
    i--;
  }
  i++;
}
console.log(personalMovieDB);

//task 8
let j = 0;
do {
  let c = prompt("Один из последних просмотренных фильмов?", ""),
      C = prompt("На сколько оцените его?", "");
  if (c != '' && c.length < 50 && c != null && C != '' && C.length < 50 && C != null) {
    personalMovieDB.movies[c] = C;
  } else {
    j--;
  }
  j++;
} while (j < 2);
console.log(personalMovieDB);