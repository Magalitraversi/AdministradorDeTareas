import React from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyectos from "../proyectos/ListadoProyectos";
const Sidebar = () => {
    return (
        <div className="contenedor-app">
            <aside>
<h1>Proyectos<span>Tareas</span></h1>
<NuevoProyecto/>

<div className="proyectos">
    <h2>Tus Proyectos</h2>
    <ListadoProyectos/>
</div>
            </aside>
            </div>
    );
}
export default Sidebar;