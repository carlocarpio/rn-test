import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import App from './screens';

class AppProvider extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <App />
      </View>
    );
  }
}

export default AppProvider;
