import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {StoreStateType} from '../../store';
import {NavigationProp} from '@react-navigation/native';
import BottomTabContextProvider from '../../context/tabNavigation.context';
import {Saved} from '../ui/saved.screen';

const Container = ({navigation, saved}: savedParams) => {
  return (
    <BottomTabContextProvider navigation={navigation}>
      <Saved cards={saved} />
    </BottomTabContextProvider>
  );
};

const connector = connect(
  (state: StoreStateType) => ({
    saved: state.saved,
  }),
  null,
);

type savedParams = {
  navigation: NavigationProp<
    {
      Home: undefined;
      Search: undefined;
      Detail: {
        id: string;
      };
      Saved: undefined;
    },
    'Saved'
  >;
} & ConnectedProps<typeof connector>;

export const SavedContainer = connector(Container);
