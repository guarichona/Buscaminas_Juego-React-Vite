

export function asignarNumBomba(cuadricula) {

    cuadricula.map((fila, iIndex) =>
        fila.map((celda, jIndex) => {
            // 1ero. Recorres el array con .map .map
            let _cuadricula = cuadricula
            if (celda === null) {
                // 2do. Si la casilla está vacía, contar las minas cercanas
                let minesCount = 0;
                // 3er. Recorro las celdas adyacentes, a travéz del index
                for (let i = iIndex - 1; i <= iIndex + 1; i++) {
                    for (let j = jIndex - 1; j <= jIndex + 1; j++) {
                        if (i >= 0 && i < cuadricula.length && j >= 0 && j < fila.length) {
                            if (cuadricula[i][j] === '💣') {
                                minesCount++;
                            }
                        }
                    }
                }
                _cuadricula[iIndex][jIndex] = minesCount;
                return _cuadricula;
            }

        })
    );
}





