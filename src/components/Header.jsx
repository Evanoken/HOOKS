import { Link } from "react-router-dom"
import { FaHome, FaInfoCircle, FaComments } from "react-icons/fa"
import './Header.css'
function Header() {
    return (
        <div >
            <div className="head">
                <Link to='/' className="navLink" ><FaHome />Home</Link>
                <Link to='pages/About' className="navLink"><FaInfoCircle /> About</Link>
                <Link to='pages/Contact' className="navLink" ><FaComments /> Contact</Link>
            </div>
            <hr />
        </div>
    )
}
export default Header