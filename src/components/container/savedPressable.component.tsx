import {TouchableOpacity} from 'react-native';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {StoreStateType} from '../../store';
import {
  addSavedService,
  removeSavedService,
} from '../../services/saved.services';
import {CardApiType} from '../../types';

export const Container = ({
  children,
  item,
  saved,
  addSaved,
  removeSaved,
}: SavedPressableProps) => {
  const handlePress = () => {
    const current = saved.find(({id}) => id === item.id);
    if (current) {
      removeSaved(current.id);
    } else {
      addSaved(item);
    }
  };
  return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
};

const connector = connect(
  (state: StoreStateType) => ({
    saved: state.saved,
  }),
  {
    addSaved: addSavedService,
    removeSaved: removeSavedService,
  },
);

type SavedPressableProps = {
  children: React.ReactNode;
  item: CardApiType;
} & ConnectedProps<typeof connector>;

export const SavedPressable = connector(Container);
