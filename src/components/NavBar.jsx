import { NavLink } from "react-router-dom"
import Logo from "../assets/Escalon.svg"

const NavBar = () => {
    return (
        <>
            <div className="bg-gray-800">
                
                <ul className="nav nav-underline justify-around font-sans text-lg text-white">
                   <li className="position-absolute top-0 start-0 ">
                        <NavLink to="/"><img  src={Logo} width={"100px"}/></NavLink>
                    </li>
                    <li className="nav-item pt-8 py-8">
                        <NavLink className="nav-link "to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item pt-8 py-8">
                        <NavLink to="/duki" className="nav-link " >Duki</NavLink>
                    </li>
                    <li className="nav-item pt-8 py-8">
                        <NavLink to="/neo" className="nav-link" href="#">Neo Pistea</NavLink>
                    </li>
                    <li className="nav-item pt-8 py-8">
                        <NavLink to="/ysy" className="nav-link">Ysy A</NavLink>
                    </li>            
                    <li className="nav-item pt-8 py-8">
                        <NavLink to="/form" className="nav-link">Registrarse</NavLink>
                    </li>            
                </ul>
            </div >
        </>
    )
}

export default NavBar;