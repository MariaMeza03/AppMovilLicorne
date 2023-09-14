import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({

    text:{
        fontSize:14,
    },

    bold:{
        fontWeight:'bold',
        color:'red',
    }
})


export default function StyleText({bold, children}){
    const textStyle =[
        styles.text,
        bold && styles.bold,

    ]

    return(
        <Text style={textStyle}>
            {children}
        </Text>
    )
}