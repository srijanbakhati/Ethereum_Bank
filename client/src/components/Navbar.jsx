
import Logo from "../assets/ethereum.png"

function Navbar(){
    return(
        <nav className="navbar">
        <div className="nav-heading">
            <img className="logo" 
            src={Logo} alt="Invalid" />
            <h3>Ethereum Bank</h3>
        </div>
    </nav>
    )

}
export default Navbar;