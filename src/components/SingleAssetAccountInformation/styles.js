import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 24,
  },
  accountInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 12,
    marginLeft: 24,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  percentageContainer: {
    alignItems: 'center',
  },
  caretIcon: {
    marginRight: 5,
  },
  percentage: {
    fontSize: 16,
    color: '#6ca75c',
  },
  year: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    left: 140,
    top: 16,
  },
});
