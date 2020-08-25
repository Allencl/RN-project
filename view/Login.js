import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class LoginScreen extends Component {
  render() {
    let {navigation} = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>login Screen</Text>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}

        />
    </View>
    );
  }
}

export default LoginScreen;
