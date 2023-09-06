import { useState } from "react";


export const Celda = ({ celda, func, EstadoJuego }) => {

    const [estaOculto, setOculto] = useState(true)

    //Función que cambia el estado de mi useState de true a false
    const revelarBoton = () => {
        setOculto(false);
        func(celda);
    }

    const mostrarCasilla = () => {
        if (EstadoJuego == 'perdio') {
            return celda
        }
        if (estaOculto) {
            return ''
        } else {
            return celda
        }
    }

    // 'revelarBoton' cambia el estado de la celda a false, una vez en false actúa el sino de mi función

    return (
        <button onClick={revelarBoton} className='celda'>
            {mostrarCasilla()}
        </button>
    )
}

// const activacionCelda = (celda) => {

//     const tableroInitial = (tablero) => {
//         tablero.map((fila, iIndex) =>
//             fila.map((celda, jIndex) => {

//                 celda = null;

//             }))
//     }


// }


