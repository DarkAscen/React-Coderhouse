import React, { useEffect, useState } from 'react'
import ItemDetail from './itemdetail';
import { useParams } from 'react-router-dom';
import data from "../data/productos.json"

const ItemDetailContainer = ()=> {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    const pedirItemPorId = (id) => {
        return new Promise((resolve, reject) => {
            const item = data.find((el) => el.id === id);

            if (item) {
                resolve(item);
            } else {
                reject ({
                    error: "No se encontro el producto"
                })
            }
        })
    }

    useEffect (() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer