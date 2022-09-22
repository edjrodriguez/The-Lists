import React from "react";
import GroceryCard from "../ItemCards/GroceryCard";

const GroceryItems = ({ groceryItems, deleteItem }) => {
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
        <div className="grocery-list-container">
            {groceryCards}
        </div>
    )
}

export default GroceryItems