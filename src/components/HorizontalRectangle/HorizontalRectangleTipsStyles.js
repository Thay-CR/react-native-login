import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    width: Dimensions.get('window').width * 0.9,
    height: 120,
    backgroundColor: '#760edf',
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20,
    padding: 20,
    top: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    color: 'white',
    marginRight: 10,
    top: 10,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'flex-end',
    top: -60,
  },
});
