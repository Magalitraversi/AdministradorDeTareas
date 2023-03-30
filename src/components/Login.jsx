import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom';
const Login = () => {
    //State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: "",
        password: ""
    });

    //extraer del usuario
    const { email, password } = usuario;
    const onChange = e => {
        //hago una copia de usuario para que no se reescriba 
        guardarUsuario({
            ...usuario,
            // y rescribimos la actual con el siguiente codigo
            [e.target.name]: e.target.value
        })
        //Cunado el usuario quiere iniciar sesión
        // const onSubmit = e => {
        //     e.preventDefault();
        // }
        //Validar que no haya campos vacios

        //Pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión </h1>
                <form >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange} />

                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block text-light fs-3" value="Iniciar Sesión" />

                    </div>
                </form>
                    <Link to={'/nueva-cuenta'} className="enlce-cuenta" > Obtener Cuenta </Link>
            </div>
        </div>

    );
}
export default Login;