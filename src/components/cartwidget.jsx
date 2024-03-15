const CartWidget = () => {
    const cartItemCount = 0;

    return (
        <div className="cart-widget">
            <img src="../images/carritodecompra.png" id="imagencarrito"/>
            <span className="badge">{cartItemCount}</span>
        </div>
    );
}

export default CartWidget;