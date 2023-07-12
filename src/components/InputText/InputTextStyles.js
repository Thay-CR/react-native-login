import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 340,
  },
  label: {
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  showPasswordButton: {
    position: 'absolute',
    top: 56,
    right: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

