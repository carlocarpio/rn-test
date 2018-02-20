import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native';

class AccountScreen extends Component {
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{uri: 'https://www.gmail.com'}}
          style={{marginTop: 20}}
          startInLoadingState={false}
          cacheEnabled={true}
        />
      </View>
    );
  }
}

export default AccountScreen;
