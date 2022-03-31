import React, { useContext, useState } from "react";

import { Context } from "../Context";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
    const [hovered, ref] = useHover();
    const { removeItemFromCart } = useContext(Context);

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

    return (
        <div className="cart-item">
            <img src={item.url} width="130px" />
            <p>$5.99</p>
            <i
                className={iconClassName}
                onClick={() => removeItemFromCart(item.id)}
                ref={ref}
            ></i>
        </div>
    );
};

export default CartItem;
