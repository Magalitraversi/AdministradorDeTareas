import React, { useContext } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from '../../src/context/proyecto/proyectoContext';

const ListadoProyectos = () => {
//Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos } = proyectosContext;

    //Revisar si proyectos tiene contenido
    if (proyectos.length === 0) return null;
    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
export default ListadoProyectos;