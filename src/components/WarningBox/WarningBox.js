import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const WarningBox = () => {
  return (
    <View style={styles.containerMessage}>
          <Text style={styles.textMessage}>
            Please note that prices are for reference only and may vary at the time of executing a buy or sell order. The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.
          </Text>
       </View>
  );
};





