import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './TextLinkStyles.js';

export const TextLink = (props) => {
  const navigation = useNavigation();
  return (
    <Text style={styles.container}>
      {props.commom}{' '}
      <TouchableOpacity onPress={() => navigation.navigate(props.navigateTo)}>
        <Text style={styles.link}>{props.link}</Text>
      </TouchableOpacity>
    </Text>
  );
};
