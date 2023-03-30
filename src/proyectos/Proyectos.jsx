import React from "react";
import Sidebar from '../components/Sidebar';
import Barra from "../components/Barra";
import FormTarea from "../Tareas/FormTareas";
import ListadoTareas from "../Tareas/ListadoTareas";

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Barra />
                <main>
                    <FormTarea />
                    <div className="contenedor-tarea"></div>
                    <ListadoTareas />
                </main>

            </div>
        </div>
    );
}
export default Proyectos;