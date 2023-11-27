import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="container text-white translate-x-12">
        <footer className="py-3">
          <ul className="nav justify-around border-bottom pb-3 mb-3">
            <li className="nav-item"><NavLink to="/" className="nav-link px-2 ">Inicio</NavLink></li>
            <li className="nav-item"><NavLink to="/duki" className="nav-link px-2 ">Duki</NavLink></li>
            <li className="nav-item"><NavLink to="/neo" className="nav-link px-2 ">Neo Pistea</NavLink></li>
            <li className="nav-item"><NavLink to="/ysy" className="nav-link px-2 ">Ysy A</NavLink></li>
            <li className="nav-item"><NavLink to="/form" className="nav-link px-2 ">Registrarse</NavLink></li>
          </ul>
          <p className="text-center">© 2023 Manuel Galindo, Inc</p>
        </footer>
      </div>
    </>
  )
}

export default Footer