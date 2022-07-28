import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img
                className="nav-logo"
                src="https://pngimg.com/uploads/netflix/netflix_PNG32.png"
                alt="Netflix logo"
            />
            <img
                className="nav-avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Netflix avatar"
            />
        </div>
    );
}

export default Nav;
