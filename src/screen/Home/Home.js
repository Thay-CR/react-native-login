import React from 'react';
import { View, ScrollView } from 'react-native';
import { VerticalRectangle } from '../../components/VerticalRectangle/VerticalRectangle';
import { CarouselFunds } from '../../components/Carousel/Carousel';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { PortifolioBalance } from '../../components/PortifolioBalance/PortifolioBalance';
import { HorizontalRectangleTips } from '../../components/HorizontalRectangle/HorizontalRectangleTips';
import { styles } from './styles';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <PortifolioBalance />
        <CarouselFunds navigation={navigation} />
        <HorizontalRectangleTips />
        <View style={styles.verticalRectangleContainer}>
          <View style={styles.direction}>
            <VerticalRectangle text="why should you invest here?" />
            <VerticalRectangle />
          </View>
        </View>
      </ScrollView>
    </View>
  )
};


