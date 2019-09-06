import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { SearchBar } from "react-native-elements";


import Perfil from './Perfil';
import Configuracoes from './Configuracoes';
import menuHW from '../imgs/menuHW.png';
import Coracao from '../imgs/coracaoW.png';
import Lupa from '../imgs/lupaW.png';

export default class PaginaPrincipal extends Component {

    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render(){

        const { search } = this.state;

        return(
            <View style={styles.principal}>
                <View style={styles.barraSuperior}>
                    <View>
                        <TouchableOpacity navigation={this.props.navigation} onPress={() => this.props.navigation.toggleDrawer()}>
                            <Image source={menuHW} style={styles.menuHam}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.barraPesquisa}>
                        <SearchBar placeholder = "Type here..."
                        onChangeText = {this.updateSearch}
                        value = {search}
                        lightTheme
                        />
                    </View>
                </View>
                
                <View style={styles.mapaContainer}>
                    <Text>Um mapa deve ser colocado aqui utilizando a API do google maps</Text>
                </View>

                <View style={styles.barraInferior}>
                    <View>
                        <TouchableOpacity>
                            <Image source={Coracao} style = {styles.botaoFav}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.botaoLupaContainer}>
                        <TouchableOpacity>
                            <Image source={Lupa} style = {styles.botaoLupa}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },

    barraSuperior: {
        height: 58,
        backgroundColor: '#EA1D2C',
        flexDirection: 'row',
    },

    mapaContainer: {
        height: 650,
    },

    barraInferior: {
        height: 60,
        backgroundColor: '#EA1D2C',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    menuHam: {
        marginHorizontal: 15,
        marginVertical: 6,
        height: 45,
        width: 45,
    },

    barraPesquisa: {
        width: 340,
    },

    botaoFav: {
        margin: 5,
        height: 50,
        width: 50,
    },

    botaoLupa: {
        height: 50,
        width: 50,
        margin: 5,
    },

    botaoLupaContainer: {
        backgroundColor: '#880000',
        borderRadius: 10,
        width: 80,
        alignItems: 'center'
    }
});