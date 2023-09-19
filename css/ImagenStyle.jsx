import React from "react";
import { StyleSheet, Image  } from "react-native";

const styles = StyleSheet.create({

    imagen:{
        width:300,
        resizeMode: 'contain',
        margin:"auto",
        marginHorizontal:"auto"
    },
    imagen_logo:{
        width:80,
        resizeMode: 'contain',
        margin:"auto",
        marginTop:30,
        marginBottom:30,
    },

    link_imagen:{
        width:50,
        resizeMode: 'contain',
        margin:"auto",
    },
})


export default function StyleImagen({imagen, imagen_firts ,link_imagen , source}){
    const ImagenStyle =[
        /*styles.imagen_first,*/
        imagen && styles.imagen,
        imagen_firts && styles.imagen_first,
        link_imagen && styles.link_imagen,

    ]

    return(
        <Image style={ImagenStyle}  source={ source}>
        </Image>
    )
}