import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  accountInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 16,
  },
  notificationIcon: {
    marginLeft: 'auto',
    paddingLeft: 20,
  },
});

