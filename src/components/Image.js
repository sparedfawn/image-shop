import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../Context";
import useHover from "../hooks/useHover";

const Image = ({ className, img }) => {
    const [hovered, ref] = useHover();
    const { toggleFavorite, addItemToCart, isItemInCart, removeItemFromCart } = useContext(Context);

    const heartIcon = img.isFavorite ? (
        <i
            className={"ri-heart-fill favorite"}
            onClick={() => toggleFavorite(img.id)}
        ></i>
    ) : (
        hovered && (
            <i
                className={"ri-heart-line favorite"}
                onClick={() => toggleFavorite(img.id)}
            ></i>
        )
    );

    const cartIcon = isItemInCart(img) ? (
        <i
            className="ri-shopping-cart-fill cart"
            onClick={() => removeItemFromCart(img.id)}
        ></i>
    ) : (
        hovered && (
            <i
                className="ri-add-circle-line cart"
                onClick={() => addItemToCart(img)}
            ></i>
        )
    );

    return (
        <div className={`${className} image-container`} ref={ref}>
            {heartIcon}
            {cartIcon}

            <img src={img.url} className="image-grid" />
        </div>
    );
};

Image.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
    }).isRequired,
    className: PropTypes.string,
};

export default Image;
