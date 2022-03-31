import React, { useContext } from "react";

import { Context } from "../Context";
import { getClass } from "../utils";
import Image from "../components/Image";

const Photos = () => {
    const { photos } = useContext(Context);

    const photoGrid = photos.map((img, i) => (
        <Image key={img.id} className={getClass(i)} img={img} />
    ));

    return <main className="photos">{photoGrid}</main>;
};

export default Photos;
