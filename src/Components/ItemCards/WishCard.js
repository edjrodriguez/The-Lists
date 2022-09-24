import React from "react";
import './Card.css'

const WishCard = ({ id, item, link, description, deleteItem }) => {
    return(
        <div className="grocery-card">
            <div className="item-name-container">
                <h5>{item}</h5>
            </div>
            <div className="link-or-qty-container">
                {link ? <a href={link}>Link</a> : <a href={`https://www.google.com/search?q=${item}`}>Link</a>}
            </div>
            <div className="notes-container">
                {description ? <h5 className="notes">   Notes: <br/><br/>{description}</h5> : <p></p>}
            </div>
            <div className="delete-btn-container">
                <button onClick={() => deleteItem(id)}>🗑</button>
            </div>
        </div>
    )

}

export default WishCard