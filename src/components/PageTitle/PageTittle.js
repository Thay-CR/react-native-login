import React from 'react';
import { Text } from 'react-native';
import {styles} from './PageTitleStyles.js';

export const PageTitle = (props) => {
  return (
    <Text style={styles.title}>
      {props.title}
    </Text>
  );
};
