import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useBottomTabContext} from '../../context/tabNavigation.context';

type CardPressableProps = {
  children: React.ReactNode;
  id: number;
};

export const CardPressable = ({id, children}: CardPressableProps) => {
  const {navigation} = useBottomTabContext();
  const handleOnPress = () => {
    navigation!.navigate('Detail', {
      id: id.toString(),
    });
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>{children}</TouchableOpacity>
  );
};
