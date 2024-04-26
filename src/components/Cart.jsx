import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {

    const {carrito, precioTotal, quitarDelCarrito, vaciarCarrito} = useContext(CartContext);

    return(
        <div className='container'>
            <h1>Carrito</h1>

            {carrito.length > 0 ?
                carrito.map((item) => (
                    <div key={item.id}>
                        <img src={item.imagen} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>${item.valor * item.cantidad} (${item.valor} c/u)</p>
                        <button onClick={()=> quitarDelCarrito(item.id)} className="quitarDelCarrito">Quitar del carrito</button>
                    </div>
                ))
            :   <div>
                    <h2 className="carritoVacio">El carrito se encuentra vacio.</h2>
                </div>}
        <h2>TOTAL CARRITO: ${precioTotal()}</h2>
        <button className="comprarCarrito" onClick={()=> vaciarCarrito()}>CONFIRMAR COMPRA</button>
        </div>
)}

export default Cart;
