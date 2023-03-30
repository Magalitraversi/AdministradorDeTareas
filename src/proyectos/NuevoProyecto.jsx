import React, { Fragment, useContext, useState } from "react";
import proyectoContext from '../../src/context/proyecto/proyectoContext';


const NuevoProyecto = () => {
    //Obtener el State del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario } = proyectosContext;
    //State para proyecto
    const [proyecto, guardarProyecto] = useState(
        {
            nombre: ''
        }
    );
    //Extraer nombre de Proyecto
    const { nombre } = proyecto;
    //Lee el contenido del input
    const onChangeProyecto = e => {
        guardarProyecto(
            {
                ...proyecto,
                [e.target.name]: e.target.value
            }
        )
    }
    //Cuando el usuario envía un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto

        //agregar al state

        //Reiniciar el formulario

        //Mostrar el formulario
    }
    
    const onClickFormulario = () => {
        mostrarFormulario();
    }
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}>
                Nuevo Proyecto</button>
            {formulario ?
                (
                    <form className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}

                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto} />
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto" />

                    </form>
                ) : null
            }

        </Fragment>
    );
}
export default NuevoProyecto;