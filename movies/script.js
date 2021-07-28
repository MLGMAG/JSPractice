"use strict";

const COUNT_QUESTION = "How many films have you watched?";
const LAST_MOVIE_QUESTION = "What the last film have you watched?";
const RATE_QUESTION = "Rate it!";

const movieCount = prompt(COUNT_QUESTION, "");

const personalMovieDB = {
    count: movieCount,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < movieCount; i++) {
    const lastWhatchedMovie = prompt(LAST_MOVIE_QUESTION, "");
    const lastFilmRate = prompt(RATE_QUESTION, "");
    personalMovieDB.movies[lastWhatchedMovie] = lastFilmRate;
}

console.log(personalMovieDB);
