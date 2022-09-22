import React from "react";
import './Card.css'

const WishCard = ({ id, item, link, description, deleteItem }) => {
    return(
        <div className="grocery-card">
            <h3>{item}</h3>
            {link ? <label>Link: <a href={link}>{link}</a></label> : <p>No link provided</p>}
            {description ? <h5>Notes: {description}</h5> : <p></p>}
            <button onClick={() => deleteItem(id)}>Remove Item</button>
        </div>
    )

}

export default WishCard