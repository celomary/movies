import React from 'react';

import {View, Image, StyleSheet, Text, FlatList} from 'react-native';
import theme from '../../assets/theme';
const StarCast = ({name, image}: {name: string; image: string}) => {
  return (
    <View style={styles.cast}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.cast__image}
      />
      <View>
        <Text style={styles.cast__role}>Actor</Text>
        <Text style={styles.cast__name}>{name}</Text>
      </View>
    </View>
  );
};

const StarCastSeperator = () => <View style={styles.starCastSeperator} />;

export const StarCastList = ({
  data,
}: {
  data: {
    name: string;
    image: string;
  }[];
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <StarCast {...item} />}
      keyExtractor={item => item.image}
      ItemSeparatorComponent={() => <StarCastSeperator />}
      horizontal
      showsHorizontalScrollIndicator={false}
      initialNumToRender={5}
    />
  );
};

const styles = StyleSheet.create({
  cast: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cast__image: {
    width: 48,
    height: 48,
    borderRadius: 48,
    marginRight: 9,
  },
  cast__role: {
    color: '#A5A5A5',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    marginBottom: 8,
  },
  cast__name: {
    color: theme.textColor,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  starCastSeperator: {
    width: 15,
  },
});
