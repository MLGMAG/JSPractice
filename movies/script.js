"use strict";

const COUNT_QUESTION = "How many films have you watched?";
const LAST_MOVIE_QUESTION = "What the last film have you watched?";
const RATE_QUESTION = "Rate it!";
const LITTLE_MOVIE_COUNT = "It's to little!";
const COOL_MOVIE_COUNT = "It's cool!";
const MUCH_MOVIE_COUNT = "It's too much!";
const ERROR_MESSAGE = "Error occured";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieCount = +prompt(COUNT_QUESTION, "");
personalMovieDB.count = movieCount;

if (movieCount < 10 && movieCount >= 0) {
    console.log(LITTLE_MOVIE_COUNT);
} else if (movieCount >= 10 && movieCount < 30) {
    console.log(COOL_MOVIE_COUNT);
} else if (movieCount >= 30) {
    console.log(MUCH_MOVIE_COUNT);
} else {
    console.log(ERROR_MESSAGE);
}

let processedQuestions = 0;
let requiredQuestions = 2;
do {
    const lastWhatchedMovie = prompt(LAST_MOVIE_QUESTION, "");
    const lastFilmRate = prompt(RATE_QUESTION, "");
    if (isValidAnswer(lastWhatchedMovie) && isValidAnswer(lastFilmRate)) {
        personalMovieDB.movies[lastWhatchedMovie] = lastFilmRate;
        processedQuestions++;
    }
} while (processedQuestions != requiredQuestions);

console.log(personalMovieDB);


function isValidAnswer(answer) {
    return typeof (answer) === "string" &&
        answer.length < 50 &&
        answer.length > 0;
}
