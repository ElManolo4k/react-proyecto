import React from 'react'

const AlbumsYsy = () => {
    return (
        <div className="container px-4 py-5" id="custom-cards">
            <h2 className="pt-8 border-top text-center text-white text-2xl">Mejores Albumes</h2>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bg-[url('./assets/Ysysmo.jpg')] bg-contain" >
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white transy">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold translate-y-36 ">Ysysmo</h3>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bg-[url('./assets/HechoAMano.jpg')] bg-contain" >
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 ">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold -translate-y-20">Hecho a <br />Mano</h3> <br /> <br /> <br /> <br /> <br />

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bg-[url('./assets/Antezana.jpg')] bg-contain">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold translate-y-36">Antezana</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumsYsy