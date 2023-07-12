import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import folder from '../../../assets/folder.jpeg';
import {styles} from './HorizontalRectangleTipsStyles.js';

export const HorizontalRectangleTips = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.title}>Learn more about</Text>
        <Text style={styles.title}>carbon credits</Text>
        <Text style={styles.subtitle}>Checkout our top tips</Text>
        <Image source={folder} style={styles.image} />
      </View>
    </View>
  );
};
