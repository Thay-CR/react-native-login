import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './styles.js';

export const SingleAssetAccountInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.accountInfo}>
        <Text style={styles.amount}>$1,457.23</Text>
        <View style={styles.percentageContainer}>
          <Ionicons name="caret-up" size={24} color="#6ca75c" style={styles.caretIcon} />
          <Text style={styles.percentage}>31.82%</Text>
        </View>
      </View>
      <Text style={styles.year}>2022</Text>
    </View>
  );
};
