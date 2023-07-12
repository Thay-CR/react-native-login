import React from 'react';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import { Navigation } from './src/navigation';
import { KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </KeyboardAvoidingView>
  );
}
