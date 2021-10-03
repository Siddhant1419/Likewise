// import { people } from "@material-ui/icons";

import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import './LikewiseCards.css'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function LikewiseCards() {        
    // Passing the Card objects
    const [people, setPeople] = useState([]);

    // Pushing to the Array
    // setPeople([...people,'FirstName', 'LastName'])

    useEffect(async() => {

            const db = collection(database,'people')
            const snapshot = await getDocs(db)

            const people = setPeople(snapshot.docs.map(doc => doc.data()))
            console.log(people)
            return people
    },  []);

    return(
        <div>
            <div className="LikewiseCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})` }} 
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default LikewiseCards;