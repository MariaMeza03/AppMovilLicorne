import React, { useState } from "react";
import { Linking , View } from "react-native";
import { Formik } from 'formik';
import {useNavigate} from 'react-router-dom';

//*Css
import StyleText from "../../css/TextStyle";
import StyleInput   from "../../css/InputStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleButton from "../../css/ButtonStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleBackground from "../../css/BackgroundStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";
import StyleButtonForm from "../../css/ButtonStyleForm";


const Home= () =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log(values)
        setuser(values)

        if(values.user === 'admin' && values.password === 'Licorne_130?'){
            console.log('Usuario y contraseña correctos')
            navigate('/form')
        }else{
            alert('Usuario o contraseña incorrectos')
        }
	}

    return(

        <StyleContainerScroll container>
                <StyleBackground colors={['#00E2CF', '#FFDF17']}  background/> 
                <StyleImagen source={require('../img/Pc.webp')} imagen />

                <StyleContainer text>
                    <StyleText title >Login</StyleText>

                    <Formik  
                    initialValues={{ user: '', password: ''}} 
                    onSubmit={handleSubmit}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                       <View>
                            <StyleContainer content_input>
                                <StyleInput placeholder="Usuario" input value={values.user}  onBlur={handleBlur('user')} onChangeText={handleChange('user')} />
                            </StyleContainer >

                            <StyleContainer content_input>
                            <StyleInput placeholder="Usuario" input value={values.password}  onBlur={handleBlur('password')} onChangeText={handleChange('password')} />
                            </StyleContainer >

                            <StyleButtonForm onPress={handleSubmit} button text="INCIA SESIÓN">
                            </StyleButtonForm>

                        </View>
                        )}
                    </Formik>   

                    <StyleButton  onPress={() => Linking.openURL('http://google.com')} button_sesion >
                        <StyleText  link_text>¡Regístrate!</StyleText>
                    </StyleButton>
                    
                </StyleContainer>
                
                <StyleImagen  source={require('../img/logo.webp')} imagen_logo />
        
            </StyleContainerScroll>
      
    )
}
export default Home


