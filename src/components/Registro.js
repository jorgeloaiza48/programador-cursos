import React from 'react'
import './registro.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import usuarios from './usuariosRegistrados.json'
//import { writeFile } from 'fs';
import * as fs from 'fs';

//const fs = require('fs')

function Registro() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // fetch('usuariosRegistrados.json')
        // .then((response) => response.json())
        // .then((response) => console.log(response))        
        usuarios.forEach(user => {
            if (user.Email === username) {
                console.log("El usuario ingresado ya se encuentra en uso")
            }
            else {
                let id = usuarios.length + 1
                let nuevoUsuario = {
                    id: id,
                    Email: username,
                    Contraseña: password
                }
                let NewUser = []
                // let UsersJSON = JSON.parse(usuarios) //de JSON a JS
                if (usuarios === "") {
                    NewUser.push(nuevoUsuario)
                    console.log(NewUser)
                }
                else {
                    console.log(NewUser)
                    NewUser = usuarios
                    NewUser.push(nuevoUsuario)
                    fs.writeFile("usuariosRegistrados.json", NewUser, (error) => {
                        if (error) throw error
                        console.log("Se guardó el json")
                    })

                }

                let longitudUsuarios = usuarios.length
                console.log("Longitud de usuarios ", longitudUsuarios)
                console.log("ID ", id)
                // users.push(nuevoUsuario)
                //writeJsonFile('usuariosRegistrados.json', NewUser);
                console.log(usuarios)




            }
        })

    }

    console.log(username)
    console.log(password)

    return (
        <form onSubmit={handleSubmit}>
            <div className='containerPrincipal'>
                <div classname='containerSecundario'>
                    <div className='form-group'>
                        <label>Usuario:</label> <br />
                        <input type="email" className='form-control' name='username' onChange={(e) => setUsername(e.target.value)} /> <br />
                        <label>Contraseña</label> <br />
                        <input type="password" className='form-control' name='password' onChange={(e) => setPassword(e.target.value)} /> <br />
                        <button type="submit" className='btn btn-primary'>Registrarse</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Registro