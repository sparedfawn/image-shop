import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../Context";
import CartItem from "../components/CartItem";

const Cart = () => {
    const [buttonText, setButtonText] = useState("Place Order");
    const { cartItems, emptyCart } = useContext(Context);
    const history = useHistory();

    const cartItemsElement = cartItems.map((item) => (
        <div>
            <CartItem key={item.id} item={item} />
            <hr />
        </div>
    ));

    const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    function placeOrder() {
        setButtonText("Ordering...");
        setTimeout(() => {
            console.log("Order placed");
            setButtonText("Place Order");
            emptyCart();
            history.push("/");
        }, 3000);
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            <hr />
            {cartItemsElement}
            <p className="total-cost">Total: {totalCost}</p>
            <div className="order-button">
                <button
                    onClick={placeOrder}
                    disabled={cartItems.length === 0}
                    className="cart-button"
                >
                    {buttonText}
                </button>
            </div>
        </main>
    );
};

export default Cart;
