import React from "react";
import { StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
    text:{
        width:"100%",
        paddingLeft:50,
        paddingRight:50,
    },

    //**Formulario */

    content_form:{
        width:"100%",
        paddingHorizontal:50,
        paddingBottom:50,
    },

    content_image:{
        width:'100%', 
        justifyContent:'center',
        alignItems:'center'
    }

})


export default function StyleContainer({text, content_form, content_image, children}){
    const containerStyle =[
        text && styles.text,
        content_form && styles.content_form,
        content_image && styles.content_image,

    ]

    return(
        <View style={ containerStyle } >
            { children }
        </View>
    )
}