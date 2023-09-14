import React from "react";
import Home from "./Home";
import { Routes } from "react-router-native";
import { Route } from "react-router-native";
import { Text} from "react-native";







const Main = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Text>Sign In</Text>} />
        </Routes>

    )
}

export default Main
