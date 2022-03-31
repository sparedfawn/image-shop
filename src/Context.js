import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [photos, setPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then((response) => {
                if (response.status === 200) setPhotos(response.data);
            });
    }, []);

    function addItemToCart(item) {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    }

    function removeItemFromCart(id) {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((e) => e.id !== id)
        );
    }

    function toggleFavorite(id) {
        setPhotos((prevPhotos) => {
            return prevPhotos.map((photo) => {
                if (photo.id === id) {
                    return { ...photo, isFavorite: !photo.isFavorite };
                }
                return photo;
            });
        });
    }

    function isItemInCart(item) {
        return cartItems.some((e) => e.id === item.id);
    }

    function emptyCart() {
        setCartItems([]);
    }

    return (
        <Context.Provider
            value={{
                photos,
                toggleFavorite,
                addItemToCart,
                isItemInCart,
                removeItemFromCart,
                cartItems,
                emptyCart,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };
