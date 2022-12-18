import React, {useState, useEffect, useCallback, useRef} from 'react';
import {Search} from '../ui/search.screen';
import {NavigationProp} from '@react-navigation/native';
import BottomTabContextProvider from '../../context/tabNavigation.context';
import {CardApiType} from '../../types';
import {fetchCard} from '../../apis';

type searchParams = {
  navigation: NavigationProp<
    {
      Home: undefined;
      Search: undefined;
      Detail: {
        id: string;
      };
      Saved: undefined;
    },
    'Search'
  >;
};

export const SearchContainer = ({navigation}: searchParams) => {
  const [cards, setCards] = useState<CardApiType[]>([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<'LOADING' | 'LOADED'>('LOADED');
  const timeoutRef = useRef(-1);
  const fetchSearchData = useCallback(async () => {
    setStatus('LOADING');
    const data = await fetchCard({
      url: '/search/movie',
      parameters: {
        query: search,
      },
    });
    setCards(data);
    setStatus('LOADED');
  }, [search]);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    if (search.length >= 1) {
      timeoutRef.current = setTimeout(() => {
        fetchSearchData();
      }, 500);
    } else {
      setCards([]);
    }
  }, [fetchSearchData, search]);

  return (
    <BottomTabContextProvider navigation={navigation}>
      <Search cards={cards} input={{search, setSearch}} status={status} />
    </BottomTabContextProvider>
  );
};
