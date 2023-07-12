import React, { useState } from 'react';
import { AssetCard } from '../AssetCard/AssetCard';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './FundBreakDownStyles';

export const FundBreakDown = (props) => {

  const handleTabPress = (tab) => {
    props.setActiveTab(tab);
  };

  const renderContent = () => {
    switch (props.activeTab) {
      case 'highlighted':
        return (
          <View style={styles.renderContentContainer}>
            <View style={styles.renderedContent}>
              <AssetCard />
              <View style={{ margin: 40 }} />
              <AssetCard />
            </View>
          </View>
        );
      case 'value':
        return <Text>Value Content</Text>;
      case 'vintage':
        return <Text>Vintage Content</Text>;
      case 'registry':
        return <Text>Registry Content</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fund Breakdown</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            props.activeTab === 'highlighted' && styles.activeTab,
          ]}
          onPress={() => handleTabPress('highlighted')}
        >
          <Text
            style={[
              styles.tabText,
              props.activeTab === 'highlighted' && styles.activeTabText,
            ]}
          >
            Highlighted
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, props.activeTab === 'value' && styles.activeTab]}
          onPress={() => handleTabPress('value')}
        >
          <Text
            style={[
              styles.tabText,
              props.activeTab === 'value' && styles.activeTabText,
            ]}
          >
            Value
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, props.activeTab === 'vintage' && styles.activeTab]}
          onPress={() => handleTabPress('vintage')}
        >
          <Text
            style={[
              styles.tabText,
              props.activeTab === 'vintage' && styles.activeTabText,
            ]}
          >
            Vintage
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, props.activeTab === 'registry' && styles.activeTab]}
          onPress={() => handleTabPress('registry')}
        >
          <Text
            style={[
              styles.tabText,
              props.activeTab === 'registry' && styles.activeTabText,
            ]}
          >
            Registry
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>{renderContent()}</View>

    </View>
  );
};

