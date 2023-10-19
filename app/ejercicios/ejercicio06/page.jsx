'use client'
import React, { useState } from "react";
import '../../css/Page.css'
import { analizar2 } from "@/app/funciones/analizar2.js";

function Page(){
    const [ texto, setTexto ] = useState('');
    const [ esValido, setEsValido ] = useState(null);

    const matriz = [
      [1, 2, 3],
      [1, 2, 3],
      [0, 2, 3]
    ]
    const handleInputChange = (event) => {
      const nuevoTexto = event.target.value;
      setTexto(nuevoTexto);
    }
  
    const handleAnalyzeClick = () => {
      const result = analizar2(texto, matriz, 0, 1, 0, 0, 0, 2, 2, 2, 2, 2);
      setEsValido(result);
    }

    return(
      <div className="div_contenedor">
      <div className="div_main">
        <div className="div_main_txt">
          <h1 className="txt_h1">DFA que valida conjuntos de cadenas que terminan en '0'</h1>
          <input
            type="text"
            placeholder="Ej. 00"
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