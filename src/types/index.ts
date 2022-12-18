export type TeaserApiType = {
  image: string;
  rate: number;
  title: string;
  id: number;
};

export type CardApiType = {
  title: string;
  image: string;
  genre_ids: number[];
  id: number;
  releaseDate: Date;
  rate: number;
  language: string;
};

export type DetailApiType = {
  actors: {
    name: string;
    image: string;
  }[];
  genres: string;
  title: string;
  image: string;
  language: string;
  description: string;
  id: number;
  rate: number;
  releaseDate: Date;
  similarMovies: CardApiType[];
};

export type AllStateType = {
  teaser: TeaserApiType;
  popular: CardApiType[];
  nowPlaying: CardApiType[];
};

export type GenreStateType = {
  genre: string;
  cards: CardApiType[];
};

export type GenreReducerStateType = {
  id: number;
  name: string;
}[];

export type GenreReducerActionType = {
  type: 'ADD_GENRES';
  payload: GenreReducerStateType;
};

export type SavedReducerActionType =
  | {
      type: 'ADD';
      payload: CardApiType;
    }
  | {
      type: 'REMOVE';
      payload: number;
    }
  | {
      type: 'SET';
      payload: CardApiType[];
    };
