import React from "react";
import { StyleSheet} from "react-native";
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({

    button:{
        width:"100%",
        height:50,
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
        color:"black"
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


export default function StyleButtonForm({button_pdf,button, button_sesion, children,onPress, title , text}){
    const buttonStyle =[
        button && styles.button,
        button_sesion && styles.button_sesion,
        button_pdf && styles.button_pdf,
    ]

    return(
        <Button onPress={onPress}  title={title} mode="text" icon="arrow-right" buttonColor="transparent" textColor="black" style={ buttonStyle }  contentStyle={{flexDirection: 'row-reverse'}}>
             {text}
        </Button>
    )
}