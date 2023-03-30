import React, { useReducer } from 'react'
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { FORMULARIO_PROYECTO } from '../../types/index'

const ProyectoState = (props) => {
    const initialState = {
        proyectos : [
            { id:1,nombre: 'Tienda Virtual' },
            { id:2, nombre: 'Diseño de sitio Web' }
        ],
        formulario: false
    }
    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    //provider=> desde aquí nacen los datos
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }} >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;