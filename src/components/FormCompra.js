import React, { useState } from 'react'

const FormCompra = ({ onClickFn, btnTxt, initData }) => {
    const [empresa, setEmpresa] = useState(initData ? initData.empresa : "");
    const [concepto, setConcepto] = useState(initData ? initData.concepto : "");
    const [departamento, setDepartamento] = useState(initData ? initData.departamento : "");
    const [monto, setMonto] = useState(initData ? initData.monto : "");
    const onSubmit = (e) => {
        e.preventDefault();
        if (empresa === "" || concepto === "" || departamento === "" || monto === "") alert("No puede dejar ningun campo vacio");
        else {
            let data = { empresa: empresa, concepto: concepto, departamento: departamento, monto: monto }
            onClickFn(data);
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="formQ">
                    <label >Empresa </label>
                    <input type="text" value={empresa} onChange={(txt) => setEmpresa(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Concepto: </label>
                    <input type="text" value={concepto} onChange={(txt) => setConcepto(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Departamento: </label>
                    <input type="text" value={departamento} onChange={(txt) => setDepartamento(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Monto: </label>
                    <input type="number" value={monto} onChange={(txt) => setMonto(txt.target.value)} />
                </div>
                <input className="input-btn" type="submit" value={btnTxt} />
            </form>
        </div>
    )
}

export default FormCompra
