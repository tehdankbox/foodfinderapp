import React from 'react';
import { Button, View, Text } from 'react-native';

export default class CompanyRegister extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Login'),
    };
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login de Empresa</Text>
        <Text>Tela de login</Text>
        <Button
          title="Retornar ao mapa"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
