import CardsInicio from "../components/CardsInicio";
import Comentarios from "../components/Comentarios";
import Footer from "../components/Footer";
import HeroInicio from "../components/HeroInicio.Jsx";


const Inicio = () => {
    return (
        <div className="justify-center">
            <HeroInicio />
            <div className="container px-16">
                <div className="px-16">
                    <p className="font-sans text-white text-center text-xl translate-x-10">
                        El Quinto Escalon fue una competicion argentina que se llevaba a cabo en el Parque Rivadia de Buenos Aires, <br />
                        de esta competicion necieron muchos de los artistas grander de Argentina, como lo es Trueno, Lit Killah, etc. <br />
                        Duki y YSY A emergieron inicialmente en la escena del trap a través de El Quinto Escalón, donde destacaron <br />
                        con sus habilidades líricas antes de proyectar su talento a nivel internacional. Tras la disolución de El Quinto <br />
                        Escalón, se unieron a Neo Pistea un año después, dando origen a Modo Diablo, un súpergrupo que dejó una <br />
                        marca histórica en la escena del trap argentino. <br />
                        <br />
                        <br />
                        Todo inicio en 2018 cuando Duki lanzo <b>Quavo</b> junto con el nombre de Modo Diablo juanto a Ysy A y a Neo Pistea.
                        <br />
                        <br />
                        <iframe width="100%" height="600" src="https://www.youtube.com/embed/aB52h93Bax0?si=stDTsCqC1bCYUKNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <br />
                    </p>
                    <p className="font-sans text-white text-center text-2xl translate-x-10">
                        Sus canciones mas reconocidas son:
                    </p>
                    <br />
                        <CardsInicio/>
                    <br />
                    <Comentarios/>
                    <br />
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Inicio;