import React, {Dispatch, SetStateAction} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  SafeAreaView,
} from 'react-native';
import theme from '../../assets/theme';
import {VerticalListCard, SearchIcon, Loader} from '../../components/ui';
import {CardApiType} from '../../types';

const SearchBar = ({
  input,
}: {
  input: {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
  };
}) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        onChange={e => {
          input.setSearch(e.nativeEvent.text);
        }}
        value={input.search}
      />
      <Pressable>
        <View style={styles.searchWrapper}>
          <SearchIcon empty={false} isSearch />
        </View>
      </Pressable>
    </View>
  );
};

type SearchProps = {
  cards: CardApiType[];
  input: {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
  };
  status: 'LOADING' | 'LOADED';
};

export const Search = ({cards, input, status}: SearchProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Hi, There 👋</Text>
      <SearchBar input={input} />
      {status === 'LOADED' ? (
        <VerticalListCard
          data={cards}
          image={require('../../assets/searchNotFound.png')}
        />
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.ScreenBackgroundColor,
    paddingHorizontal: 18,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: theme.textColor,
    marginTop: 18,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  input: {
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    width: '85%',
    borderRadius: 59,
    paddingVertical: 11,
    paddingHorizontal: 15,
    color: theme.textColor,
    fontSize: 13,
    fontFamily: 'Roboto-Light',
  },
  searchWrapper: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#FF722A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
