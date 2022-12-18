import {TMDB_API_KEY} from '../assets/env';
import {CardApiType} from '../types';

type elementType = {
  [key: string]: number | number[] | string | boolean | Date;
};

type fetchCardParams = {
  url: string;
  parameters?: {
    [key: string]: string;
  };
};

export const fetchCard = async ({
  url,
  parameters,
}: fetchCardParams): Promise<CardApiType[]> => {
  const stringifyParams = parameters
    ? Object.entries(parameters)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
    : '';
  const resp = await fetch(
    `https://api.themoviedb.org/3/${url}?api_key=${TMDB_API_KEY}${
      parameters ? '&' + stringifyParams : ''
    }`,
  );
  const data = await resp.json();
  return data.results.map((element: elementType) => ({
    title: element.title,
    image: `https://image.tmdb.org/t/p/w500/${element.backdrop_path}`,
    genre_ids: element.genre_ids,
    id: element.id,
    releaseDate: element.release_date,
    rate: element.vote_average,
    language: element.original_language,
  }));
};
