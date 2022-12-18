import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {PlayBtn} from './playBtn.component';
import {Rate} from './rate.component';
import {SavedIcon} from './savedIcon.component';
import {DeleteIcon} from './deleteIcon.component';
import {CardApiType} from '../../types';
import {SavedPressable} from '../container/savedPressable.component';
import {CardPressable} from '../container/cardPressable.component';

type CardPropsType = {
  item: CardApiType;
  isSaved: boolean;
  genres: string;
};

export const Card = ({item, isSaved, genres}: CardPropsType) => {
  return (
    <CardPressable id={item.id}>
      <View style={styles.container}>
        <View style={styles.nestedView}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.title}>
              {item.title.length > 10
                ? item.title.slice(0, 9) + '...'
                : item.title}
            </Text>
            <Text style={styles.subTitle}>
              {`${item.language} | ${
                genres.length > 10 ? genres.slice(0, 7) + '...' : genres
              } | ${item.releaseDate}`}
            </Text>
            <View style={styles.wrapper}>
              <Rate rateNumber={item.rate} />
            </View>
          </View>
        </View>

        <View style={styles.btns}>
          <SavedPressable item={item}>
            <View style={styles.iconWrapper}>
              {!isSaved ? <SavedIcon empty={true} /> : <DeleteIcon />}
            </View>
          </SavedPressable>
          <PlayBtn />
        </View>
      </View>
    </CardPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 10,
    borderRadius: 22,
  },
  nestedView: {
    flexDirection: 'row',
    width: '70%',
  },
  image: {
    width: 125,
    height: 108,
    borderRadius: 17,
    marginRight: 15,
  },
  info: {
    justifyContent: 'space-between',
    width: '60%',
  },
  btns: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 60,
  },
  wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: 55,
    height: 35,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  subTitle: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Roboto-Light',
    width: '100%',
  },
  iconWrapper: {
    width: 28,
    height: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
