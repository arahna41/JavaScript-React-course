/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  /* task 1 */
  const advertising = document.querySelectorAll(".promo__adv img");
  advertising.forEach((item) => {
    item.remove();
  });

  /* task 2 */
  const genreOfFilm = document.querySelector(".promo__genre");

  const newGenreOfFilm = document.createElement("div");
  newGenreOfFilm.innerHTML = "ДРАМА";
  newGenreOfFilm.classList.add("promo__genre");

  genreOfFilm.replaceWith(newGenreOfFilm);

  /* task 3 */
  const makeChanges = () => {
    const bg = document.querySelector(".promo__bg");
    bg.style.backgroundImage = 'url("img/bg.jpg")';
  };
  makeChanges();

  /* task 4-5 */
  const parentFilms = document.querySelector(".promo__interactive-list");
  const moviesHTML = document.querySelectorAll(".promo__interactive-item");

  const deleteAdv = (array) => {
    array.forEach((item) => {
      item.remove();
    });
  };
  deleteAdv(moviesHTML);

  const sortArray = (arr) => {
    arr.sort();
  };

  function createLi(films, parent) {
    parent.innerHTML = "";

    sortArray(films);

    movieDB.movies.forEach((item, i) => {
      const btnDelete = document.createElement("div");
      btnDelete.classList.add("delete");

      const li = document.createElement("li");
      li.innerHTML = `${i + 1}. ${item}`;
      li.classList.add("promo__interactive-item");

      li.append(btnDelete);

      parentFilms.append(li);
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createLi(films, parent);
      });
    });
  }
  createLi(movieDB.movies, parentFilms);

  /* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

  const form = document.querySelector("form.add"),
    inputWatchedFilm = form.querySelector(".adding__input"),
    checkbox = form.querySelector('[type="checkbox"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let newFilm = inputWatchedFilm.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.slice(0, 22)}...`;
      }
      if (favorite) {
        console.log("Add favorite film!");
      }
      movieDB.movies.push(newFilm);
      sortArray(movieDB.movies);
      createLi(movieDB.movies, parentFilms);
    }

    e.target.reset();
  });
});
