import {TMDB_API_KEY} from '../assets/env';
import {TeaserApiType} from '../types';

export const fetchHomeTeaser = async (): Promise<TeaserApiType | {}> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}`,
    );
    const data = await resp.json();
    const {backdrop_path, vote_average, original_title, id} =
      data.results[Math.floor(Math.random() * data.results.length)];
    const result = {
      image: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
      rate: vote_average,
      title: original_title,
      id,
    };
    return result;
  } catch (e) {
    return {};
  }
};
