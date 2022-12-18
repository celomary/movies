import {TMDB_API_KEY, OMDB_API_KEY} from '../assets/env';
import {DetailApiType} from '../types';
import {fetchCard} from './fetchCard';

type ActorInfoType = {
  name: string;
  image: string;
};

const fetchActorsName = async (imdb_id: string): Promise<string[]> => {
  const resp = await fetch(
    `https://www.omdbapi.com/?i=${imdb_id}&apikey=${OMDB_API_KEY}`,
  );
  const data = await resp.json();
  const actors = data.Actors.split(',');
  return actors;
};

const fetchActorsInformations = async (
  actor_name: string,
): Promise<ActorInfoType | null> => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&query=${actor_name}`,
  );
  const data = await resp.json();
  if (!data.results.length) {
    return null;
  }
  const {results} = data;
  return {
    name: results[0].name,
    image: `https://image.tmdb.org/t/p/w500/${results[0].profile_path}`,
  };
};

const checkIsNull = (actor_info: ActorInfoType | null): actor_info is null => {
  return actor_info === null;
};
const getActorsInformations = async (
  actors: string[],
): Promise<ActorInfoType[]> => {
  const info: ActorInfoType[] = [];
  for (const actor of actors) {
    const actor_info = await fetchActorsInformations(actor);
    if (!checkIsNull(actor_info)) {
      info.push(actor_info);
    }
  }
  return info;
};

const getSimilarMovies = async (movie_id: number) => {
  const data = await fetchCard({
    url: `/movie/${movie_id}/similar`,
  });
  return data;
};
export const fetchMovieDetails = async (id: number): Promise<DetailApiType> => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`,
  );
  const data = await resp.json();
  const actors = await fetchActorsName(data.imdb_id);
  const actorsInfo = await getActorsInformations(actors);
  const similarMovies = await getSimilarMovies(id);
  return {
    actors: actorsInfo,
    genres: data.genres
      .map((element: {id: number; name: string}) => element.name)
      .join(', '),
    title: data.original_title,
    image: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`,
    language: data.original_language,
    description: data.overview,
    id: data.id,
    rate: data.vote_average,
    releaseDate: data.release_date,
    similarMovies: similarMovies,
  };
};
