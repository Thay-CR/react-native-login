import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './EarnRewardsButtonStyles';

export const EarnRewardsButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name="cash-outline" size={16} color="#8b7af5" style={styles.icon} />
      <Text style={styles.text}>Earn Rewards</Text>
    </TouchableOpacity>
  );
};
