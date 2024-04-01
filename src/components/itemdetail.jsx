import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
            <img src={item.imagen} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <h4>${item.valor} ARS</h4>
            <p>{item.descripcion}</p>
            <p>Categoría: {item.categoria}</p>
        </div>
    )
}

export default ItemDetail;