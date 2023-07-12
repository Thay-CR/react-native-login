import React from 'react';
import { CarouselItem } from '../CarouselItem/CarouselItem';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { data } from './constants';
import { styles } from './CarouselFundsStyles';

export const CarouselFunds = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return <CarouselItem item={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width * 0.4}
        inactiveSlideOpacity={0.5}
        contentContainerCustomStyle={styles.carouselContentContainer}
      />
    </View>
  );
};
