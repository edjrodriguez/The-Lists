import React from "react"
import PropTypes from 'prop-types'
import './Card.css'

const WishCard = ({ id, item, link, description, deleteItem }) => {
    return(
        <div className="card">
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
                <button className="delete-btn" onClick={() => deleteItem(id)}>🗑</button>
            </div>
        </div>
    )
}

export default WishCard

WishCard.propTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired
}