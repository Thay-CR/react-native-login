import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 16,
  },
  portfolioTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  growthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  growthIcon: {
    marginRight: 5,
  },
  growthPercentage: {
    fontSize: 16,
    color: '#6ca75c',
  },
});

