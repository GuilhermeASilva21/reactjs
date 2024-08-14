
import { useState } from 'react';
import './App.css'

function App() {

  
  const[contador,setContador] = useState(0)

  let cont = 0;


  function CliqueAqui(){
    cont++;
    console.log(cont);
  }

  function incrementarContador (){
    setContador(contador + 1)
    console.log(contador);

  } 

  return (
    <>
      <h1>titulo</h1>
      <button onClick={CliqueAqui}>Clique</button>
      <div>
        {cont}  
      </div>
      <div>
        <button onClick={incrementarContador}>inc useState</button>
      </div>
      <div>
        {contador}
      </div>
    </>
  )
}

export default App
