import React from "react";
import logo1 from "../Images/logo1.png";
import { Link } from "react-router-dom";

const Nav = () => {
    return (

        <nav>
            <img src={logo1} alt="Little Lemon Logo1" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li><Link id="bookingLink" to="/BookingPage">Reservations</Link></li>
                <li>Order Online</li>
                <li>Login</li>

            </ul>
        </nav>

    )
}

export default Nav;