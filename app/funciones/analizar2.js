//!Solo usar con las que tengan lenguaje 0,1

export function analizar2(texto, matriz, e1,e2,e3,e4,e5,a1,a2,a3,a4,a5) {
    let txt = texto.split('');
    let i = 0; // Contador de posición en la entrada
    let estado = 0; // Estado inicial
    let caracter = 0; // Categoría del caracter actual
    let esValido = null;
  
    while (i < texto.length) {
      const indexCaracter = txt[i]; // Determinar la categoría del caracter actual
      const a = /1/;
      const b = /0/;
      if(indexCaracter == '0' || indexCaracter == '1'){
        // Determinar la categoría del caracter actual
        if (a.test(txt[i])) {
          caracter = 0; // Caracter es una letra
        } else if (b.test(txt[i])) {
          caracter = 1; // Caracter es un número o signo
        } else {
          caracter = 2; // Otro tipo de caracter
        }
      }else {
        esValido = false;
        break; // Salir del bucle
      }
      // Actualizar el estado del analizador usando la matriz de transiciones
      estado = matriz[estado][caracter];
      if (estado === e1 || estado === e2 || estado === e3 || estado === e4 || estado === e5) {
        esValido = false;
        // console.log('No aceptable');
        // console.log('Estado: ' +estado);
      }
      if (estado === a1 || estado === a2 || estado === a3 || estado === a4 || estado === a5) {
        esValido = true;
        //console.log('Aceptado');
        //console.log('Estado: ' +estado);
      }
  
      i++; // Incrementar la posición en la iteración para procesar el siguiente caracter
    }
  
    return esValido;
  }