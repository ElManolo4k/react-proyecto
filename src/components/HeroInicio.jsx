import imagenHero from "../assets/ModoDiabloHero.jpg"

const HeroInicio = () => {
    return (
        <>
            <div className="px-4 py-4 my-5 text-center text-white">
                <img className="d-block mx-auto mb-4" src={imagenHero} />
                    <h1 className="display-5 fw-bold  text-white">Modo Diablo</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead">
                            Es una agrupacion de Trap Argentino, conformado por 3 de los mayores exponentes de la escena
                            Argentina, Duki, Ysy A y Neo Pistea, este grupo fue creado en 2018.
                        </p>
                        
                    </div>
            </div>
        </>
    )
}

export default HeroInicio;