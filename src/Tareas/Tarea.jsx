import React from 'react'

const Tarea = ({ tarea }) => {
    return (
        <li className='tarea sombra'>
            <p> {tarea} </p>
            <div className='estado'>
                {tarea.estado
                    ?
                    (
                        <button
                            type='button'
                            className='incompleto'>Incompleto
                        </button>
                    ) :
                    (
                        <button
                            type='button'
                            className='completo'>Completo
                        </button>
                    )

                }
                <div>
                    <button
                        type='button'
                        className='btn btn-primario'
                    >Editar

                    </button>
                    <button
                        type='button'
                        className='btn btn-secundario'
                    >Eliminar
                    </button>
                </div>

            </div>
        </li>
    )
}

export default Tarea