import React from 'react';
import { Platform, Dimensions  } from 'react-native';
import { createDrawerNavigator , createAppContainer } from 'react-navigation'

import PaginaPrincipal from '../src/components/PaginaPrincipal';
import Perfil from '../src/components/Perfil';
import Config from '../src/components/Configuracoes';
import MenuDrawer from '../src/components/MenuDrawer';
import Login from '../src/components/Login';
import Restaurante from '../src/components/PaginaRestaurante';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({ navigation }) => {
        return(
            <MenuDrawer navigation={navigation}/>
        )
    }
}

const DrawerNavigator = createDrawerNavigator({
        Principal: {
            screen: PaginaPrincipal
        },
        Perfil: {
            screen: Perfil
        },
        Configuracoes: {
            screen: Config
        },
        Login: {
            screen: Login
        },
        Restaurante: {
            screen: Restaurante
        }
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);