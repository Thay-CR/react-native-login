import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './SingleAssetHeaderStyles';
import { useNavigation } from '@react-navigation/core';

export const SingleAssetHeader = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Win Fund</Text>
          <Text style={styles.listText}>WFND</Text>
        </View>
      </View>
    </View>
  );
};


