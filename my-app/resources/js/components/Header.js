import React from "react";
import Logo from "../../images/Logo.png";
import Searchbar from "./Searchbar";

const Header = () => {
    return (
        <>
            <header className="area area--header">
                <div className="region region--header">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <Searchbar />
                    <div className="login--link">
                        <div>
                            <a href="#">Sign In</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
