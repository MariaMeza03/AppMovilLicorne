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
        width:50,
        resizeMode: 'contain',
        marginHorizontal:30,
    },

    link_imagen:{
        width:50,
        resizeMode: 'contain',
        margin:"auto",
    },

    link_media:{
        width:25,
        height:25,
        resizeMode: 'contain',
        margin:"auto",
    }
})


export default function StyleImagen({imagen, imagen_firts ,link_imagen,link_media , source}){
    const ImagenStyle =[
        /*styles.imagen_first,*/
        imagen && styles.imagen,
        imagen_firts && styles.imagen_first,
        link_imagen && styles.link_imagen,
        link_media && styles.link_media,

    ]

    return(
        <Image style={ImagenStyle}  source={ source}>
        </Image>
    )
}