/**
 * @format
 */
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import PaginaPrincipal from './src/components/PaginaPrincipal';
import DrawerNavigator from './navigation/DrawerNavigator';

export default class Index extends Component {
    render(){
        return(
            <DrawerNavigator/>
        );
    }
}

AppRegistry.registerComponent("FoodFinder", () => Index);