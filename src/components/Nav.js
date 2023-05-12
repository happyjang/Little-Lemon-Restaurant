import React from "react";
import logo1 from "../Images/logo1.png";

const Nav = () => {
    return (

        <nav>
            <img src={logo1} alt="Little Lemon Logo1" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>

            </ul>
        </nav>

    )
}

export default Nav;