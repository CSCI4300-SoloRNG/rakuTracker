import React, {useEffect, useState} from 'react';
import './Carousel.css';
import Drawing from './Drawing';
import {getDrawings} from "@/app/components/BackendInterface"; // Import your Drawing component

const DrawingsContainer = () => {


    // Array of default drawing titles
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        getDrawings().then(drawings => {
            console.log(`use effect: drawings: ${drawings}`);
            if (drawings === undefined || drawings === null) {
                drawings = [];
            }
            setDrawings(drawings);
        });
    }, []);

    return (
        <div className="carousel">
            {/* Map over the array of default drawings and render Drawing components */}
            {drawings.map((drawing) => (
                <Drawing key={drawing._id} _id={drawing._id} img={drawing.url}/>
            ))}
        </div>
    );
};

export default DrawingsContainer;