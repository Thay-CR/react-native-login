import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import chart from '../../../assets/chart.jpeg';
import chart2 from '../../../assets/chart2.jpeg';
import { styles } from './CarouselItemStyles';

export const CarouselItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SingleAsset');
      }}
      style={styles(item).container}
    >
      <Image source={item.fundImage} style={styles(item).fundImage} />
      <Text style={styles(item).fundName}>{item.fundName}</Text>
      {item.id % 2 === 0 ? (
        <Image source={chart2} style={styles(item).chartImage} />
      ) : (
        <Image source={chart} style={styles(item).chartImage} />
      )}
      <View style={styles(item).rowContainer}>
        <Text style={styles(item).fundValue}>{item.fundValue}</Text>
        <Ionicons
          name={item.fundVariation > 0 ? 'caret-up' : 'caret-down'}
          size={16}
          color={item.fundVariation > 0 ? 'green' : 'red'}
          style={styles(item).caretIcon}
        />
        <Text
          style={[
            styles(item).fundVariation,
            { color: item.fundVariation > 0 ? 'green' : 'red' },
          ]}
        >
          {item.fundVariation}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
