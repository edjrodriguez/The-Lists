import React from "react"
import PropTypes from 'prop-types'
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
                <button className="delete-btn" onClick={() => deleteItem(id)}>🗑</button>
            </div>
        </div>
    )

}

export default GroceryCard

GroceryCard.propTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired
}

