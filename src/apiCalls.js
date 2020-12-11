export const getAllMoviesData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

export const getSingleMovieData = (id) => {
  const apiLink = 'https://rancid-tomatillas.herokuapp.com/api/v2//movies/'
  return fetch(`${apiLink}${id}`)
    .then(response => response.json())
}