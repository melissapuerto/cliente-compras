import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Compra = props => (
    <tr>
        <td>{props.compra.id}</td>
        <td>{props.compra.empresa}</td>
        <td>{props.compra.concepto}</td>
        <td>{props.compra.departamento}</td>
        <td>{props.compra.monto}</td>
        <td>{props.compra.fechaCreacion}</td>
    </tr>
)

class Mostrar extends Component {

    constructor(props) {
        super(props);
        this.state = { compras: [] };
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_API)
            .then(response => {
                //console.log(this.state.todos);
                this.setState({ compras: response.data.data });
                //console.log(this.state.todos);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    comprasListClass() {
        return this.state.compras.map(function (currentCompra, i) {
            return <Compra key={i} compra={currentCompra}></Compra>;
        });
    }

    render() {
        return (
            <div className="container">
                <h2>La lista de las compras</h2>
                <div>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Empresa</th>
                                <th>Concepto</th>
                                <th>Departamento</th>
                                <th>Monto</th>
                                <th>Fecha</th></tr>
                        </thead>
                        <tbody>{this.comprasListClass()}</tbody>
                    </table>
                </div>
            </div>);
    }
}





export default Mostrar;