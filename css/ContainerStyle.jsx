import React from "react";
import { StyleSheet, View} from "react-native";

const styles = StyleSheet.create({

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