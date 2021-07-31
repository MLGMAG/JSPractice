'use strict';

const ADVERTISING_ELEMENT_CLASS = '.promo__adv';
const PROMO_GENRE_CLASS = '.promo__genre';
const PROMO_BG_CLASS = '.promo__bg';
const FILMS_SELECTOR = '.promo__interactive-list .promo__interactive-item';
const FILM_LIST_SELECTOR = '.promo__interactive-list';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Cкотт Пилигрим против..."
    ]
};

removeAdvertisingElements();
changePromoGenre('Drama');
changePromoBackgroundImage('url(img/bg.jpg)');
eraseFilmList();
addFilmsToList(movieDB.movies);

function addFilmsToList(filmsArray) {
    filmsArray = [...filmsArray];
    filmsArray.sort();
    addNumerationToFilms(filmsArray);

    let filmList = document.querySelector(FILM_LIST_SELECTOR);
    filmsArray.forEach(item => addFilmToList(filmList, item));
}

function addNumerationToFilms(filmsArray) {
    filmsArray.forEach((item, index, array) => {
        array[index] = `${index + 1}. ${item}`;
    });
}

function addFilmToList(htmlList, filmName) {
    let filmDiv = createFilmDiv(filmName);
    htmlList.appendChild(filmDiv);
}

function createFilmDiv(filmName) {
    let deleteDiv = createDeleteMovieDiv();
    let filmDiv = document.createElement('li');
    filmDiv.classList.add('promo__interactive-item');
    filmDiv.textContent = filmName;
    filmDiv.appendChild(deleteDiv);
    return filmDiv;
}

function createDeleteMovieDiv() {
    let deleteDiv = document.createElement('div');
    deleteDiv.classList.add('delete');
    return deleteDiv;
}

function eraseFilmList() {
    let filmList = document.querySelector(FILM_LIST_SELECTOR);
    filmList.innerHTML = "";
}

function removeAdvertisingElements() {
    let advertisingElement = document.querySelector(ADVERTISING_ELEMENT_CLASS);
    advertisingElement.innerHTML = '';
}

function changePromoGenre(newGenre) {
    let promoGenreDiv = document.querySelector(PROMO_GENRE_CLASS);
    promoGenreDiv.textContent = newGenre;
}

function changePromoBackgroundImage(newImageUrl) {
    let promoBgDiv = document.querySelector(PROMO_BG_CLASS);
    promoBgDiv.style.backgroundImage = newImageUrl;
}
