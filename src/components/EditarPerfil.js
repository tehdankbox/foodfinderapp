import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Seta from '../imgs/arrowW.png';

class EditarPerfil extends Component{
    render(){
        return(
            <View style={styles.principal}>
                <View style={styles.barraSuperior}>
                    <TouchableOpacity>
                        <Image source={Seta} style={styles.setaVoltar}/>
                    </TouchableOpacity>
                    <Text style={styles.textoPerfil}>
                        EDITAR PERFIL
                    </Text>
                </View>

                <View style={styles.conteudoContainer}>
                    <TouchableOpacity /* ADICIONAR CAMINHO PARA EDITAR PERFIL */>
                        <View style={styles.textoContainer}>
                            <Text style={styles.textoTxt}>Mudar Foto de Perfil</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity /* ADICIONAR CAMINHO PARA LOGOUT */>
                        <View style={styles.textoContainer}>
                            <Text style={styles.textoTxt}>Mudar Nome de Perfil</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1,
    },

    barraSuperior: {
        height: 55,
        backgroundColor: '#EA1D2C',
        flexDirection: 'row',
    },

    setaVoltar: {
        height: 50,
        width: 50,
        margin: 3
    },

    textoPerfil: {
        color: 'white',
        fontSize: 35,
        paddingLeft: 30,
    },

    conteudoContainer: {
    },

    imagemENome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingBottom: 10,
    },

    imagemPerfil: {
        borderRadius: 60,
        width: 100,
        height: 100,
        marginRight: 10,
        marginLeft: 10,
    },

    nomeUsuario: {
        fontSize: 25,
        flexWrap: 'wrap',
        flex: 1,
        textAlign: 'center',
    },

    textoContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },

    textoTxt: {
        fontSize: 23,
    },
})

export default EditarPerfil;