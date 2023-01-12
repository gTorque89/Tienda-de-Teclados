import React from "react";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary position-relative fondoNegro">
                <img src="images/icon/basket.svg" alt="cesta" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                </span>
            </button>
        </div>
    )
}

export default CartWidget;