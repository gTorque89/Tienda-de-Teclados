import React from "react";

const Item = ({item}) => {

    return (
        <div className="card border border-0 text-center">
            <img src={item.imagen} className="card-img-top" alt={item.titulo} />
            <div className="card-body">
                <h5 className="card-title">{item.titulo}</h5>
                
                <a href="/" className="btn btn-primary">Detalle</a>
            </div>
        </div>
    )
}

export default Item;