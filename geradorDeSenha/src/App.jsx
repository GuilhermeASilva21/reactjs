
import React, { useState } from "react";
import Header from "./componentes/Header/Header";
import Body from "./componentes/Body/Body";     
import "./App.css";


function App() {
  const [filaNormal, setFilaNormal] = useState([]);
  const [filaPreferencial, setFilaPreferencial] = useState([]);
  const [senhaAtual, setSenhaAtual] = useState(null);

  const gerarSenha = (tipo) => {
    const numero = tipo === 'Normal' ? filaNormal.length + 1 : filaPreferencial.length + 1;
    const novaSenha = { tipo, numero };
    if (tipo === 'Normal') {
      setFilaNormal([...filaNormal, novaSenha]);
    } else {
      setFilaPreferencial([...filaPreferencial, novaSenha]);
    }
  };

  const chamarProximaSenha = () => {
    if (filaPreferencial.length > 0) {
      const proxima = filaPreferencial[0];
      setSenhaAtual(proxima);
      setFilaPreferencial(filaPreferencial.slice(1));
    } else if (filaNormal.length > 0) {
      const proxima = filaNormal[0];
      setSenhaAtual(proxima);
      setFilaNormal(filaNormal.slice(1));
    } else {
      alert('A fila está vazia!');
    }
  };

  return (
    <div className="App">
      <Header />
      <Body 
        gerarSenha={gerarSenha} 
        chamarProximaSenha={chamarProximaSenha} 
        senhaAtual={senhaAtual}
        filaVazia={filaNormal.length === 0 && filaPreferencial.length === 0}
      />
    </div>
  );
}

export default App;
