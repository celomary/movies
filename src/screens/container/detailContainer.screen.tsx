import React, {useEffect, useState, useCallback} from 'react';
import BottomTabContextProvider from '../../context/tabNavigation.context';
import {RouteProp, NavigationProp} from '@react-navigation/native';
import {Detail} from '../ui/detail.screen';
import {fetchMovieDetails} from '../../apis';
import {CardApiType, DetailApiType, GenreReducerStateType} from '../../types';
import {connect, ConnectedProps} from 'react-redux';
import {StoreStateType} from '../../store';
import {Loader} from '../../components/ui';

type DetailPropsParam = {
  Home: undefined;
  Search: undefined;
  Detail: {
    id: string;
  };
  Saved: undefined;
};

const isSaved = (saved: CardApiType[], id: number) => {
  return !!saved.find(item => item.id === id);
};

const generateToSaveItem = (
  data: DetailApiType,
  genres: GenreReducerStateType,
): CardApiType => {
  const getGenresIds = (genres_name: string): number[] => {
    const genres_ids = [];
    for (const genre_name of genres_name.split(',')) {
      const genre = genres.find(element => genre_name === element.name);
      if (genre) {
        genres_ids.push(genre.id);
      }
    }
    return genres_ids;
  };

  return {
    title: data.title,
    image: data.image,
    id: data.id,
    releaseDate: data.releaseDate,
    language: data.language,
    rate: data.rate,
    genre_ids: getGenresIds(data.genres),
  };
};

const Container = ({route, navigation, saved, genres}: DetailProps) => {
  const [detail, setDetail] = useState<DetailApiType | {}>({});

  const {
    params: {id},
  } = route;

  const getDetailsById = useCallback(async () => {
    const data = await fetchMovieDetails(+id);
    setDetail(data);
  }, [id]);

  useEffect(() => {
    setDetail({});
    getDetailsById();
  }, [getDetailsById]);

  const isEmpty = (obj: DetailApiType | {}): obj is {} => {
    return !Object.keys(obj).length;
  };

  if (isEmpty(detail)) {
    return <Loader />;
  }
  return (
    <BottomTabContextProvider navigation={navigation}>
      <Detail
        data={detail}
        isSaved={isSaved(saved, +id)}
        toSaveItem={generateToSaveItem(detail, genres)}
      />
    </BottomTabContextProvider>
  );
};
const connector = connect(
  (state: StoreStateType) => ({
    saved: state.saved,
    genres: state.genres,
  }),
  null,
);

type DetailProps = {
  navigation: NavigationProp<DetailPropsParam, 'Detail'>;
  route: RouteProp<DetailPropsParam, 'Detail'>;
} & ConnectedProps<typeof connector>;

export const DetailContainer = connector(Container);
