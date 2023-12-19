
const cuadros = document.querySelectorAll('.cuadro');
const Resultado = document.getElementById('Resultado');

const puntajeX = document.getElementById('puntajeX');
const puntajeO = document.getElementById('puntajeO');

console.log(cuadros);
var turno = "X";
var jugadas = 0;
var tablero = [];
var puntoX = 0;
var puntoO = 0;

const siguiente = document.getElementById('siguiente');
siguiente.addEventListener('click',funcionsiguiente())
for (var i = 0; i < cuadros.length; i++) {
    
    cuadros[i].addEventListener('click',crearManejador(i));
    
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
        }else{
            return;
        }

       
        if( verificarGanador(tablero) != null){
            Resultado.innerHTML = `Ha ganado el equipo: ${verificarGanador(tablero)}`;
            for (var i = 0; i < cuadros.length; i++) {
                
                cuadros[i].removeEventListener('click', crearManejador(i));
                
                
            }
            
            if(verificarGanador(tablero) == "X"){
                puntoX++;
                puntajeX.innerHTML=puntoX;
            }else{
                puntoO++;
                puntajeO.innerHTML=puntoO;
            }
            tablero = [];
            siguiente.classList.add('mostrar');
        }else if( jugadas > 8 ){
            Resultado.innerHTML = "Empate";
            tablero = []
            siguiente.classList.add('mostrar');
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
        return `${tablero[a]}`;
        
      }
    }
    return null;
    
  }
  
  function funcionsiguiente(){
return function(){
    for (var i = 0; i < cuadros.length; i++) {
        cuadros[i].textContent  = "";
        jugadas = 0;
        siguiente.classList.remove('mostrar');
        Resultado.innerHTML = "";
    }
}
  }