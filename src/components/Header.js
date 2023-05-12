import React from 'react';
import restaurant from '../Images/restaurant01.png';


const Header = () => {
    return (
        <header>
            <section>
                <>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </>
                <>
                    <img src={restaurant} alt='restaurant' />
                </>
            </section>
        </header>

    )
};

export default Header;