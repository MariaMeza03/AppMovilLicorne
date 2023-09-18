import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

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
    },

})


export default function StyleButton({button, button_sesion, onPress, children}){
    const buttonStyle =[
        button && styles.button,
        button_sesion && styles.button_sesion,

    ]

    return(
        <TouchableOpacity style={ buttonStyle } onPress ={ onPress }>
            { children }
        </TouchableOpacity>
    )
}