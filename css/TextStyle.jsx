import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({

    title:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'left',
    },
    link_text:{
        fontSize:15,
        fontWeight:'bold',
    },

})


export default function StyleText({bold,title, link_text,children}){
    const textStyle =[
        title && styles.title,
        link_text && styles.link_text,

    ]

    return(
        <Text style={textStyle}>
            {children}
        </Text>
    )
}