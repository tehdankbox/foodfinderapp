import React from 'react';
import { Button, View, Text, Picker, TouchableNativeFeedback, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import menuHW from '../assets/menuHW.png';
import Coracao from '../assets/coracaoW.png';
import Lupa from '../assets/lupaW.png';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props)
    this.state = {
      id: '1',
      idBurger: '',
      showNext: false,
      nomeItem: '',
      precoItem: '',
      origin: { latitude: 42.3616132, longitude: -71.0672576 },
      destination: { latitude: 42.3730591, longitude: -71.033754 },
      originText: '',
      destinationText: '',
    }
  }

  registerUser = ()  => {
    this.props.navigation.navigate('UserRegister')
  }

  registerCompany = ()  => {
    this.props.navigation.navigate('CompanyRegister')
  }

  selectLocation = (id) => {
    this.setState({ id: id })
    switch (id) {
      case '1':
        this.setState({
          id: 1,
          name: "Xis do Vini",
          street: "Rua Marechal Floriano",
          number: "1331",
          district: "Centro",
          city: "Taquara",
          state: "RS",
          cep: "95600-000",
        })
        break;
      case '2':
        this.setState({
          id: 2,
          name: "Santo Grill",
          street: "Rua Guilherme Lahm",
          number: "1675",
          district: "Centro",
          city: "Taquara",
          state: "RS",
          cep: "95600-000",
        })
        break;
      default:
      break;
    }
  }

  accessLocation = () => {
    if(this.state.id == 2){
      this.props.navigation.navigate('Location2', {
        id: this.state.id,
        name: this.state.name,
        street: this.state.street,
        number: this.state.number,
        district: this.state.district,
        city: this.state.city,
        state: this.state.state,
        cep: this.state.cep,
      })
    }
    else{

    this.props.navigation.navigate('Location', {
      id: this.state.id,
      name: this.state.name,
      street: this.state.street,
      number: this.state.number,
      district: this.state.district,
      city: this.state.city,
      state: this.state.state,
      cep: this.state.cep,
    })
  }
  }

  getInitialState() {
    return {
      region: {
      },
    };
  }


  render() {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.appContainer}>
        <View style={styles.barraSuperior}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Drawer')}>
              <Image source={menuHW} style={styles.menuHam}/>
            </TouchableOpacity>
          </View>
        </View>
        {/*
        <Picker
          selectedValue={this.state.idBurger}
          style={{height: 50, flex:1}}
          onValueChange={this.fazerPedido}>
          <Picker.Item label="Selecione uma opção" value='' />
          <Picker.Item label="Hamburguer de Frango - R$13.00" value='1' />
          <Picker.Item label="Hamburguer de Coração - R$14.00" value='2' />
          <Picker.Item label="Hamburguer de Filé - R$15.00" value='3' />
        </Picker>
        <Text style={{flex:1}}>Item selecionado: {this.state.nomeItem}</Text>
        <Text style={{flex:1}}>ID do item: {this.state.idBurger}</Text>
        <Text style={{flex:1}}>Preço do item: {this.state.precoItem}</Text>

        {this.renderNextButton()}

        <Text style={{flex:1}}>ID: {this.state.id}</Text>
        <Text style={{flex:1}}>nome: {this.state.name}</Text>
        <Text style={{flex:1}}>cidade: {this.state.city}</Text>
        */}
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={this.state.region}
            initialRegion={{
              latitude: -29.6479155,
              longitude: -50.7859752,
              latitudeDelta: 0.006,
              longitudeDelta: 0.006,
            }}
          >
          <Marker
            coordinate={{
              latitude: -29.650000,
              longitude: -50.7804653,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Xis do Vini'}
            description={'Toque para acessar'}
            onPress={() => this.selectLocation('1')}
            onCalloutPress={this.accessLocation}
          />
          <Marker
            coordinate={{
              latitude: -29.6476204,
              longitude: -50.7847287,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Santo Grill'}
            description={'Toque para acessar'}
            onPress={() => this.selectLocation('2')}
            onCalloutPress={this.accessLocation}
          />
          </MapView>
        </View>

        <View style={styles.lowerBar}>
          <TouchableOpacity>
            <Image source={Coracao} style={styles.lowerBarIcon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Lupa} style={styles.lowerBarIcon}/>
          </TouchableOpacity>
        </View>
        {/*
        <TouchableNativeFeedback onPress={this.registerUser}>
          <View style={styles.option}>
            <Text style={styles.optionText}>
              Criar conta de Usuário
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.registerCompany}>
          <View style={styles.option}>
            <Text style={styles.optionText}>
              Criar conta de Empresa
            </Text>
          </View>
        </TouchableNativeFeedback>
        */}

        {/* link rápido para alguma página
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Food')} background={TouchableNativeFeedback.SelectableBackground()}>
          <View>
            <Text>Informações</Text>
          </View>
        </TouchableNativeFeedback>*/}
      </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  container: {
    height: 655,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  barraSuperior: {
    height: 58,
    backgroundColor: '#a90f0f',
    flexDirection: 'row',
  },
  menuHam: {
    marginHorizontal: 15,
    marginVertical: 6,
    height: 45,
    width: 45,
  },
  lowerBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: '#a90f0f',
    padding:5,
  },

  lowerBarIcon: {
    width:50,
    height: 30,
    flex:1,
  },

  botaoLupaContainer: {
    backgroundColor: '#880000',
    borderRadius: 10,
    width: 80,
    alignItems: 'center'
  }
})
