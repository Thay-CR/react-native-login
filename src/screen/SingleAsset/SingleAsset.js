import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FundBreakDown } from '../../components/FundBreakDown/FundBreakDown';
import { MainButton } from '../../components/MainButton/MainButton';
import { SingleAssetHeader } from '../../components/SingleAssetHeader/SingleAssetHeader';
import { SingleAssetAccountInformation } from '../../components/SingleAssetAccountInformation/SingleAssetAccountInformation';
import { SingleAssetInfoStats } from '../../components/SingleAssetInfoStats/SingleAssetInfoStats';
import { YourPortfolio } from '../../components/YourPortifolio/YourPortifolio';
import { WarningBox } from '../../components/WarningBox/WarningBox';
import { styles } from './styles';
import { LineChart } from 'react-native-svg-charts';

export const SingleAsset = () => {
  const [activeTab, setActiveTab] = useState('highlighted');
  const [selectedPeriod, setSelectedPeriod] = useState('1d');

  const periods = ['1d', '1w', '1m', '1y'];

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <>
      <SingleAssetHeader />
      <ScrollView style={styles.container}>
        <SingleAssetAccountInformation />
        <View style={{ height: 200 }}>
          <LineChart
            style={{ flex: 1 }}
            data={[5, 50, 40, 41, 12, 15, 8, 7, 15, 7, 15, 7, 8, 20]}
            svg={{ stroke: 'green' }}
            contentInset={{ top: 20, bottom: 20 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            {periods.map((period) => (
              <TouchableOpacity
                key={period}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: selectedPeriod === period ? 'purple' : 'white',
                  borderRadius: 8,
                  marginHorizontal: 5,
                }}
                onPress={() => handlePeriodChange(period)}
              >
                <Text style={{ color: selectedPeriod === period ? 'white' : 'gray' }}>{period}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <SingleAssetInfoStats />
        <FundBreakDown activeTab={activeTab} setActiveTab={setActiveTab} />
        <YourPortfolio />
        <View style={styles.buttonContainer2}>
          <TouchableOpacity style={styles.sellButton}>
            <Text style={styles.sellButtonText}>Sell</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.retireButton}>
            <Text style={styles.retireButtonText}>Retire Credits</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.infoMessage}>You've previously retired 28 credits of this asset</Text>
        <WarningBox />
        <View style={styles.buttonContainer}>
          <MainButton text="Buy" />
        </View>
      </ScrollView>
    </>
  );
};



