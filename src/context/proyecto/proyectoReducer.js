import { FORMULARIO_PROYECTO } from '../../types/index'

export default (state, action)=>{
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return {
            ...state,
            formulario: true
            }
        default:
            return state;
    }
}