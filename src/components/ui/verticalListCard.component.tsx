import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import {Card} from '..';
import {CardApiType} from '../../types';
type verticalListProps = {
  data: CardApiType[];
  image: ImageSourcePropType;
};

const EmptyListComponent = ({image}: {image: ImageSourcePropType}) => {
  return (
    <View style={styles.emptyComponent}>
      <Image source={image} style={styles.emptyComponentImage} />
    </View>
  );
};
const Seperator = () => <View style={styles.seperator} />;

export const VerticalListCard = React.memo(
  ({data, image}: verticalListProps) => {
    const listRef = useRef<FlatList<CardApiType> | null>(null);

    useEffect(() => {
      if (listRef.current !== null) {
        listRef.current.scrollToOffset({animated: false, offset: 0});
      }
    }, [data]);
    return (
      <FlatList
        ref={ref => (listRef.current = ref)}
        data={data}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={7}
        ItemSeparatorComponent={() => <Seperator />}
        contentContainerStyle={styles.footerStyle}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyListComponent image={image} />}
      />
    );
  },
);

const styles = StyleSheet.create({
  seperator: {
    height: 13,
  },
  footerStyle: {
    paddingBottom: 100,
  },
  emptyComponent: {
    height: Dimensions.get('window').height * 0.7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyComponentImage: {
    width: 200,
    height: 200,
  },
});
