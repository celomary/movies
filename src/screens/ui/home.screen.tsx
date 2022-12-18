import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import theme from '../../assets/theme';
import {AllContainer as All} from '../container/allContainer.screen';
import {GenreContainer as Genre} from '../container/genreContainer.screen';
import {RouteProp, NavigationProp} from '@react-navigation/native';
import BottomTabContextProvider from '../../context/tabNavigation.context';

type RootStackParamList = {
  all: undefined;
  genre: {genre: string};
  detail: {id: string};
};

type HomeTabParam = {
  Home: undefined;
  Search: undefined;
  Detail: {
    id: string;
  };
  Saved: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
type HomeProp = {
  navigation: NavigationProp<HomeTabParam, 'Home'>;
  route: RouteProp<HomeTabParam, 'Home'>;
};

export const Home = ({navigation}: HomeProp) => {
  return (
    <BottomTabContextProvider navigation={navigation}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Hi, There 👋</Text>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}>
          <Stack.Screen name="all" component={All} />
          <Stack.Screen name="genre" component={Genre} />
        </Stack.Navigator>
      </SafeAreaView>
    </BottomTabContextProvider>
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
  homeFilterContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  filterElement: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    backgroundColor: '#FF692B',
    borderRadius: 20,
  },
  filterElementContainer: {
    color: theme.textColor,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  filtersList: {
    marginRight: 12,
  },
  filterSeperator: {
    width: 10,
  },
});
