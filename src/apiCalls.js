export const getAllMoviesData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

export const getSingleMovieData = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2//movies/:movie_id')
    .then(response => response.json())
}