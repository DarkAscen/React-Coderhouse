import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <div className="row">
                <div className="col">
                    <h2>{greeting}</h2>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;