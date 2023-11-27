import React from 'react'

const AlbumsNeo = () => {
    return (
        <div className="container px-4 py-5 " id="custom-cards">
            <h2 className="pt-8 border-top text-center text-white text-2xl">Sus Albumes</h2>

            <div className="row row-cols-1 row-cols-lg-3 justify-center g-4 py-5">
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bg-[url('./assets/Punkdemia.jpg')] bg-contain">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white translate-y-11">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold translate-y-28 ">Punkdemia</h3>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bg-[url('./assets/Neo.jpg')] bg-contain" >
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-blue-700 text-shadow-1  translate-y-11">
                            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold translate-y-28">.</h3> <br /> <br /> <br /> <br /> <br />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumsNeo