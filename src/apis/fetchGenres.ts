import {TMDB_API_KEY} from '../assets/env';

type elementType = {
  id: number;
  name: string;
};

export const fetchGenres = async (): Promise<elementType[]> => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}`,
  );
  const {genres} = await resp.json();
  return [{name: 'All', id: -1}, ...genres];
};
