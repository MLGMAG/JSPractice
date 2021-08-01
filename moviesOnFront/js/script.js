'use strict';

const ADVERTISING_ELEMENT_CLASS = '.promo__adv';
const PROMO_GENRE_CLASS = '.promo__genre';
const PROMO_BG_CLASS = '.promo__bg';
const FILMS_SELECTOR = '.promo__interactive-list .promo__interactive-item';
const FILM_LIST_SELECTOR = '.promo__interactive-list';
const ADD_FORM_CLASS = '.add';
const NEW_FILM_INPUT_CLASS = '.adding__input';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "скотт пилигрим против..."
    ]
};

document.addEventListener('DOMContentLoaded', excecuteCode());

function excecuteCode() {
    removeAdvertisingElements();
    changePromoGenre('Drama');
    changePromoBackgroundImage('url(img/bg.jpg)');
    updateFilmList(movieDB.movies);
    addEventListenersForAddingFilm();
}

function addEventListenersForAddingFilm() {
    let addFormElement = document.querySelector(ADD_FORM_CLASS);
    addFormElement.addEventListener('submit', addNewFilmCallback);
    addFormElement.addEventListener('submit', favoriteCallback);
    addFormElement.addEventListener('submit', restoreFormCallback);
}

function restoreFormCallback(event) {
    event.target.reset();
}

function favoriteCallback(event) {
    let formCheckbox = event.target.querySelector('[type="checkbox"]');
    if (formCheckbox.checked) {
        console.log("Added favorite film!");
    }
}

function addNewFilmCallback(event) {
    event.preventDefault();
    let newFilm = getNewFilmFromInput(event.target);
    if (isValidFilm(newFilm)) {
        movieDB.movies.push(newFilm);
        updateFilmList(movieDB.movies);
    }
}

function getNewFilmFromInput(form) {
    let newFilmInputElem = form.querySelector(NEW_FILM_INPUT_CLASS);
    return processNewFilmName(newFilmInputElem.value);
}

function processNewFilmName(newFilmName) {
    if (newFilmName.length > 21) {
        newFilmName = `${newFilmName.substring(0,22)}...`;
    }
    return newFilmName;
}

function updateFilmList(moviesArray) {
    eraseFilmList();
    addFilmsToList(moviesArray);
}

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
    deleteDiv.addEventListener('click', deleteMovieCallback, 'once');
    return deleteDiv;
}

function deleteMovieCallback(event) {
    let filmNode = event.target.parentElement;
    let filmName = filmNode.textContent;
    filmNode.remove();
    movieDB.movies = movieDB.movies
        .filter((value) => value != filmName.substring(3));
    updateFilmList(movieDB.movies);
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

function isValidFilm(film) {
    return typeof(film) === "string" &&
        film.length > 0;
}
