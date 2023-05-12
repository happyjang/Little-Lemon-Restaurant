import React from "react";
import logo2 from "../Images/logo2.png";

const Footer = () => {
    return (
        <footer>
            <section>
                <>
                    <img src={logo2} alt="Little Lemon Logo2" />
                </>
                <>
                    <h3>Document Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservation</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </>
                <>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </>
                <>
                    <h3>Document Navigation</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </>

            </section>

        </footer>
    )
};

export default Footer;