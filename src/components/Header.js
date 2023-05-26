import React from 'react';
import restaurant from '../Images/restaurant01.png';
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <header>
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/BookingPage"><button aria-label="On Click">Reserve a table</button></Link>
                </div>
                <div>
                    <img src={restaurant} alt='restaurant' />
                </div>
            </section>
        </header>

    )
};

export default Header;