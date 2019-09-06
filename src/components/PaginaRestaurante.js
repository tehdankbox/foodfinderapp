import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ImagemRestaurante from "../imgs/santoGrill.png";;
import IconeVoltar from "../imgs/backIconRed.png"
import LogoRest from "../imgs/restauranteLogo.png"
import IconVoltar from "../imgs/arrowWRight.png"


export default class PaginaRestaurante extends Component{
    render(){
        return(
            <View style={styles.conteudo}>
                {/*<Image source={IconeVoltar} style={styles.IconVoltar}/>*/}
                <View style={styles.viewImg}>
                    <Image source={ImagemRestaurante} style={styles.imgRestaurante}/>
                </View>
                <View style={styles.txtInfo}>
                    <View style={styles.viewTxt}>
                        <Text style={styles.restNome}>
                            Santo Grill
                        </Text>
                        <Text style={styles.restLocal}>
                            Rua Guilherme Lahm, 1675 - Centro, Taquara - RS, 95600-000
                        </Text>
                    </View>
                    <View style={styles.tipo}>
                        <Image source={LogoRest} style={styles.LogoRest}/>
                        <Text style={styles.tipoTxt}>Restaurante</Text>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={styles.lista}>
                        <Text style={styles.listaTxt}>Cardápio</Text>
                        <Image source={IconVoltar} style={styles.IconVoltar}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.lista}>
                        <Text style={styles.listaTxt}>Localizar</Text>
                        <Image source={IconVoltar} style={styles.IconVoltar}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.lista}>
                        <Text style={styles.listaTxt}>Contato</Text>
                        <Image source={IconVoltar} style={styles.IconVoltar}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.lista}>
                        <Text style={styles.listaTxt}>Avaliações</Text>
                        <Image source={IconVoltar} style={styles.IconVoltar}/>
                    </View>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conteudo: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#C4C4C4',
    },

    imgRestaurante: {
        width: 412,
        height: 250,
        
    },

    IconVoltar: {
        width: 65,
        height: 65,
        position: 'absolute',
        top: 10,
        left: 10,
    },

    viewImg: {
        borderBottomWidth: 3,
        borderBottomColor: '#4f0000',
    },

    viewTxt: {
        borderBottomWidth: 3,
        borderBottomColor: '#4f0000',
        backgroundColor: '#880000',
        flexDirection: 'column',
    },

    restNome: {
        fontSize: 30,
        color: 'white',
        paddingLeft: 7,
    },

    restLocal: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 7,
        width: 308,
    },

    txtInfo: {
        flexDirection: 'row',
    },

    tipo: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#880000',
        borderBottomWidth: 3,
        borderBottomColor: '#4f0000',
        justifyContent: 'center',
    },

    LogoRest: {
        width: 70,
        height: 70,
    },

    tipoTxt: {
        color: 'white',
    },

    lista: {
        backgroundColor: '#880000',
        borderBottomWidth: 3,
        borderBottomColor: '#4f0000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    listaTxt: {
        color: 'white',
        fontSize: 30,
        paddingVertical: 5,
        paddingLeft: 7
    },

    IconVoltar: {
        width: 40,
        height: 40,
        marginRight: 10,
    }
});