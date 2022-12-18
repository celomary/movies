import React, {useEffect, useReducer, useCallback} from 'react';
import {All} from '../ui/all.screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import NavigationContext from '../../context/navigation.context';
import {TeaserApiType, CardApiType, AllStateType} from '../../types';
import {fetchHomeTeaser, fetchCard} from '../../apis';
import {Loader} from '../../components/ui';

type RootStackParamList = {
  all: undefined;
  genre: {genre: string};
};

type AllPropType = NativeStackScreenProps<RootStackParamList, 'all'>;

const reducer = (
  state: AllStateType | {},
  action: {
    type: 'ADD_TEASER' | 'ADD_POPULAR' | 'ADD_NOWPLAYING';
    payload: TeaserApiType | CardApiType[];
  },
) => {
  switch (action.type) {
    case 'ADD_TEASER':
      return {
        ...state,
        teaser: action.payload,
      };
    case 'ADD_POPULAR':
      return {...state, popular: action.payload};
    case 'ADD_NOWPLAYING':
      return {...state, nowPlaying: action.payload};
    default:
      return state;
  }
};

export const AllContainer = ({navigation}: AllPropType) => {
  const [state, dispatch] = useReducer(reducer, {});

  const checkIsStateEmpty = (s: AllStateType | {}): s is {} => {
    return !Object.keys(s).length;
  };
  const fetchTeaser = useCallback(async (): Promise<void> => {
    const data = await fetchHomeTeaser();
    if (!checkIsStateEmpty(data)) {
      dispatch({
        type: 'ADD_TEASER',
        payload: data,
      });
    }
  }, []);

  const fetchCards = useCallback(
    async (
      url: string,
      type: 'ADD_TEASER' | 'ADD_POPULAR' | 'ADD_NOWPLAYING',
    ): Promise<void> => {
      const data = await fetchCard({url});
      dispatch({
        type: type,
        payload: data,
      });
    },
    [],
  );

  useEffect(() => {
    fetchTeaser();
    fetchCards('/movie/popular', 'ADD_POPULAR');
    fetchCards('/movie/now_playing', 'ADD_NOWPLAYING');
  }, [fetchTeaser, fetchCards]);

  if (checkIsStateEmpty(state)) {
    return <Loader />;
  }
  const data = state as AllStateType;
  if (!data.teaser || !data.nowPlaying || !data.popular) {
    return <Loader />;
  }
  return (
    <NavigationContext navigation={navigation} routeName="All">
      <All data={data} />
    </NavigationContext>
  );
};
