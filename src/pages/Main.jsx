import React from "react";
import { Routes } from "react-router-native";
import { Route } from "react-router-native";

//*Pages
import Home from "./Home";
import Form from "./Form";
import Quoter from "./Quoter";
import Result from "./Result";


const Main = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form/>} />
            <Route path='/quoter' element={<Quoter/>} />
            <Route path='/result' element={<Result/>} />
        </Routes>

    )
}

export default Main
