import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';

import {SavedPressable} from '../../components';
import {useBottomTabContext} from '../../context/tabNavigation.context';

import theme from '../../assets/theme';
import {BackArrowIcon, SavedIcon, Rate, PlayBtn} from '../../components/ui';
import {ListCard, StarCastList} from '../../components/ui';
import {CardApiType, DetailApiType} from '../../types';

const DetailTeaser = ({uri, rate}: {uri: string; rate: number}) => {
  return (
    <ImageBackground
      source={{
        uri,
      }}
      style={styles.containerImage}
      imageStyle={styles.image}>
      <View style={styles.containerTeaser}>
        <View style={styles.ratingWrapper}>
          <Rate rateNumber={rate} />
        </View>
        <View style={styles.watchBtn}>
          <PlayBtn />
          <Text style={styles.watchText}>Watch Now</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const TopButtons = ({
  isSaved,
  toSaveItem,
}: {
  isSaved: boolean;
  toSaveItem: CardApiType;
}) => {
  const {navigation} = useBottomTabContext();
  return (
    <View style={styles.topButtons}>
      <Pressable
        onPress={() => {
          navigation?.canGoBack() && navigation.goBack();
        }}>
        <View>
          <BackArrowIcon />
        </View>
      </Pressable>
      <View>
        <SavedPressable item={toSaveItem}>
          <SavedIcon empty={!isSaved} hideCircle />
        </SavedPressable>
      </View>
    </View>
  );
};

const DetailContainer = ({
  title,
  element,
}: {
  title: string;
  element: () => React.ReactNode;
}) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailContainer__title}>{title}</Text>
      {element()}
    </View>
  );
};

export const Detail = ({
  data,
  isSaved,
  toSaveItem,
}: {
  data: DetailApiType;
  isSaved: boolean;
  toSaveItem: CardApiType;
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopButtons isSaved={isSaved} toSaveItem={toSaveItem} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DetailTeaser uri={data.image} rate={data.rate} />
        <View style={styles.info}>
          <Text style={styles.info__title}>{data.title}</Text>
          <Text style={styles.info__subtitle}>
            {`${data.language} | ${data.genres} | ${data.releaseDate}`}
          </Text>
          <View style={styles.info__line} />
        </View>
        <DetailContainer
          title="Story line"
          element={() => (
            <Text style={styles.description}>{data.description}</Text>
          )}
        />
        <DetailContainer
          title="Star cast"
          element={() => <StarCastList data={data.actors} />}
        />
        <DetailContainer
          title="Recommended"
          element={() => <ListCard data={data.similarMovies.slice(0, 12)} />}
        />
        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.ScreenBackgroundColor,
    paddingHorizontal: 18,
  },
  topButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
  },
  containerImage: {
    width: Dimensions.get('window').width - 18 * 2,
    height: (Dimensions.get('window').width - 18 * 2) * 0.6,
    borderRadius: (Dimensions.get('window').width - 18 * 2) * 0.11,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  containerTeaser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    borderRadius: (Dimensions.get('window').width - 18 * 2) * 0.11,
  },
  watchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 5,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  watchText: {
    marginLeft: 8,
    color: theme.textColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
  ratingWrapper: {
    paddingLeft: 15,
  },
  info: {
    alignItems: 'center',
    marginTop: 17,
    marginBottom: 8,
  },
  info__title: {
    fontSize: 18,
    color: theme.textColor,
    fontFamily: 'Roboto-Bold',
  },
  info__subtitle: {
    fontSize: 14,
    fontFamily: 'Roboto-Light',
    color: '#A5A5A5',
    marginTop: 8,
  },
  info__line: {
    width: '80%',
    height: 2,
    backgroundColor: '#4F4F4F',
    marginTop: 13,
  },
  detailContainer: {
    marginTop: 15,
  },
  detailContainer__title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: theme.textColor,
    marginBottom: 14,
  },
  bottomSpace: {
    height: 85,
  },
  description: {
    color: '#A5A5A5',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    lineHeight: 17,
  },
});
