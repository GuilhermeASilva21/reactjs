import React from 'react';
import './Body.css';

function Body({ gerarSenha, chamarProximaSenha, senhaAtual, filaVazia }) {
  return (
    <div className="Body">
      <div className="botoes">
        <button onClick={() => gerarSenha('Normal')}>Gerar Senha Normal</button>
        <button onClick={() => gerarSenha('Preferencial')}>Gerar Senha Preferencial</button>
        <button onClick={chamarProximaSenha}>Chamar Próxima Senha</button>
      </div>
      <div className="display">
        {senhaAtual ? (
          <h2>
            Senha Atual: {senhaAtual.tipo} {senhaAtual.numero}
          </h2>
        ) : (
          <h2>Nenhuma senha chamada ainda</h2>
        )}
        {filaVazia && <p className="filaVazia">A fila está vazia!</p>}
      </div>
    </div>
  );
}

export default Body;
