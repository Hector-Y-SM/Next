'use client'
import React, { useState } from "react";
import '../../css/Page.css';
//!Analizar de identificadores

function Page() {
  const [texto, setTexto] = useState('');
  const [esPalabraValida, setEsPalabraValida] = useState(null);

  // Definir una matriz que se utilizará en el análisis léxico
  const matriz = [
    [1, 200, 200],
    [1, 1, 200]
  ];

  // Definir una función llamada analizar
  const analizar = () => {
    // Variables para el análisis léxico
    let c = texto.split(''); // Dividir la entrada en caracteres individuales
    let i = 0; // Contador de posición en la entrada
    let estado = 0; // Estado inicial
    let caracter = 0; // Categoría del caracter actual

    // Expresiones regulares para verificar letras y números/signos
    const letras = new RegExp('[a-zA-Z]'); // Iniciar con letra
    const numeroSigno = new RegExp('[0-9]'); // Iniciar con número

    // Bucle que recorre la entrada
    while (i < texto.length) {
      // Determinar la categoría del caracter actual
      if (letras.test(c[i])) {
        caracter = 0; // Caracter es una letra
      } else if (numeroSigno.test(c[i])) {
        caracter = 1; // Caracter es un número o signo
      } else {
        caracter = 2; // Otro tipo de caracter
      }

      // Actualizar el estado del analizador usando la matriz de transiciones
      estado = matriz[estado][caracter];

      // Verificar si se encontró una palabra inválida
      if (estado === 200) {
        setEsPalabraValida(false); // Establecer esPalabraValida en falso
        break; // Salir del bucle cuando se encuentra una palabra inválida
      }

      // Verificar si se encontró una palabra válida
      if (estado === 1) {
        setEsPalabraValida(true); // Establecer esPalabraValida en verdadero
      }

      i++; // Incrementar la posición en la iteración para procesar el siguiente caracter
    }
  };
  function limpiar(){
    setTexto('');
    setEsPalabraValida('');
  }

  // Renderizar la interfaz de usuario del componente
  return (
    <div className="div_contenedor">
      <div className="div_main">
        <div className="div_main_txt">
          <h1 className="txt_h1">DFA que analiza identificadores</h1>
          <input
            type="text"
            placeholder="Ej. Hola"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
          />
          <div className="div_limpiar">
            <button button className="btn_limpiar"
              onClick={limpiar}> 🧹
            </button>
          </div>
        </div>
        <div className="div_btn">
          <button onClick={analizar} className="btn_analizar">Analiza la entrada</button>
        </div>
        <div className="div_resultado">
          {/* Mostrar mensajes dependiendo de si la palabra es válida o no */}
          {esPalabraValida === true && <p>Palabra válida</p>}
          {esPalabraValida === false && <p>Palabra inválida</p>}
        </div>
      </div>
    </div>
  );
}

export default Page;
