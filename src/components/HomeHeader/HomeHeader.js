import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import avatar from '../../../assets/avt.png';
import { styles } from './HomeHeaderStyles.js';

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.accountInfo}>
        <Text style={styles.accountText}>Account: $1,457.23</Text>
      </View>
      <TouchableOpacity style={styles.notificationIcon}>
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};
