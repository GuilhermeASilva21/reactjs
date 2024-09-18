import { createContext } from "react";
import { useState } from "react";
export const GlobalContext = createContext()

export const GlobalContextProvider =({children}) =>{
let usuarioLogado = 'Gill Bates'
const [usuarios,setUsuarios ] = useState([
    {
        id: Date.now(),
        nome:"et bilu",
        email: "fulano@gmail.com"
    },
    {
        id: Date.now()+1,
        nome:"mano juca",
        email: "manojuca@hotmail.com"
    },
    {
        id: Date.now()+2,
        nome:"jorge",
        email: "detonadorxxt@hotmail.com"
    },
])

    return (
        <GlobalContext.Provider value={{usuarioLogado, usuarios, setUsuarios}}>
            {children}
        </GlobalContext.Provider>
    )

}

