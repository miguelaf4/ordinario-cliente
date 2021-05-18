import React, { useEffect, useState } from 'react';
import './Tabla.css';
import Orden from './Orden';
import FormOrden from './FormOrden';

const OrdenListHook = () => {
    const [ordenes, setOrdenes] = useState([]);
    const [showForm, setShowForm] = useState(false);
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

    const deleteOrden = async (idx) => {
        try {
            await fetch(`${process.env.REACT_APP_API}/${ordenes[idx].id}`, {
                method: 'DELETE'
            });
            setOrdenes(ordenes.filter((val, i) => i !== idx));
        } catch (err) {
            console.log(err);
        }

    }

    const createOrden = (data) => {
        try {
            let nuevoId = 1;
            if(ordenes.length > 0) {
                nuevoId = ordenes.reduce((acc, curr) => parseInt(acc.id) > parseInt(curr.id) ? acc : curr);
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
                setOrdenes([...ordenes, dataResponse.data]);
                setShowForm(false);
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="crear-container">
            <h1 className="text-center">Lista de Ordenes</h1>
            <button className="btn" onClick={() => setShowForm(!showForm)}>{showForm ? "Cerrar" : "Nueva orden"}</button> <br/>
            {showForm && <FormOrden onClickFn={createOrden} btnTxt={"Añadir Orden"}></FormOrden>}
            <div className="grid-container">
                {ordenes.map((orden, idx) => {
                    return (
                        <Orden key={idx} orden={orden} onClickFn={deleteOrden} idx={idx} btnTxt={"Eliminar"} />
                    );
                })}
            </div>
        </div>
            
    )
}

export default OrdenListHook
