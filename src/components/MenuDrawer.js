import React from 'react';
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component{
    navLink(nav, text){
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)} style={{height: 50}}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scroller}>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image source={require('../imgs/hamburguer2.png')} style={styles.img}/>
                            </View>
                            <View style={styles.profileTxt}>
                                    <Text style={styles.name}>
                                        Daniel Orivaldo Pereira da Silva
                                    </Text>
                                </View>
                        </View>
                    </View>
                    <View style={styles.bottomLinks}>
                        {this.navLink('Principal', 'Principal')}
                        {this.navLink('Perfil', 'Perfil')/* CASO NÃO HAJA UM USUÁRIO LOGADO SERIA BOM QUE ESTE BOTÃO LEVASSE O USUÁRIO DIRETO PARA A TELA DE LOGIN */}
                        {this.navLink('Configuracoes', 'Configurações')}
                        {this.navLink('Login', 'Log In')/* ESTE BOTÃO LEVA O USUÁRIO PARA A TELA DE LOGIN, SE O USUÁRIO JÁ ESTIVER LOGADO AO CLICAR NESTE BOTÃO O USUÁRIO PODE OU RECEBER UM ALERT DIZENDO QUE JÁ ESTÁ LOGADO (NÃO SEI COMO FAZER ISSO) OU PODE SER REDIRECIONADO A UMA PÁGINA COM UM TEXTO DIZENDO QUE JÁ EXISTE UM USUÁRIO LOGADO (SEI COMO FAZER MAS NÃO É O MÉTODO MAIS PRÁTICO) */}
                        {this.navLink('Restaurante', 'PaginaRestaurante')}
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
        height: 150,
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