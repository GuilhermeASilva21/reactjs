import { useState } from 'react'

import './App.css'
import Viagens from './pages/Viagens'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'

function App() {
  const [pagina, setPagina] = useState(<Home />)

  return (
    <>
    <nav>
      <button onClick={ () => setPagina(<Home/> )}>landing</button>
      <button onClick={ () => setPagina(<Viagens/> )}>horarios/calendario</button>
      <button onClick={ () => setPagina(<Portfolio/> )}>perfil</button>
    </nav>
      {pagina }
    </>
  )
}

export default App
