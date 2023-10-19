'use client'
import React, { useState } from "react";
import '../../css/Page.css'
import { analizar } from "@/app/funciones/analizar.js";

function Page(){
    const [ texto, setTexto ] = useState('');
    const [ esValido, setEsValido ] = useState(null);

    const matriz = [
      [1, 0, 5],
      [3, 2, 5],
      [4, 2, 5],
      [3, 2, 5],
      [3, 2, 5]
    ]
    const handleInputChange = (event) => {
      const nuevoTexto = event.target.value;
      setTexto(nuevoTexto);
    }
  
    const handleAnalyzeClick = () => {
      const result = analizar(texto, matriz, 1, 3, 4, 1, 1, 0, 2, 0, 0, 0);
      setEsValido(result);
    }

    return(
      <div className="div_contenedor">
      <div className="div_main">
        <div className="div_main_txt">
          <h1 className="txt_h1">DFA que valida cadenas que sean finalizadas por la letra 'b'</h1>
          <input
            type="text"
            placeholder="Ej. abb"
            value={texto}
            onChange={handleInputChange}
          />
        </div>
        <div className="div_btn">
          <button onClick={handleAnalyzeClick} className="btn_analizar">Analiza la entrada</button>
        </div>
        <div className="div_resultado">
          {esValido === true && <p>Palabra válida</p>}
          {esValido === false && <p>Palabra inválida</p>}
        </div>
      </div>
    </div>
    );
}

export default Page;