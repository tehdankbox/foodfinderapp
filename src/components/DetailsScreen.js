import React from 'react';
import { Button, View, Text } from 'react-native';
export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('titulo', 'Detalhes do pedido'),
    };
  };

  render() {
    const { navigation } = this.props;
    const nomeItem = navigation.getParam('nomeItem', 'Xis Cu');
    const precoItem = navigation.getParam('precoItem', 69);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detalhes da compra</Text>
        <Text>Item: {nomeItem}</Text>
        <Text>Preço: R${precoItem}</Text>
        <Button
          title="Fazer outro pedido"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
