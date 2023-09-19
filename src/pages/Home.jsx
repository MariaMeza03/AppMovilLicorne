import React from "react";
import { Linking , View } from "react-native";
import { Formik } from 'formik';

//*Css
import StyleText from "../../css/TextStyle";
import StyleInput   from "../../css/InputStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleButton from "../../css/ButtonStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleBackground from "../../css/BackgroundStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";



const Home= () =>{
    return(

        <StyleContainerScroll container>
                <StyleBackground colors={['#00E2CF', '#FFDF17']}  background/> 
                <StyleImagen source={require('../img/Pc.webp')} imagen />

                <StyleContainer text>
                    <StyleText title >Login</StyleText>

                    <Formik>
                        <View>
                            <>
                            <StyleInput placeholder="Usuario"  input/>
                            </>

                            <>
                            <StyleInput placeholder="Contraseña" input/>
                            </>

                        </View>
                    </Formik>

                    <StyleButton to="/formulario" button >
                        <StyleText link_text >INCIA SESIÓN</StyleText>
                        <StyleImagen source={require('../img/arrow.webp')} link_imagen />
                    </StyleButton>

                    <StyleButton  onPress={() => Linking.openURL('http://google.com')} button_sesion >
                        <StyleText  link_text>¡Regístrate!</StyleText>
                    </StyleButton>
                    
                </StyleContainer>
                
                <StyleImagen  source={require('../img/logo.webp')} imagen_logo />
        
            </StyleContainerScroll>
      
    )
}
export default Home

