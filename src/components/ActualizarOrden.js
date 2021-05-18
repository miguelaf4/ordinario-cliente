import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Orden from './Orden';
import FormOrden from './FormOrden';

const ActualizarOrden = () => {
    const [ordenes, setOrdenes] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({});
    const [idAEditar, setIdAEditar] = useState("-1");
    useEffect(() => {
        const fetchOrdenes = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API);
                return response.json();
            } catch (err) {
                console.log(err);
            }
        }
        fetchOrdenes().then(res => setOrdenes(res.data));
    }, []);

    const openEditForm = (idx) => {
        setShowForm(false);
        setIdAEditar(ordenes[idx]._id);
        setFormData({
            nombre: ordenes[idx].nombre, cantidad: ordenes[idx].cantidad,
            precio: ordenes[idx].precio,  cliente: ordenes[idx].cliente, iva: ordenes[idx].iva
        });
        setShowForm(true);
    }

    const updateOrdenes = (data) => {
        fetch(`${process.env.REACT_APP_API}/${idAEditar}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json()).then(dataResponse => {
            setOrdenes(ordenes.map(orden => orden.id === dataResponse.data.id ? dataResponse.data : orden));
            setShowForm(false);
        });
    }
    return (
        <div className="update-container">
            <h1 className="text-center">Actualizar ordenes</h1>
            {showForm && <div onBlur={() => console.log("h")}>
                <button className="new-btn" onClick={() => setShowForm(false)}>Cerrar</button>
                <FormOrden initData={formData} onClickFn={updateOrdenes} btnTxt={"Actualizar Orden"}></FormOrden>
            </div>}
            <div className="grid-container">
                {ordenes.map((orden, idx) => {
                    return (
                        <Orden key={idx} orden={orden} onClickFn={openEditForm} idx={idx} btnTxt={"Editar"} />
                    );
                })}
            </div>
        </div>
    )
}

export default ActualizarOrden
