import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback, ScrollView } from "react-native";
import IconeVoltar from "../assets/backIconRed.png";
import talin from "../assets/talin.jpg";

export default class DrawerMenu extends React.Component{
    render(){
      const { navigation } = this.props;
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image source={talin} style={styles.img}/>
                            </View>
                            <View style={styles.profileTxt}>
                                    <Text style={styles.name}>
                                        Daniel Orivaldo Pereira da Silva
                                    </Text>
                                </View>
                        </View>
                    </View>
                    <View style={styles.bottomLinks}>
                      <TouchableNativeFeedback onPress={() => this.props.navigation.goBack()}>
                        <View style={styles.itemMenu}>
                          <Text style={styles.itemMenuTexto}>Principal</Text>
                        </View>
                      </TouchableNativeFeedback>
                      <TouchableNativeFeedback>
                        <View style={styles.itemMenu}>
                          <Text style={styles.itemMenuTexto}>Perfil</Text>
                        </View>
                      </TouchableNativeFeedback>
                      <TouchableNativeFeedback>
                        <View style={styles.itemMenu}>
                          <Text style={styles.itemMenuTexto}>Favoritos</Text>
                        </View>
                      </TouchableNativeFeedback>
                      <TouchableNativeFeedback>
                        <View style={styles.itemMenu}>
                          <Text style={styles.itemMenuTexto}>Configurações</Text>
                        </View>
                      </TouchableNativeFeedback>
                      {/*
                        {this.navLink('Principal', 'Principal')}
                        {this.navLink('Perfil', 'Perfil')}
                        {this.navLink('Configuracoes', 'Configurações')}
                        {this.navLink('Login', 'Log In')}
                      */}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.description}>Food Finder App</Text>
                    <Text style={styles.version}>v1.0</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },

    topLinks: {
        height: 120,
        backgroundColor: '#870000',
    },

    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450,
    },

    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },

    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
    },

    profileTxt: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    itemMenu: {
      padding: 20,
      borderBottomWidth: 2,
      borderBottomColor: '#dddddd',
    },

    itemMenuTexto:{
      fontSize: 21,
    },

    name: {
        paddingBottom: 20,
        paddingRight: 10,
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        flexWrap: 'wrap',
    },

    imgView: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 20,
        marginBottom: 20,
    },

    img: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },

    footer: {
       height: 50,
       alignItems: 'center',
       flexDirection: 'row',
       backgroundColor: 'white',
       borderTopWidth: 1,
       borderTopColor: 'lightgray',
    },

    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray',
    },

    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
    },

    scroller: {
        flex: 1,
    },
});
