import React from 'react';
import './Carousel.css';
import Drawing from "@/app/components/Drawing";

const Carousel = props => {
    // carousel of random images
    return (
        <div className="carousel">
            <Drawing />
            <Drawing />
            <Drawing />
            <Drawing />
            <Drawing />
        </div>
    );
};

export default Carousel;