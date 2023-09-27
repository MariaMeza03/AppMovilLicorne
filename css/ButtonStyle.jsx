import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({

    button:{
        width:"100%",
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
        marginHorizontal:30,
        resizeMode: 'contain',
    },

    button_sesion:{
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginLeft:"auto",
        underlayColor:"transparent"
        
    },

    button_pdf:{
        width:"100%",
        height:150,
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
        
    },


})


export default function StyleButton({button_pdf,button, button_sesion, children,to}){
    const buttonStyle =[
        button && styles.button,
        button_sesion && styles.button_sesion,
        button_pdf && styles.button_pdf,
    ]

    return(
        <Link to={to} underlayColor="transparent" component={TouchableOpacity} style={{backgroundColor:"transparent"}}>
            <View style={ buttonStyle }  component={TouchableOpacity}>
                { children }
            </View>
        </Link>
    )
}