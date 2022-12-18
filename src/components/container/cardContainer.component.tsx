import React from 'react';
import {CardApiType} from '../../types';
import {connect, ConnectedProps} from 'react-redux';
import {StoreStateType} from '../../store';
import {Card} from '../ui';

const Container = ({item, saved, genres}: CardPropsType) => {
  const convertGenresToString = (genres_ids: number[]): string => {
    const genres_name = [];
    for (const id of genres_ids) {
      const genre = genres.find(element => element.id === id);
      if (genre) {
        genres_name.push(genre.name);
      }
    }
    return genres_name.join(',');
  };

  const isSaved = !!saved.find(({id}) => item.id === id);
  return (
    <Card
      item={item}
      isSaved={isSaved}
      genres={convertGenresToString(item.genre_ids)}
    />
  );
};

const connector = connect((state: StoreStateType) => ({
  saved: state.saved,
  genres: state.genres,
}));

type CardPropsType = {
  item: CardApiType;
} & ConnectedProps<typeof connector>;

export const CardContainer = connector(Container);
