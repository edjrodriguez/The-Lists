import React from "react";
import WishCard from "../ItemCards/WishCard";
import './ItemContainer.css'


const WhitsItems = ({ whitWishList, deleteItem }) => {
    const style = {
        backgroundColor: '#ac97ec'
    }

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
        <div style={style} className="grocery-list-container item-container">
            {wishCards}
        </div>
    )
}

export default WhitsItems