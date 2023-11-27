import AlbumsNeo from "../components/AlbumsNeo";
import CardsNeo from "../components/CardsNeo";
import Comentarios from "../components/Comentarios";
import Footer from "../components/Footer";
import HeroNeo from "../components/HeroNeo";

const Neo = () => {
    return (
        <>
            <HeroNeo />
            <AlbumsNeo/>
            <p className="font-sans text-white text-center text-2xl translate-x-10 pb-8">
                Sus canciones mas populares son:
            </p>
            <CardsNeo/>
            <div className="px-16">
                <div className="px-16">
                    <Comentarios />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Neo;