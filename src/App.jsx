import Inicio from "./Pages/Inicio"
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom"
import Duki from "./Pages/Duki"
import Neo from "./Pages/Neo"
import Ysy from "./Pages/Ysy";
import Formulario from "./Pages/Formulario";


const App = () => {
  return (
    <div className="bg-gray-950">
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/duki" element={<Duki/>}></Route>
        <Route path="/neo" element={<Neo/>}></Route>
        <Route path="/ysy" element={<Ysy/>}></Route>
        <Route path="/form" element={<Formulario/>}></Route>

      </Routes>
      
    </div>
  )
}

export default App;