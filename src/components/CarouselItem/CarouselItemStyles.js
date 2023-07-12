import { StyleSheet,Dimensions } from 'react-native';

export const styles = (item) => StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    backgroundColor: item.color,
    borderColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fundImage: {
    width: 24,
    height: 24,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  fundName: {
    color: 'black',
    fontSize: 14,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  chartImage: {
    width: 120,
    height: 60,
    left: -36,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  fundValue: {
    color: 'black',
    fontSize: 16,
    right: 12,
  },
  caretIcon: {
    margin: 8,
  },
  fundVariation: {
    color: 'green',
    fontSize: 12,
    right: 12,
  },
});
