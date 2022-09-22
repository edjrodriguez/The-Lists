import React from "react";
import WishCard from "../ItemCards/WishCard";

const EddiesItems = ({ eddieWishList, deleteItem }) => {
    let wishCards = eddieWishList.map(wish => {
        const { id, eddieItem, link, description } = wish
        return(
            <WishCard
                id={id}
                key={id}
                item={eddieItem}
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

export default EddiesItems