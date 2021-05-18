import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Compra from './Compra';
import FormCompra from './FormCompra';
var acum;
const ComprasList = () => {
    const [compras, setCompras] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchCompras = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API);

                return response.json();
            } catch (err) {
                console.log(err);
            }
        }
        fetchCompras().then(res => setCompras(res.data));
    }, []);

   
    return (
        <>
            
                {compras.map((compra, idx) => {


                    return (
                            <div className="grid-item">
                                <h4 className="subtitulo">{`${compra.empresa}`}</h4>
                                <h5 className="subtitulo">{`$ ${compra.monto} MXN`}</h5>
                                <h5 className="subtitulo">{`Concepto: ${compra.concepto}`}</h5>
                                <h5 className="subtitulo">{`Realizada el ${compra.fechaCreacion}`.slice(0,24)}</h5>
                                <h6 className="subtitulo">{`Departamento: ${compra.departamento}`}</h6>
                               
                            </div>
                    );
                })}
        </>
    )
}

export default ComprasList
