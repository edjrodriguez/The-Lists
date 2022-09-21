import React from "react";
import GroceryCard from "../ItemCards/GroceryCard";

const GroceryItems = ({ groceryItems }) => {
    let groceryCards = groceryItems.map(grocery => {
        const { id, item, quantity, description } = grocery
        return(
            <GroceryCard
                id={id}
                key={id}
                item={item}
                quantity={quantity}
                description={description}
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