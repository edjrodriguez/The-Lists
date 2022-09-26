import React from "react"
import GroceryCard from "../ItemCards/GroceryCard"
import PropTypes from 'prop-types'
import './ItemContainer.css'

const GroceryItems = ({ groceryItems, deleteItem }) => {
    const style = {
        backgroundColor: '#eccc80'
    }

    let groceryCards = groceryItems.map(grocery => {
        const { id, groceryItem, quantity, description } = grocery
        return(
            <GroceryCard
                id={id}
                key={id}
                item={groceryItem}
                quantity={quantity}
                description={description}
                deleteItem={deleteItem}
            />
        )
    })
    
    return(
        <div style={style} className="grocery-list-container item-container">
            {groceryCards}
        </div>
    )
}

export default GroceryItems

GroceryItems.propTypes = {
    groceryItems: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired
}
