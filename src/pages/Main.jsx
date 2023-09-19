import React from "react";
import { Routes } from "react-router-native";
import { Route } from "react-router-native";

//*Pages
import Home from "./Home";
import Formulario from "./Formulario";
import Cotizador from "./Cotizador";


const Main = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/formulario' element={<Formulario/>} />
            <Route path='/cotizador' element={<Cotizador/>} />
        </Routes>

    )
}

export default Main
