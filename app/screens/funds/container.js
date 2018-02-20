import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';

class HomeScreen extends Component {
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Funds</Text>
      </View>
    );
  }
}

export default HomeScreen;
