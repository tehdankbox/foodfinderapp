import React from 'react';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as FirebaseAPI from '../modules/firebaseAPI';

export default class UserRegister extends React.Component {
  static navigationOptions = {
      title: 'Login',
  };

  constructor(props) {
    super(props)
    this.state = {
      email: "no",
      password: "yes",
    }
  };

  submit() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login de Usuário</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
        />
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
        />
        <TouchableOpacity onPress={() => this.submit()}>
          <View>
            <Text>Submit</Text>
          </View>
        </TouchableOpacity>
        <Button
          title="Retornar ao mapa"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput:{
    color: '#525252',
    fontSize: 16,
    paddingBottom: 0,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
})
