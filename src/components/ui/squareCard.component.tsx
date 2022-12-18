import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {CardApiType} from '../../types';
import {PlayBtn} from './playBtn.component';
import {Rate} from './rate.component';
import {CardPressable} from '../container/cardPressable.component';

const CardWidth = 200;
export const SquareCard = ({item}: {item: CardApiType}) => {
  return (
    <CardPressable id={item.id}>
      <ImageBackground
        source={{
          uri: item.image,
        }}
        style={styles.containerImage}
        imageStyle={styles.containerImageStyle}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>
              {item.title.length <= 12
                ? item.title
                : item.title.slice(0, 12) + '...'}
            </Text>
            <Rate rateNumber={item.rate} />
          </View>
          <PlayBtn />
        </View>
      </ImageBackground>
    </CardPressable>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    width: CardWidth,
    height: CardWidth * 0.86,
    borderRadius: 25,
    justifyContent: 'flex-end',
  },
  containerImageStyle: {
    borderRadius: 25,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: CardWidth * 0.9,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 60,
    marginHorizontal: CardWidth * 0.05,
    marginVertical: 16,
    borderRadius: 27,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignItems: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    marginBottom: 6,
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: CardWidth * 0.9,
    height: 60,
    borderRadius: 27,
  },
});
