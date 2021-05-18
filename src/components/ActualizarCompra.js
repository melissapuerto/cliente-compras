import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Compra from './Compra';
import FormCompra from './FormCompra';

const ActualizarCompra = () => {
    const [compras, setCompras] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({});
    const [idAEditar, setIdAEditar] = useState("-1");
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

    const openEditForm = (idx) => {
        setIdAEditar(compras[idx]._id);
        setFormData({
            empresa: compras[idx].empresa, concepto: compras[idx].concepto, departamento: compras[idx].departamento,
            monto: compras[idx].monto
        });
        setShowForm(true);
    }

    const updateCompras = (data) => {
        fetch(`${process.env.REACT_APP_API}/${idAEditar}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(dataResponse => {
            setCompras(compras.map(compra => compra.id === dataResponse.data.id ? dataResponse.data : compra));
            setShowForm(false);
        });
    }
    return (
        <>
            <div className="row">

            <div className="col-sm-6">
                {compras.map((compra, idx) => {
                    return (
                        <Compra key={idx} compra={compra} onClickFn={openEditForm} idx={idx} btnTxt={"Editar"} />
                    );
                })}
            </div>
           
            {showForm && <div className="col-sm-4 col-sm-offset-2 col-md-6 col-md-offset-0" onBlur={() => console.log("h")}> <br></br>
                <button className="new-btn" onClick={() => setShowForm(false)}>Cerrar</button>
                <FormCompra initData={formData} onClickFn={updateCompras} btnTxt={"Actualizar Compra"}></FormCompra>
            </div>}
            </div>
        </>
    )
}

export default ActualizarCompra
