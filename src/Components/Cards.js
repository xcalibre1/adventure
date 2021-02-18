import React from 'react'
import CardItem from './CardItem'
import "../App.css"
import "./Cards.css"
function Cards() {
    return (
        <div className="cards">
            <h1>check out EPIC destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside Amazon"
                        label="adventure"
                        path="./services"
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="travel through island of Bali in a private cruise"
                        label="Luxury"
                        path="./services"
                        />
                        
                    </ul>
                    <ul className="cards__item">
                        <CardItem 
                        src="images/img-3.jpg"
                        text="set sail in Atlantic ocean visiting uncharted waters"
                        label="Mystery"
                        path="./services"
                        />
                        <CardItem 
                        src="images/img-4.jpg"
                        text="Experience Football on top of himalayan mountains"
                        label="Luxury"
                        path="./services"
                        />
                        <CardItem 
                        src="images/img-8.jpg"
                        text="Experience sahara desert "
                        label="Adrenaline"
                        path="./services"
                        />
                        
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
