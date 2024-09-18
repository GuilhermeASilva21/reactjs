import NavBar from "../components/NavBar"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Home() {
    const {usuarioLogado,usuarios, setUsuarios} = useContext(GlobalContext)

 function inventarUsuario(){
    let usuarioNovo = {
        id: Date.now(),
        nome: "capitao",
        email: "capitao@1234.com"
    }
    setUsuarios([...usuarios, usuarioNovo ])
 }
 

  return (
    <div>
        <NavBar/>
      <h1>Pagina home do site</h1>
      <p>ola {usuarioLogado}</p>
      <div>
        {
            usuarios.map((usuario) => (
                <div key={usuario.id}>
                    <p>Nome:{usuario.nome}</p>    
                    <p>email:{usuario.email}</p>    
                    <p>{usuario.id}</p>    
                </div>
             ))
        }
      </div>
      <button onClick={inventarUsuario}>create user</button>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi officia sed sit iure ab in corrupti consequuntur magni fugiat sint unde pariatur, dolores atque est, quam voluptate molestiae, dolor eius.</p>
    </div>
  )
}

export default Home
