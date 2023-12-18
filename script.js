
const cuadros = document.querySelectorAll('.cuadro');
const Resultado = document.getElementById('Resultado');
console.log(cuadros);
var turno = "X";
var jugadas = 0;
var tablero = [];

for (var i = 0; i < cuadros.length; i++) {
    cuadros[i].addEventListener('click',crearManejador(i));
    cuadros[i].removeEventListener('click',crearManejador(i));
}

function crearManejador(indice) {
    return function() {
        if(cuadros[indice].textContent  === ""){
            if(turno == "X"){
                cuadros[indice].textContent = "X";
                
                tablero[indice] = "X"
                turno = "O";
                jugadas++;
               
            }else if(turno == "O"){
                cuadros[indice].textContent = "O";
                
                turno = "X";
                tablero[indice] = "O"
                jugadas++;   
            }
        }

        console.log(tablero);
       
        if( verificarGanador(tablero) != null){
            Resultado.innerHTML = verificarGanador(tablero);
        }else if( jugadas > 8 ){
            Resultado.innerHTML = "Empate";
        }
    }
}

function verificarGanador(tablero) {
    const lineasGanadoras = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
      [0, 4, 8], [2, 4, 6]             // Diagonales
    ];
  
    for (let i = 0; i < lineasGanadoras.length; i++) {
      const [a, b, c] = lineasGanadoras[i];
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        return `Ha ganado el equipo  ${tablero[a]}`;
      }
    }
    return null;
    
  }
  