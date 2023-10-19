'use client'
import React, { useState } from "react";
import '../../css/Page.css'
import { analizar } from "@/app/funciones/analizar";


function Page(){
  const [ texto, setTexto] = useState('');
  const [ esValido, setEsValido]= useState(null);

    const matriz = [
      [1,   2, 0],
      [1,   3, 0],
      [4,   2, 0],
      [1,   3, 0],
      [4,   2, 0]
    ];

  const handleInputChange = (event) => {
    const nuevoTexto = event.target.value;
    setTexto(nuevoTexto);
  }

  const handleAnalyzeClick = () => {
    const result = analizar(texto, matriz, 0, 3, 4, 0, 0, 1, 2, 1, 1, 1);
    setEsValido(result);
  }

    return(
      <div className="div_contenedor">
      <div className="div_main">
        <div className="div_main_txt">
          <h1 className="txt_h1">DFA que valida cadenas que empiecen y terminen por el mismo simbolo</h1>
          <input
            type="text"
            placeholder="Ej. aa"
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