import React from "react"
import WishCard from "../ItemCards/WishCard";
import './ItemContainer.css'

const EddiesItems = ({ eddieWishList, deleteItem }) => {
    const style = {
        background: "#868e96"
    }

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
    
    return (
        <div style={style} className="grocery-list-container item-container">
            {wishCards}
        </div>
    )
}

export default EddiesItems