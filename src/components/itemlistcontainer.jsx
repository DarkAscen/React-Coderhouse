import React from "react";
import data from "../data/productos.json"
import { useState, useEffect } from "react";
import ItemList from "./itemlist.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("PRODUCTOS");
    const categoria = useParams().categoria;

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
            reject("")
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("PRODUCTOS")
                }
            })
    }, [categoria])

    return (
        <div className="item-list-container">
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    );
}

export default ItemListContainer;