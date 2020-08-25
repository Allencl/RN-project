import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class HomeScreen extends Component {

    render() {
        let {navigation} = this.props;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default HomeScreen;
