import React from 'react';
import { View, Text } from 'react-native';
import { EarnRewardsButton } from '../EarnRewardsButton/EarnRewardsButton';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './PortifolioBalanceStyles.js';

export const PortifolioBalance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.portfolioTitle}>Portfolio</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>$1,457.23</Text>
        <View style={styles.growthContainer}>
          <Ionicons name="caret-up" size={24} color="#6ca75c" style={styles.growthIcon} />
          <Text style={styles.growthPercentage}>31.82%</Text>
          <EarnRewardsButton />
        </View>
      </View>
    </View>
  );
};
