import AlbumsYsy from "../components/AlbumsYsy";
import CardsYsy from "../components/CardsYsy";
import Comentarios from "../components/Comentarios";
import Footer from "../components/Footer";
import HeroYsy from "../components/HeroYsy";

const Ysy = () => {
    return (
        <>
            <HeroYsy />
            <AlbumsYsy />
            <p className="font-sans text-white text-center text-2xl translate-x-10 pb-8">
                Sus canciones mas populares son:
            </p>
            <CardsYsy/>
            <div className="px-16">
                <div className="px-16">
                    <Comentarios/>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Ysy;