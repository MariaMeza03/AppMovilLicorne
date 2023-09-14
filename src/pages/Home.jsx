import React from "react";
import { Text, View, OpenURLButton, Linking , TouchableOpacity} from "react-native";
import { StyleSheet , Image , TextInput  } from "react-native";
import Constants from 'expo-constants';
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-web";

const Home= () =>{
    return(
        <View style={styles.container}>
            <LinearGradient colors={['#00E2CF', '#FFDF17']} style={styles.background}/> 
            <Image source={require('../img/Pc.webp')} style={styles.imagen}/>

            <View style={styles.text}>
                <Text style={styles.title}>Login</Text>
                <TextInput placeholder="Usuario" style={styles.input}/>
                <TextInput placeholder="Contraseña" style={styles.input}/>

                <TouchableOpacity onPress={() => Linking.openURL('http://google.com')} style={styles.button} >
                    <Text style={styles.link_text} >INCIA SESIÓN</Text>
                    <Image source={require('../img/arrow.webp')} style={styles.link_imagen}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('http://google.com')} style={styles.button_sesion} >
                    <Text style={styles.link_text} >¡Regístrate!</Text>
                </TouchableOpacity>
                
            </View>
            
            <Image source={require('../img/logo.webp')} style={styles.imagen_logo}/>
        
        </View>

    )
}
export default Home

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:Constants.statusBarHeight,
    },

    background:{
        width:"100%",
        height:"100%",
        position:"absolute",
        zIndex:0,
    },

    imagen:{
        width:300,
        resizeMode: 'contain',
        margin:"auto",
    },

    text:{
        width:"100%",
        paddingLeft:50,
        paddingRight:50,
    },

    title:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'left',
    },

    input:{
        width:"100%",
        borderBottomWidth:3,
        borderBottomColor:"#000",
        padding:10,
    },
    button:{
        width:"100%",
        height:80,
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        gap:10,
    },

    link_text:{
        fontSize:15,
        fontWeight:'bold',
    },

    link_imagen:{
        width:50,
        resizeMode: 'contain',
        margin:"auto",
    },

    button_sesion:{
        flexDirection:'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginLeft:"auto",
    },

    imagen_logo:{
        width:100,
        resizeMode: 'contain',
        margin:"auto",
        marginTop:30,
        marginBottom:30,
    }

})
