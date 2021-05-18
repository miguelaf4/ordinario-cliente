import React, { useState } from 'react'

const FormOrden = ({ onClickFn, btnTxt, initData }) => {
    const [nombre, setNombre] = useState(initData ? initData.nombre : "");
    const [cantidad, setCantidad] = useState(initData ? initData.cantidad : "");
    const [precio, setPrecio] = useState(initData ? initData.precio : "");
    const [cliente, setCliente] = useState(initData ? initData.cliente : "");
    const [iva, setIva] = useState(initData ? initData.iva : "");
    const onSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || cantidad === "" || precio === "" || cliente === "" || iva === "" ) alert("No puede dejar ningun campo vacio");
        else {
            let data = { nombre: nombre,  cantidad: cantidad, precio: precio, cliente: cliente, iva: iva}
            onClickFn(data);
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="formQ">
                    <label >Nombre: </label> <br/>
                    <input type="text" value={nombre} onChange={(txt) => setNombre(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Cantidad: </label> <br/>
                    <input type="number" value={cantidad} onChange={(txt) => setCantidad(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Precio: </label> <br/>
                    <input type="number" value={precio} onChange={(txt) => setPrecio(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >Cliente: </label> <br/>
                    <input type="text" value={cliente} onChange={(txt) => setCliente(txt.target.value)} />
                </div>
                <div className="formQ">
                    <label >IVA: </label> <br/>
                    <input type="number" value={iva} onChange={(txt) => setIva(txt.target.value)} />
                </div>
                <input className="input-btn" type="submit" value={btnTxt} />
            </form>
        </div>
    )
}

export default FormOrden