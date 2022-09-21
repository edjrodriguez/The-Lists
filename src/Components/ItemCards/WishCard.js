import React from "react";
import './Card.css'

const WishCard = ({ id, item, link, description }) => {
    return(
        <div className="grocery-card">
            <h3>{item}</h3>
            {link ? <label>Link: <a href={link}>{link}</a></label> : <p>No link provided</p>}
            {description ? <h5>Notes: {description}</h5> : <p></p>}
            <button>Remove Item</button>
        </div>
    )

}

export default WishCard