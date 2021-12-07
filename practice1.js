"use strict";
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
