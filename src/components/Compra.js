import React from 'react'


const Compra = ({ compra, onClickFn, idx, btnTxt }) => {
    const clickCompra = () => {
        onClickFn(idx);
    }
    return (
        <div className="grid-item">
            <h4 className="subtitulo">{`${compra.empresa}`}</h4>
            <h5 className="subtitulo">{`Concepto: ${compra.concepto}`}</h5>
            <h5 className="subtitulo">{`$ ${compra.monto} MXN`}</h5>
            <h5 className="subtitulo">{`${compra.fechaCreacion}`.slice(0,10)}</h5>
            <h6 className="subtitulo">{`Departamento: ${compra.departamento}`}</h6>

            <button onClick={clickCompra} className="btn">{btnTxt}</button>
        </div>
    )
}

export default Compra
