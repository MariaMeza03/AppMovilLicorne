
import React from "react";
import { View , Text} from "react-native";
import { Formik } from 'formik';

//*Css
import StyleText from "../../css/TextStyle"; 
import StyleInput   from "../../css/InputStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleButton from "../../css/ButtonStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleBackground from "../../css/BackgroundStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";



const Quoter= () =>{
    return(

    <StyleContainerScroll container>
        <StyleBackground colors={['#FFDF17', '#FFDF17']}  background/> 
        <StyleImagen source={require('../img/cotizador.webp')} imagen />

        <StyleContainer content_form_cotizador >
            <StyleText title_cotizador>Cotizador</StyleText>

            <Formik >

                <StyleContainer content_form_quoter_formik >

                    <StyleContainer content_input>
                        <StyleText label>Ventas deseadas</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Ticket promedio</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Ventas que requieres</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Leads Calificados</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Clics</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                        <StyleText hr>─────────────</StyleText>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label >Inversión mínima ads</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Fee</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Inversión mínima total</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                        <StyleText hr>─────────────</StyleText>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>¿En cuanto tiempo cierras una venta?</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>CAC promedio</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>CAC Payback</StyleText>
                        <StyleInput placeholder="Tú respuesta"  input/>
                    </StyleContainer>

                </StyleContainer>
                
            </Formik>

            <StyleButton to="/result" button>
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
export default Quoter