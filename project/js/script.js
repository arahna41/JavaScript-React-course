/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

/* task 1 */
const advertising = document.querySelectorAll('.promo__adv img');
advertising.forEach(item => {
    item.remove();
});


/* task 2 */
const genreOfFilm = document.querySelector('.promo__genre');

const newGenreOfFilm = document.createElement('div');
newGenreOfFilm.innerHTML = 'ДРАМА';
newGenreOfFilm.classList.add('promo__genre');

genreOfFilm.replaceWith(newGenreOfFilm);

/* task 3 */
const bg = document.querySelector('.promo__bg');
bg.style.backgroundImage = 'url("img/bg.jpg")';

/* task 4-5 */
const parentFilms = document.querySelector('.promo__interactive-list'); 
const moviesHTML = document.querySelectorAll('.promo__interactive-item');
moviesHTML.forEach(item => {
    item.remove();
});

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${i + 1}. ${item}`;
    li.classList.add('promo__interactive-item');

    const btnDelete = document.createElement('div');
    btnDelete.classList.add('delete');
    li.append(btnDelete);

    parentFilms.append(li);
});