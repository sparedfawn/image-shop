import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../Context";

const Header = () => {
    const { cartItems } = useContext(Context);

    const cartIcon =
        cartItems.length > 0 ? (
            <i className="ri-shopping-cart-fill ri-fw ri-2x" />
        ) : (
            <i className="ri-shopping-cart-line ri-fw ri-2x" />
        );
    return (
        <header>
            <Link to="/">
                <h2>Photofy</h2>
            </Link>
            <Link to="/cart">{cartIcon}</Link>
        </header>
    );
};

export default Header;
