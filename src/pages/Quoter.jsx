
import React, { useState } from "react";
import { Formik } from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

//*Css
import StyleText from "../../css/TextStyle"; 
import StyleInput   from "../../css/InputStyle";
import StyleImagen from "../../css/ImagenStyle";
import StyleContainer from "../../css/ContainerStyle";
import StyleButton from "../../css/ButtonStyle";
import StyleBackground from "../../css/BackgroundStyle";
import StyleContainerScroll from "../../css/ScrollViewStyle";
import StyleButtonForm from "../../css/ButtonStyleForm";

const loginValidationSchema = Yup.object().shape({
    ventas_deseadas: Yup.string()
    .required('Campo obligatorio *'),
    ticket: Yup.string()
    .required('Campo obligatorio *'),
    ventas: Yup.string()
    .required('Campo obligatorio *'),
    leads: Yup.string()
    .required('Campo obligatorio *'),
    clicks: Yup.string()
    .required('Campo obligatorio *'),
    inversion_minima_ads: Yup.string()
    .required('Campo obligatorio *'),
    fee: Yup.string()
    .required('Campo obligatorio *'),
    inversion_minima: Yup.string()
    .required('Campo obligatorio *'),
    time: Yup.string()
    .required('Campo obligatorio *'),
    CAC_promedio: Yup.string()
    .required('Campo obligatorio *'),
    CAC_payback: Yup.string()
    .required('Campo obligatorio *'),
})


const Quoter= () =>{

    const [user, setuser] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        setuser(values)

        //*Unicamente prueba, la idea es conectarlo al back

        if(values.ventas_deseadas !== '' && values.ticket !== ''){
            navigate('/result')
        }else{
            alert('Todos los datos son necesarios, te agredecemos que ingreses la información correcta')
        }
	}

    return(

    <StyleContainerScroll container>
        <StyleBackground colors={['#FFDF17', '#FFDF17']}  background/> 
        <StyleImagen source={require('../img/cotizador.webp')} imagen />

        <StyleContainer content_form_cotizador >
            <StyleText title_cotizador>Cotizador</StyleText>

            <Formik validationSchema={loginValidationSchema}
            initialValues={{ ventas_deseadas:'', ticket: '', ventas:'', leads:'', clicks:'', inversion_minima_ads:'', fee:'',inversion_minima:'', time:'', CAC_promedio:'', CAC_payback:''   }} 
            onSubmit={handleSubmit} style={{marginBottom:20}}>
                {({ handleChange, handleBlur, handleSubmit, values , errors }) => (
                <StyleContainer content_form_quoter_formik >

                    <StyleContainer content_input>
                        <StyleText label>Ventas deseadas</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="ventas_deseadas" value={values.ventas_deseadas} onBlur={handleBlur('ventas_deseadas')} onChangeText={handleChange('ventas_deseadas')} input/>
                            {errors.ventas_deseadas &&
                                <StyleText error>{errors.ventas_deseadas}</StyleText>
                                }
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Ticket promedio</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="ticket" value={values.ticket} onBlur={handleBlur('ticket')} onChangeText={handleChange('ticket')} input/>
                            {errors.ticket &&
                                <StyleText error>{errors.ticket}</StyleText>
                                }
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Ventas que requieres</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="ventas" value={values.ventas} onBlur={handleBlur('ventas')} onChangeText={handleChange('ventas')} input/>
                            {errors.ventas &&
                                <StyleText error>{errors.ventas}</StyleText>
                                }
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Leads Calificados</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="leads" value={values.leads} onBlur={handleBlur('leads')} onChangeText={handleChange('leads')} input/>
                            {errors.leads && 
                                <StyleText error>{errors.leads}</StyleText>
                                }
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Clics</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="Click" value={values.clicks} onBlur={handleBlur('clicks')} onChangeText={handleChange('clicks')} input/>
                            {errors.clicks &&
                                <StyleText error>{errors.clicks}</StyleText>
                                }
                        <StyleText hr>─────────────</StyleText>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label >Inversión mínima ads</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="inversion_minima_ads" value={values.inversion_minima_ads} onBlur={handleBlur('inversion_minima_ads')} onChangeText={handleChange('inversion_minima_ads')} input/>
                        {errors.inversion_minima_ads &&
                                <StyleText error>{errors.inversion_minima_ads}</StyleText>
                                }
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Fee</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="fee" value={values.fee} onBlur={handleBlur('fee')} onChangeText={handleChange('fee')} input/>
                        {errors.fee &&
                                <StyleText error>{errors.fee}</StyleText>
                                }
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>Inversión mínima total</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="inversion_minima" value={values.inversion_minima} onBlur={handleBlur('inversion_minima')} onChangeText={handleChange('inversion_minima')} input/>
                        {errors.inversion_minima &&
                                <StyleText error>{errors.inversion_minima}</StyleText>
                                }
                        <StyleText hr>─────────────</StyleText>
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>¿En cuanto tiempo cierras una venta?</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="time" value={values.time} onBlur={handleBlur('time')} onChangeText={handleChange('time')} input/>
                        {errors.time &&
                                <StyleText error>{errors.time}</StyleText>
                                }
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>CAC promedio</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="CAC_promedio" value={values.CAC_promedio} onBlur={handleBlur('CAC_promedio')} onChangeText={handleChange('CAC_promedio')} input/>
                        {errors.CAC_promedio &&
                                <StyleText error>{errors.CAC_promedio}</StyleText>
                                }
                    </StyleContainer>

                    <StyleContainer content_input>
                        <StyleText label>CAC Payback</StyleText>
                        <StyleInput placeholder="Tú respuesta" name="CAC_payback" value={values.CAC_payback} onBlur={handleBlur('CAC_payback')} onChangeText={handleChange('CAC_payback')} input/>
                        {errors.CAC_payback &&
                                <StyleText error>{errors.CAC_payback}</StyleText>
                                }
                    </StyleContainer>

                    <StyleButtonForm onPress={handleSubmit} button text="ENVIAR">
                        </StyleButtonForm>

                </StyleContainer>
                )}
            </Formik>
            
            <StyleContainer  content_image>
                <StyleButton to="/" button>
                    <StyleImagen  source={require('../img/logo.webp')} imagen_logo />
                </StyleButton>
            </StyleContainer>
            
        </StyleContainer>
        

    </StyleContainerScroll>
      
    )
}
export default Quoter