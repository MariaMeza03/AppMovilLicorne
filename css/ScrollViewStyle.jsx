import React from "react";
import { StyleSheet, ScrollView} from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({

    container:{
        width:"100%",
        height:"auto",
        flexGrow : 1, 
        justifyContent : 'center',
        alignItems: 'center',
        marginTop:Constants.statusBarHeight,
        
    },
})


export default function StyleContainerScroll({ container, children}){
    const containerStyleScroll =[
        container && styles.container,
    ]

    return(
        <ScrollView contentContainerStyle={ containerStyleScroll } >
            { children }
        </ScrollView>
    )
}