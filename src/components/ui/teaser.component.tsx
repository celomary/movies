import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import theme from '../../assets/theme';
import {Rate} from './rate.component';
import {PlayBtn} from './playBtn.component';
import {TeaserApiType} from '../../types';
import {CardPressable} from '../container/cardPressable.component';

export const Teaser = ({data}: {data: TeaserApiType}) => {
  return (
    <CardPressable id={data.id}>
      <View style={styles.teaserContainer}>
        <ImageBackground
          source={{
            uri: data.image,
          }}
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
          blurRadius={2}>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>{data.title}</Text>
              <Rate rateNumber={data.rate} />
            </View>
            <PlayBtn />
          </View>
        </ImageBackground>
      </View>
    </CardPressable>
  );
};

const styles = StyleSheet.create({
  teaserContainer: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.58,
    borderRadius: 38,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  backgroundImageStyle: {
    borderRadius: 38,
  },
  container: {
    marginHorizontal: Dimensions.get('window').width * 0.05,
    marginVertical: Dimensions.get('window').width * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: theme.textColor,
    fontSize: 18,
    marginBottom: 10,
  },
});
