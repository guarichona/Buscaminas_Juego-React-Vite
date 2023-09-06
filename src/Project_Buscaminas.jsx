import React, { useState } from 'react'

import { Celda } from './Celda'

import { asignarBomba } from './asignarBomba'
import { asignarNumBomba } from './asignarNumBomba'




export const Project_Buscaminas = () => {

    const [EstadoJuego, setEstadoJuego] = useState('jugando')

    const aparecioBomba = (a) => {
        if (a === '💣') {
            setEstadoJuego('perdio')
        }
    }

    const [cuadricula, setcuadricula] = useState([
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],


    ]);

    // aquí asignamos el valor de la bomba
    asignarBomba(cuadricula);
    let cuadriculaFinal = asignarNumBomba(cuadricula)
    console.log(cuadriculaFinal);



    return (
        <>

            <div className='tablero'>
                {cuadricula.map((fila, i) =>
                    fila.map((celda, j) => (
                        <Celda key={'' + i + j} celda={celda} func={aparecioBomba} EstadoJuego={EstadoJuego} />
                    )))}
            </div>
        </>
    )
}





