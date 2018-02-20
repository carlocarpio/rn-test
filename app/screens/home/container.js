import React, { Component } from 'react';
import { Text, View, WebView } from 'react-native';

class HomeScreen extends Component {
  state = {
    url: null
  }

  componentWillMount() {
    this.setState({ url: 'https://www.github.com' })
  }

  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{uri: this.state.url}}
          style={{marginTop: 20}}
          startInLoadingState={false}
          cacheEnabled={true}
        />
      </View>
    );
  }
}

export default HomeScreen;
