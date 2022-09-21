import React from "react";
import './Card.css'

const GroceryCard = ({ id, item, quantity, description }) => {
    return(
        <div className="grocery-card">
            <h3>{item}</h3>
            <h4>qty: {quantity}</h4>
            {description ? <h5>Notes: {description}</h5> : <p></p>}
            <button>Remove Item</button>
        </div>
    )

}

export default GroceryCard