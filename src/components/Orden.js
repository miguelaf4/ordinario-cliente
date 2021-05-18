import React from 'react'


const Orden = ({ orden, onClickFn, idx, btnTxt }) => {
    const clickOrden = () => {
        onClickFn(idx);
    }
    return (
        <div className="grid-item">
            <h5 className="titulo">{orden.nombre}</h5>
            <h5 className="subtitulo">{`Cantidad: ${orden.cantidad}`}</h5>
            <h5 className="subtitulo">{`Precio: ${orden.precio}`}</h5>
            <h5 className="subtitulo">{`Cliente: ${orden.cliente}`}</h5>
            <h5 className="subtitulo">{`IVA: ${orden.iva}`}</h5>
            <button onClick={clickOrden} className="btn">{btnTxt}</button>
        </div>
    )
}

export default Orden