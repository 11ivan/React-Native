import React from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    /*static navigationOptions = {//Funciona si no está definido en NavigationStackRouterConfig
        title: 'Welcome',
    };*/

    goToDetails = () => {
        this.props.navigation.navigate('Profile');
    }

    render() {
        return (
            <View>

                <Text>Text</Text>
            </View>
        );
    }
}