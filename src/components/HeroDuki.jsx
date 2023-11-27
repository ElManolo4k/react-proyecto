import ImagenHero from "../assets/DukiHero.jpg"

const HeroDuki = () => {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5 text-white">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={ImagenHero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold  lh-1 mb-3">Duki</h1>
                        <p className="lead">Duki es un rapero y compositor argentino que se hizo famoso por sus participaciones en las batallas de freestyle, especialmente en El Quinto Escalón, donde fue campeón en 2016, donde gano sacar su primer sencillo "No Vendo Trap"</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2"><a href="https://open.spotify.com/intl-es/artist/1bAftSH8umNcGZ0uyV7LMg?si=-mB35nQpTMagrZqVsOgDdg" target="_blank">Perfil en Spotify</a></button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroDuki