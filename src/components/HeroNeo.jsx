import ImagenHero from "../assets/NeoHero.jpg"

const HeroNeo = () => {
    return (
        <div className="container col-xxl-8 px-4 py-5 text-white">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Neo Pistea</h1>
                    <p className="lead">Neo Pistea es un rapero y compositor argentino Desde joven se interesó por la cultura del hip hop y el grafiti, y aprendió a rapear con artistas underground como CNO y Obie Wan Shot. Grabó sus primeros temas con una netbook del programa Conectar Igualdad, y se hizo conocido en el ambiente del freestyle. En 2015, lanzó sus primeras canciones como solista, como “White Chocolate”, “Tony The Kid” y “Black Chocolate”."</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"><a href="https://open.spotify.com/intl-es/artist/01m2XZ7m7rAz6KY3scTdaV?si=NhNiSZIITHaluwrXaHlMdw" target="_blank">Perfil en Spotify</a></button>

                    </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={ImagenHero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default HeroNeo