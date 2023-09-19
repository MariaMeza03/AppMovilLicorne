
import React from "react";
import { View , Text } from "react-native";
import { Formik } from 'formik';



//*Css
import StyleText from "../../css/TextStyle";
import StyleInput   from "../../css/InputStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleButton from "../../css/ButtonStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleBackground from "../../css/BackgroundStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";



const Formulario= () =>{
    return(

    <StyleContainerScroll container>
        <StyleBackground colors={['#FFDF17', '#FFDF17']}  background/> 
        <StyleImagen source={require('../img/Formulario.png')} imagen />

        <StyleContainer content_form>
            <StyleText title >Formulario</StyleText>

            <Formik>

                <View style={{ paddingVertical:20 }} >

                    <View style={{ paddingBottom:25 }}>
                        <Text style={{ fontWeight:"bold"}}>Correo electrónico</Text>
                        <StyleInput placeholder="Tú dirección de correo electrónico"  input/>
                    </View>

                    <View style={{ paddingBottom:20 }}>
                        <Text style={{ fontWeight:"bold"}} >Cuéntanos todo sobre tu proyecto ¿Cuál es tu url? y ¿Cuáles son tus productos o servicios estrella?</Text>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </View>

                    <View style={{ paddingBottom:20 }}>
                        <Text style={{ fontWeight:"bold"}} >¿Cuál es el objetivo de tu campaña?</Text>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </View>

                    <View style={{ paddingBottom:20 }}>
                        <Text style={{ fontWeight:"bold"}} >¿Cuál es tu presupuesto?</Text>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </View>

                    <View style={{ paddingBottom:20 }}>
                        <Text style={{ fontWeight:"bold"}} >¿A cuanto asciende tu objetivo de ventas?
                            (en dinero $)</Text>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </View>

                    <View style={{ paddingBottom:20 }}>
                        <Text style={{ fontWeight:"bold"}} >¿A cuánto asciende tu ticket promedio?
                            (en dinero $) El ticket promedio se refiere a cuanto
                            cuesta en promedio tu producto o servicio</Text>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </View>

                </View>
                
            </Formik>

            <StyleButton to="/cotizador" button>
                <StyleText link_text >ENVÍAR</StyleText>
                <StyleImagen source={require('../img/arrow.webp')} link_imagen />
            </StyleButton>

            <StyleContainer  content_image>
                <StyleImagen  source={require('../img/logo.webp')} imagen_logo />
            </StyleContainer>
            
        </StyleContainer>
        

    </StyleContainerScroll>
      
    )
}
export default Formulario