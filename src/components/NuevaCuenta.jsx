import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom';
const NuevaCuenta = () => {
    //State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmar: ""
    });

    //extraer del usuario
    const {nombre, email, password, confirmar } = usuario;
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


        //Password mínimo de 6 caracteres

        //Los 2 password son iguales

        //Pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta </h1>
                <form >
                <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={email}
                            onChange={onChange} />

                    </div>
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
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="Password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange={onChange} />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block text-light fs-3" value="Resgistrarme" />

                    </div>
                </form>
                    <Link to={'/login'} className="enlce-cuenta" > Iniciar Sesión </Link>
            </div>
        </div>

    );
}
export default NuevaCuenta;