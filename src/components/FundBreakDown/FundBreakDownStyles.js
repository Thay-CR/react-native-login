import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  renderContentContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: -120
  },
  renderedContent:{
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    color: 'black',
  },
  activeTabText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

