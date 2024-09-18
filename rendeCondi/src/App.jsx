import { useState } from 'react'
import './App.css'
import UsuarioLogado from './components/UsuarioLogado'
import AreaPraAdultos from './components/AreaPraAdultos'
import EfetueLogin from './components/EfetueLogin'

function App() {
  const [usuario, setUsuario] = useState(false)
  const [idade, setIdade] = useState(0)
  return (
    <>
    <div className="renderContainer">
        { usuario && <UsuarioLogado /> }
        <button onClick={ ()  => setUsuario(true)}>Entrar</button>
        <button onClick={ ()  => setUsuario(false)}>Sair</button>
    </div>
     
    <div className="renderContainer">

        <button onClick ={ () => setIdade(idade - 1)}>-</button>
          {idade}
        <button onClick ={ () => setIdade(idade + 1)}>+</button>
          { idade>= 18 && <AreaPraAdultos/>}
    </div>

    <div className="renderContainer">
    { usuario ?  <UsuarioLogado />  : <EfetueLogin/>}

    </div>
    </>
  )
}

export default App
