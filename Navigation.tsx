import React, {useEffect, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, StyleSheet, StatusBar} from 'react-native';
import {HomeIcon, SearchIcon, SavedIcon} from './src/components/ui';
import {Home, Detail, Saved, Search} from './src/screens';
import theme from './src/assets/theme';
import {connect, ConnectedProps} from 'react-redux';
import {addGenresService} from './src/services/genres.services';
import {setSavedService} from './src/services/saved.services';
import AsyncStorage from '@react-native-async-storage/async-storage';

type BottomTabBarProps = {
  Home: undefined;
  Search: undefined;
  Saved: undefined;
  Detail: {
    id: string;
  };
};

const Tab = createBottomTabNavigator<BottomTabBarProps>();
const Navigation = ({addGenres, setSaved}: NavigationProps) => {
  const getSavedData = useCallback(async (): Promise<void> => {
    try {
      const data = await AsyncStorage.getItem('@savedItem');
      if (data) {
        setSaved(JSON.parse(data));
      }
    } catch (e) {}
  }, [setSaved]);

  useEffect(() => {
    addGenres();
    getSavedData();
  }, [addGenres, getSavedData]);
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.ScreenBackgroundColor}
      />
      <Tab.Navigator
        backBehavior="history"
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarShowLabel: false,
          tabBarItemStyle: {
            marginBottom: 14,
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => <HomeIcon empty={!focused} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => <SearchIcon empty={!focused} />,
          }}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{
            tabBarIcon: ({focused}) => <SavedIcon empty={!focused} />,
          }}
        />
        <Tab.Screen
          name="Detail"
          component={Detail}
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const connector = connect(null, {
  addGenres: addGenresService,
  setSaved: setSavedService,
});

type NavigationProps = ConnectedProps<typeof connector>;
export default connector(Navigation);

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width * 0.8,
    height: 80,
    left: Dimensions.get('window').width * 0.1,
    right: Dimensions.get('window').width * 0.1,
    bottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 0,
    borderTopWidth: 0,
    borderRadius: 40,
    backgroundColor: 'rgba(31, 28, 44, 1)',
    zIndex: 99,
  },
});
