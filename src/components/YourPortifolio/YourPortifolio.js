import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './styles';

export const YourPortfolio = () => {
  return (
    <>
      <View style={styles.header}>
        <Ionicons name="ios-pie-chart-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.title}>Your Portfolio</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.accountInfo}>
          <Text style={styles.creditCount}>18 Credits</Text>
          <View style={styles.percentageContainer}>
            <Ionicons name="caret-up" size={24} color="#6ca75c" style={styles.caretIcon} />
            <Text style={styles.percentage}>31.82%</Text>
          </View>
        </View>
        <View style={styles.purchaseInfo}>
          <Text style={styles.purchaseAmount}>$328</Text>
          <Text style={styles.purchaseLabel}>Last purchase</Text>
          <Text style={styles.purchaseLabel}>28d ago</Text>
        </View>
      </View>
    </>
  );
};
