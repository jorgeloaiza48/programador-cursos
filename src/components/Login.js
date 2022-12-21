import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // state = {
    //     form: {
    //         username: '',
    //         password: ''
    //     }
    // }
    // handleChange = e => {
    //     this.setState({
    //         form: {
    //             ...this.state.form,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    //     console.log(this.state.form)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Username ", username)
        console.log("Password ", password)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='containerPrincipal'>
                <div classname='containerSecundario'>
                    <div className='form-group'>
                        <label>Usuario:</label> <br />
                        <input type="email" className='form-control' name='username' onChange={(e) => setUsername(e.target.value)} /> <br />
                        <label>Contraseña</label> <br />
                        <input type="password" className='form-control' name='password' onChange={(e) => setPassword(e.target.value)} /> <br />
                        <button className='btn btn-primary'>Iniciar sesión</button>
                        Registrarse


                    </div>
                </div>
            </div>
        </form>
    )
}
