import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
            <div>
                <img src={producto.imagen} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <h4>${producto.valor} ARS</h4>
                <p>Categoría: {producto.categoria}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
    )
}

export default Item;