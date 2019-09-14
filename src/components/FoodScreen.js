import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import IconeVoltar from "../assets/backIconRed.png"
import MapPin from "../assets/mapPin.png"
import IconPhone from "../assets/phoneIcon.png"
import IconStar from "../assets/starIcon.png"
import Hamb1 from "../assets/johnnyChorao.jpg"

export default class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const nomeItem = navigation.getParam('nomeItem', 'Xis Cu');
    const precoItem = navigation.getParam('precoItem', 69);

    return (
      <ScrollView style={styles.conteudo}>
        <View style={styles.upperBar}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={IconeVoltar} style={styles.upperBarIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={MapPin} style={styles.upperBarIcon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IconPhone} style={styles.upperBarIcon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IconStar} style={styles.upperBarIcon}/>
          </TouchableOpacity>
        </View>
          <View style={styles.comidaImgContainer}>
              <Image source={Hamb1} style={styles.comidaImg}/>
          </View>
          <View style={styles.txtNomeContainer}>
          <Text style={styles.txtNome}>Xis Filé com Alcatra e Bacon</Text>
          <Text style={styles.txtInfo}>R$22,90</Text>
          </View>

          <View style={styles.lista}>
            <Text style={styles.listaTxt}>Ingredientes</Text>
          </View>

          <View style={styles.ingredientes}>
              <Text style={styles.ingredientesItem}>Pão</Text>
              <Text style={styles.ingredientesItem2}>Filé</Text>
              <Text style={styles.ingredientesItem}>Alcatra</Text>
              <Text style={styles.ingredientesItem2}>Presunto</Text>
              <Text style={styles.ingredientesItem}>Queijo</Text>
              <Text style={styles.ingredientesItem2}>Maionese</Text>
              <Text style={styles.ingredientesItem}>Ovo</Text>
              <Text style={styles.ingredientesItem2}>Cebola</Text>
              <Text style={styles.ingredientesItem}>Alface</Text>
              <Text style={styles.ingredientesItem2}>Tomate</Text>
              <Text style={styles.ingredientesItem}>Bacon</Text>
          </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    conteudo: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
    },

    upperBar: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'center',
      backgroundColor: '#a90f0f',
    },

    upperBarIcon: {
      width:60,
      flex:1,
    },

    comidaImgContainer: {
        alignSelf: 'center',
        borderWidth: 5,
        borderColor: '#720505',
        marginVertical: 20,
    },

    comidaImg: {
        width: 250,
        height: 250,
    },

    txtNome: {
        fontSize: 21,
        textAlign: 'center',
        backgroundColor: "#f1f1f1",
        paddingVertical: 5,
    },

    txtInfo: {
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: "#e8e8e8",
        paddingVertical: 5,
        marginBottom: 20,
    },

    txtNomeContainer: {
        marginTop: 0,
    },

    lista: {
      borderTopWidth: 2,
      borderColor: '#720505',
      backgroundColor: '#a90f0f',
      alignItems: 'center',
      justifyContent: 'center'
    },

    listaTxt: {
      color: 'white',
      fontSize: 30,
      paddingBottom: 5,
    },

    ingredientes: {
        borderTopWidth: 3,
        borderTopColor: '#4f0000',
        borderBottomWidth: 3,
        borderBottomColor: '#4f0000',
    },

    ingredientesItem: {
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 18,
        backgroundColor: "#f1f1f1",
    },

    ingredientesItem2: {
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 18,
        backgroundColor: "#e8e8e8",
    },
});
