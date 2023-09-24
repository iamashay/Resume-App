import logo from '../assets/logo.png'
import '../styles/Header.css'
function Header() {
    return (
        <header>
            <div id="logo"><img src={logo}></img></div>
        </header>
    )
}

export default Header