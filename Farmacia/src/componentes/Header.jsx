import './Header.css'
import Logo from './Logo/Logo'

function Header() {
  return (
    <div className="header-container">
        <div className='logo'>
            <Logo/>
        </div>
        <div className='titulo'>
            <h1>Farmarcia</h1>
        </div>
    </div>
  )
}

export default Header