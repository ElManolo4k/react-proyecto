import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSumit = (e) => {
        e.preventDefault();
        console.log("Email", email);
        console.log("Contraseña", password);

        const userData = {
            email: email,
            contrasena: password,
        };
        
        fetch("https://private-47d6d0-loginproyecto.apiary-mock.com/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData),
        })
        .then((response)=>{
            if(response.status=== 200){
                return Response.json();
            }else if(response.status ===401){
                return response.json;
            }else{
                throw new Error("Error Desconocido");
            }
        })
        .then((data)=>{
            if(data.mensaje=="Inicio de sesión exitoso"){
                if(
                    userData.email=="diego@santoto.edu.co" && userData.contrasena==="123456"
                ){
                    console.log("Inicio de sesion exitoso");
                }else{
                    console.log("Inicio de Secion Fallido: Datos Incorrectos");
                }
            }else if(data.mensaje=="Inicio de sesión fallido"){
                console.log("Inicio de Sesion Fallido");
            }else{
                console.log("Respuesta inesperada de la API");
            }
        })
        .catch((error)=>{
            console.log("Hubo un error en la solicitud"+{error});
        })

    }
    return (
        <>
            <div className="container col-xl-10 col-xxl-8 px-4 py-5 text-white">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Registrarse</h1>
                        <p className="col-lg-10 fs-4">Registrate para tener las ultimas noticias de Modo Diablo :D</p>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5 bg-slate-800 rounded-3">
                        <form onSubmit={handleSumit} className="p-4 p-md-5  rounded-3 bg-slate-800 ">
                            <div className="form-floating mb-3 bg-slate-800 ">
                                <input 
                                type="email"
                                id="email"
                                value={email} onChange={(e) => setEmail(e.target.value)} 
                                className="form-control bg-slate-800 text-white"  required placeholder="name@example.com"/>
                                    <label for="floatingInput">Correo Electronico</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                type="password" 
                                id="password" 
                                value={password} onChange={(e)=>{setPassword(e.target.value)}}
                                className="form-control bg-slate-800 text-white" 
                                required placeholder="Password"/>
                                    <label for="floatingPassword">Contraseña</label>
                            </div>
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me"/> Recordar Contraseña
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
                            <hr className="my-4"/>
                                <small className="">Al hacer click en Registrarse acepta los terminos y condiciones.</small>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login