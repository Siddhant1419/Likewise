import React from 'react'
import icon9 from './Icons/icon9.png'
import "./FrontPage.css"

function FrontPage() {
    return (
        <div className="frontpage__container">
            <img
            className="frontPage__logo" 
            src={icon9} alt="Likewise frontPage logo"/>
            <h2 className="frontPage__text">LIKEWISE</h2>
            <h4 className="frontPage__subText">You are just like me.</h4>
            <button className="frontPage__btn">Let's go!</button>
        </div>
    )
}

export default FrontPage;