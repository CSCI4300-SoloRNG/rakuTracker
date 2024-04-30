import React, {useEffect, useState} from 'react';
import './Carousel.css';
import {getDrawings} from "@/app/components/BackendInterface";
import DrawingWithBanner from "@/app/components/DrawingWithBanner"; // Import your Drawing component

const DrawingsContainer = () => {

    // Array of default drawing titles
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        getDrawings().then(drawings => {
            console.log(`use effect: drawings: ${drawings}`);
            if (drawings === undefined || drawings === null) {
                drawings = [];
            } else {
                // only keep first 5 drawings
                drawings = drawings.slice(0, Math.min(drawings.length - 1, 5));
            }
            setDrawings(drawings);
        });
    }, []);

    return (
        <div className="carousel">
            {/* Map over the array of default drawings and render Drawing components */}
            {drawings.map((drawing) => (<DrawingWithBanner drawing={drawing} key={drawing._id}/>))}
        </div>
    );
};

export default DrawingsContainer;