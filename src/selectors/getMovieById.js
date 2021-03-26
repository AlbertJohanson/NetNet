import { movieData } from "../data/movie-data";

export const getMovieById = (id, movieId) => {

   const section = movieData.find(sections => sections.id === id)

  return section.data.find(movie => movie.movieid === movieId)

}