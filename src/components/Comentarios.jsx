

const Comentarios = () => {
    return (
        <>
            <p className="font-sans text-white text-center text-2xl translate-x-10">
                Comentarios :D
            </p>
            <br />
            <br />
            <div className="translate-x-12">
                <p className="font-sans text-white text-justify text-xl">Añade tu Comentario</p>
                <form >
                <textarea className="form-control bg-slate-800 border-none text-white" id="exampleFormControlTextarea1" rows="3" style={{}} required></textarea>
                <button type="submit" className="btn btn-primary mb-3 translate-y-4 bg-slate-800 border-slate-800" >Subir Comentario</button>
                </form>
            </div>
        </>
    )
}

export default Comentarios