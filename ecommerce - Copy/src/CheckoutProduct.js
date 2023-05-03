import React from "react";
import './CheckoutProduct.css';

function CheckoutProduct(){
    return(
       <div className="checkoutProduct">
        <img src="" alt="" className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">Bennett</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>20</strong>
            </p>
            <div className="chekoutProduct__rating">
            ⭐⭐⭐

            </div>
            <button>Remove from Basket</button>
        </div>

       </div>
    )
}

export default CheckoutProduct