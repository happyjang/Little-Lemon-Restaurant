import React from "react";
import logo2 from "../Images/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <section>
                <div>
                    <img src={logo2} alt="Little Lemon Logo2" />
                </div>
                <div>
                    <h3>Document Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li><Link id="bookingLink" to="/BookingPage">Reservation</Link></li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </div>

            </section>

        </footer>
    )
};

export default Footer;