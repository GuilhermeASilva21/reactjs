import { Link } from "react-router-dom"
import './NavBar.css'
function NavBar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generico">Generico</Link>
        <Link to="/final">Final</Link>

    </nav>
  )
}

export default NavBar
