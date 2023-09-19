import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({

    button:{
        width:"100%",
        height:80,
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
    },

    button_sesion:{
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginLeft:"auto",
        underlayColor:"transparent"
        
    },


})


export default function StyleButton({button, button_sesion, children,to}){
    const buttonStyle =[
        button && styles.button,
        button_sesion && styles.button_sesion,

    ]

    return(
        <Link to={to} underlayColor="transparent" component={TouchableOpacity} style={{backgroundColor:"transparent"}}>
            <View style={ buttonStyle }  component={TouchableOpacity}>
                { children }
            </View>
        </Link>
    )
}