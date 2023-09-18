import React from "react";
import { StyleSheet, View} from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({

    container:{
        width:"100%",
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:Constants.statusBarHeight,
    },

    text:{
        width:"100%",
        paddingLeft:50,
        paddingRight:50,
    },



})


export default function StyleContainer({text, container, children}){
    const containerStyle =[
        container && styles.container,
        text && styles.text,

    ]

    return(
        <View style={ containerStyle } >
            { children }
        </View>
    )
}