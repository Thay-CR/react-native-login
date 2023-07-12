import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {styles} from './MainButtonStyles.js';

export const MainButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};
