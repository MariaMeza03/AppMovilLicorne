import React from "react";
import { StyleSheet, ScrollView} from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({

    container:{
        width:"100%",
        height:"100%",
        flexGrow : 1, 
        justifyContent : 'center',
        alignItems: 'center',
        marginTop:Constants.statusBarHeight,
    },


})


export default function StyleContainerScroll({text, container, children}){
    const containerStyleScroll =[
        container && styles.container,
    ]

    return(
        <ScrollView contentContainerStyle={ containerStyleScroll } >
            { children }
        </ScrollView>
    )
}