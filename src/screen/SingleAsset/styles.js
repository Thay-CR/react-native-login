import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 12,
    marginBottom: 24,
  },
  sellButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8b7af5',
    borderRadius: 8,
    width: 160,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sellButtonText: {
    color: '#8b7af5',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  retireButton: {
    backgroundColor: '#00c380',
    borderRadius: 8,
    width: 160,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  retireButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  infoMessage: {
    color: '#999999',
    marginLeft: 24,
    marginTop: 4,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
