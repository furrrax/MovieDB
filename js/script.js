"use strict";

//1)
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);

//2)
const movies = {},
	actorsList = {},
	genresList = [];

const personalMovieDB = {
	count: numberOfFilms,
	movies: movies,
	actors: actorsList,
	genres: genresList,
	privat: false
};

console.log(personalMovieDB);

//3)

const a = prompt('Один из просмотренных фильмов?', ''),
	b = +prompt('На сколько оцените его?', ''),
	c = prompt('Один из просмотренных фильмов?', ''),
	d = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);