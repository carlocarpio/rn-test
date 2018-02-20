import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native';

class PromotionScreen extends Component {
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{uri: 'https://www.apple.com'}}
          style={{marginTop: 20}}
          startInLoadingState={false}
          cacheEnabled={true}
        />
      </View>
    );
  }
}

export default PromotionScreen;
