import React from "react";
import './Card.css'

const GroceryCard = ({ id, item, quantity, description, deleteItem }) => {
    return(
        <div className="card">
            <div className="item-name-container">
                <h5>{item}</h5>
            </div>
            <div className="link-or-qty-container">
                <h4>QTY: <br/> <br/>{quantity}</h4>
            </div>
            <div className="notes-container">
                {description ? <h5 className="notes">Notes: <br/><br/>{description}</h5> : <h5 className="notes">Notes: <br/> <br/> N/A </h5>}
            </div>
            <div className="delete-btn-container">
                <button onClick={() => deleteItem(id)}>🗑</button>
            </div>
        </div>
    )

}

export default GroceryCard