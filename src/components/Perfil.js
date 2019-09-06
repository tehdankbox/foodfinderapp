import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Seta from '../imgs/arrowW.png';
import ProfilePicture from '../imgs/imagemPerfil.png' //COMENTARIO 1 - NESSE IMPORT CRIAR O ARQUIVO QUE EXPORTA A IMAGEM DO USUÁRIO COMO EU DESCREVI NO COMETÁRIO 2

class Perfil extends Component{
    render(){
        return(
            <View style={styles.principal}>
                <View style={styles.barraSuperior}>
                    <TouchableOpacity>
                        <Image source={Seta} style={styles.setaVoltar}/>
                    </TouchableOpacity>

                    <Text style={styles.textoPerfil}>
                        PERFIL
                    </Text>
                </View>

                <View style={styles.conteudoContainer}>
                    <View style={styles.imagemENome}>
                        <Image source={ProfilePicture}/* COMENTÁRIO 2 - A IMAGEM DE PERFIL TEM QUE ESTAR VAZIA CASO NÃO HAJA USUÁRIO LOGADO, SUGIRO CRIAR UM ARQUIVO PRA TESTAR SE EXISTE USUÁRIO LOGADO, SE SIM ENTÃO PEGAR A FOTO QUE ELE FEZ UPLOAD, SE NÃO USAR UMA IMAGEM PADRÃO MAS ESSA PARTE PODE SER IGNORADA POR ENQUANTO */ style={styles.imagemPerfil}/>
                        <Text style={styles.nomeUsuario}>Cléberson Augusto de Oliveira Tiamat{/* COMENTÁRIO 2.1 - ALTERAR O NOME É O MESMO PROCESSO QUE A IMAGEM PORÉM UTILIZA TEXTO AO INVÉS DE IMAGEM */}</Text>
                    </View>
                    
                    <TouchableOpacity /* COMENTÁRIO 3 - ADICIONAR CAMINHO PARA EDITAR PERFIL */>
                        <View style={styles.textoContainer}>
                            <Text style={styles.textoTxt}>Editar Perfil</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity /* COMENTÁRIO 3 - ADICIONAR CAMINHO PARA MINHAS AVALIAÇÕES */>
                        <View style={styles.textoContainer}>
                            <Text style={styles.textoTxt}>Minhas Avaliações</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity /* COMENTÁRIO 3 - ADICIONAR CAMINHO PARA LOGOUT */>
                        <View style={styles.textoContainer}>
                            <Text style={styles.textoTxt}>Log Out</Text>
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
        paddingLeft: 90,
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

export default Perfil;