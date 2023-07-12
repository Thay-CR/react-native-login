import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import renewableenergy from '../../../assets/renewableEnergy2.jpg';
import { styles } from './AssetCardStyles';

export const AssetCard = () => {
  const onPress = () => {
    console.log('Read more pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={renewableenergy} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Ionicons name="aperture" size={24} color="black" style={styles.icon} />
            <Text style={styles.title}>AspiraDac</Text>
          </View>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.link}>Read more</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
