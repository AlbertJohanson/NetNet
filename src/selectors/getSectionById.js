import { movieData } from "../data/movie-data";

export const getSectionById = (id) => {

   const section = movieData.find(sections => sections.id === id)

  return section

}