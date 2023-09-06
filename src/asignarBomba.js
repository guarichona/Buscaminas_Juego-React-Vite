
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const asignarBomba = (cuadricula) => {
    const bombas = 10;

    for (let i = 0; i < bombas; i++) {
        let x = getRandomInt(0, cuadricula[0].length - 1)
        let y = getRandomInt(0, cuadricula.length - 1)
        /// aqui asigno la bomba
        cuadricula[y][x] = '💣'
    }
    // aqui actualizo el estado (guardo el cambio)
    return cuadricula;
}
