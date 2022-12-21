import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import LoginButton from '../components/LoginButton'
import { Login } from '../components/Login'
import Registro from '../components/Registro'

function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login/>}> </Route>
                <Route exact path='/registro' element={<Registro/>}> </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Rutas