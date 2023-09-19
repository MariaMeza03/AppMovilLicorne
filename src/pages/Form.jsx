
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



const Form= () =>{
    return(

    <StyleContainerScroll container>
        <StyleBackground colors={['#FFDF17', '#FFDF17']}  background/> 
        <StyleImagen source={require('../img/Formulario.webp')} imagen />

        <StyleContainer content_form>
            <StyleText title >Formulario</StyleText>

            <Formik>

                <StyleContainer content_form_form_formik >

                    <StyleContainer content_input>
                        <StyleText label >Correo electrónico</StyleText>
                        <StyleInput placeholder="Tú dirección de correo electrónico"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label >Cuéntanos todo sobre tu proyecto ¿Cuál es tu url? y ¿Cuáles son tus productos o servicios estrella?</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label >¿Cuál es el objetivo de tu campaña?</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label >¿Cuál es tu presupuesto?</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>¿A cuanto asciende tu objetivo de ventas?
                            (en dinero $)</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label >¿A cuánto asciende tu ticket promedio?
                            (en dinero $) El ticket promedio se refiere a cuanto
                            cuesta en promedio tu producto o servicio</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                </StyleContainer>
                
            </Formik>

            <StyleButton to="/quoter" button>
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
export default Form