"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//console.log(numberOfFilms);

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

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('ok');
	} else {
		console.log('not ok');
		i--;
	}	
}

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

//console.log(personalMovieDB.movies);