import React from "react";
import WishCard from "../ItemCards/WishCard";

const WhitsItems = ({ whitWishList, deleteItem }) => {
    let wishCards = whitWishList.map(wish => {
        const { id, whitneyItem, link, description } = wish
        return(
            <WishCard
                id={id}
                key={id}
                item={whitneyItem}
                link={link}
                description={description}
                deleteItem={deleteItem}
            />
        )
    })
    
    return(
        <div className="grocery-list-container">
            {wishCards}
        </div>
    )
}

export default WhitsItems