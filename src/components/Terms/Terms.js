import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './TermsStyles.js';

const Terms = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => props.setAgreeTerms(!props.agreeTerms)}
      >
        {props.agreeTerms && <Ionicons name="checkmark" size={16} color="#777" />}
      </TouchableOpacity>
      <Text>
        I am over 18 years of age and I have read and Agree to the{' '}
        <Text style={styles.link}>Terms of service</Text> and{' '}
        <Text style={styles.link}>Privacy policy</Text>
      </Text>
    </View>
  );
};

export default Terms;
