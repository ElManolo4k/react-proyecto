import Footer from "../components/Footer";
import HeroDuki from "../components/HeroDuki";
import AlbumsDuki from "../components/AlbumsDuki";
import CardsDuki from "../components/CardsDuki";
import Comentarios from "../components/Comentarios"



const Duki = () => {
    return (
        <>
            <HeroDuki />
            <AlbumsDuki />
            <p className="font-sans text-white text-center text-2xl translate-x-10 pb-8">
                Sus canciones mas populares son:
            </p>
            <CardsDuki/>

            <div className="px-16">
                <div className="px-16">
                    <Comentarios/>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Duki;