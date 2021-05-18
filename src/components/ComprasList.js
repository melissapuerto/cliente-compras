import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Compra from './Compra';
import FormCompra from './FormCompra';

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

    const deleteCompra = async (idx) => {
        try {
            await fetch(`${process.env.REACT_APP_API}/${compras[idx].id}`, {
                method: 'DELETE'
            });
            setCompras(compras.filter((val, i) => i !== idx));
        } catch (err) {
            console.log(err);
        }

    }

    const createCompra = (data) => {
        try {
            let nuevoId = 1
            if (compras.length > 0) {
                nuevoId = compras.reduce((acc, curr) => parseInt(acc.id) > parseInt(curr.id) ? acc : curr);
                nuevoId = (parseInt(nuevoId.id) + 1).toString();
            }
            data = { ...data, id: nuevoId };
            fetch(process.env.REACT_APP_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => response.json()).then(dataResponse => {
                setCompras([...compras, dataResponse.data]);
                setShowForm(false);
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
        <div>
<button className="new-btn" onClick={() => setShowForm(!showForm)}>{showForm ? "Cerrar" : 
             "Nueva compra"}</button> 
</div>
        <div className="row">

        <div className="col-sm-6">
                {compras.map((compra, idx) => {
                    return (
                        <Compra key={idx} compra={compra} onClickFn={deleteCompra} idx={idx} btnTxt={"Eliminar"} />
                    );
                })}
            </div>


 
            {showForm && <div className="col-sm-4 col-sm-offset-2 col-md-6 col-md-offset-0" onBlur={() => 
                console.log("h")}> <br></br><FormCompra onClickFn={createCompra} btnTxt={"Añadir Compra"}></FormCompra> 
           
            </div>}
            

            </div>
        </>
    )
}

export default ComprasList
