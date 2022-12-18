import {Genre} from '../ui/genre.screen';
import React, {useEffect, useState, useCallback} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import NavigationContext from '../../context/navigation.context';
import {fetchCard} from '../../apis';
import {connect, ConnectedProps} from 'react-redux';
import {StoreStateType} from '../../store';
import {CardApiType} from '../../types';
type RootStackParamList = {
  all: undefined;
  genre: {genre: string};
};

const Container = ({navigation, route, genres}: GenrePropType) => {
  const {genre} = route.params;
  const [cards, setCards] = useState<CardApiType[]>([]);
  const fetchCardByGenre = useCallback(async (): Promise<void> => {
    const currentGenre: {id: number; name: string} | undefined = genres.find(
      g => g.name === genre,
    );
    const data = await fetchCard({
      url: '/discover/movie',
      parameters: {
        with_genres: currentGenre!.id.toString(),
      },
    });
    setCards(data);
  }, [genre, genres]);

  useEffect(() => {
    fetchCardByGenre();
  }, [fetchCardByGenre]);

  return (
    <NavigationContext navigation={navigation} routeName={genre}>
      <Genre genre={genre} cards={cards} />
    </NavigationContext>
  );
};

const connector = connect(
  (state: StoreStateType) => ({
    genres: state.genres,
  }),
  null,
);

type GenrePropType = NativeStackScreenProps<RootStackParamList, 'genre'> &
  ConnectedProps<typeof connector>;

export const GenreContainer = connector(Container);
