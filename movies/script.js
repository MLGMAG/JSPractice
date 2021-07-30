"use strict";

const COUNT_QUESTION = "How many films have you watched?";
const LAST_MOVIE_QUESTION = "What the last film have you watched?";
const RATE_QUESTION = "Rate it!";

const LITTLE_MOVIE_COUNT = "It's to little!";
const COOL_MOVIE_COUNT = "It's cool!";
const MUCH_MOVIE_COUNT = "It's too much!";
const ERROR_MESSAGE = "Error occured";

const SEPARETED_GENRES = "Enter your favorite genres separated by semicolon";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    generateMovieCount: function() {
        this.count = +prompt(COUNT_QUESTION, "");
    },
    processUserTitle: function() {
        if (this.count < 10 && this.count >= 0) {
            console.log(LITTLE_MOVIE_COUNT);
        } else if (this.count >= 10 && this.count < 30) {
            console.log(COOL_MOVIE_COUNT);
        } else if (this.count >= 30) {
            console.log(MUCH_MOVIE_COUNT);
        } else {
            console.log(ERROR_MESSAGE);
        }
    },
    processFilmInfo: function() {
        let processedQuestions = 0;
        let requiredQuestions = 2;
        do {
            const lastWhatchedMovie = prompt(LAST_MOVIE_QUESTION, "");
            const lastFilmRate = prompt(RATE_QUESTION, "");
            if (isValidAnswer(lastWhatchedMovie) &&
                isValidAnswer(lastFilmRate)) {
                this.movies[lastWhatchedMovie] = lastFilmRate;
                processedQuestions++;
            }
        } while (processedQuestions != requiredQuestions);
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        let favoriteGenres;
        do {
            favoriteGenres = prompt(SEPARETED_GENRES, "");

        } while (!isValidAnswer(favoriteGenres));
        this.genres = favoriteGenres.split(",");
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
};

personalMovieDB.generateMovieCount();
personalMovieDB.processUserTitle();
personalMovieDB.processFilmInfo();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

function isValidAnswer(answer) {
    return typeof(answer) === "string" &&
        answer.length < 50 &&
        answer.length > 0;
}
