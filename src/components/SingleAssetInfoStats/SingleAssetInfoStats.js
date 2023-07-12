import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export const SingleAssetInfoStats = () => {
  return (
    <>
    <Text style={styles.title}>Info & Stats</Text>
    <View style={styles.infoStatsContainer}>
      <View style={styles.column}>
        <View style={styles.item}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>AUM</Text>
            <Ionicons name="ios-information-circle-outline" size={20} color="#666666" style={styles.icon} />
          </View>
          <Text style={styles.value}>$430.88</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>AUM</Text>
            <Ionicons name="ios-information-circle-outline" size={20} color="#666666" style={styles.icon} />
          </View>
          <Text style={styles.value}>$430.88</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>AUM</Text>
            <Ionicons name="ios-information-circle-outline" size={20} color="#666666" style={styles.icon} />
          </View>
          <Text style={styles.value}>$430.88</Text>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.item}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>AUM</Text>
            <Ionicons name="ios-information-circle-outline" size={20} color="#666666" style={styles.icon} />
          </View>
          <Text style={styles.value}>$430.88</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>AUM</Text>
            <Ionicons name="ios-information-circle-outline" size={20} color="#666666" style={styles.icon} />
          </View>
          <Text style={styles.value}>$430.88</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>AUM</Text>
            <Ionicons name="ios-information-circle-outline" size={20} color="#666666" style={styles.icon} />
          </View>
          <Text style={styles.value}>$430.88</Text>
        </View>
      </View>
    </View>
    </>
  );
};


const styles = StyleSheet.create({
  title: {
    top: 32,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 8,
  },
  infoStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 2,
    marginBottom: 16,
    marginTop: 48,
  },
  column: {
    flex: 1,
    left: 24
  },
  item: {
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    marginRight: 8,
  },
  infoText: {
    color: '#666666',
  },
  value: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  }
});



