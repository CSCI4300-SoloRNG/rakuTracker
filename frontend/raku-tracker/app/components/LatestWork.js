import {getDrawings} from "@/app/components/BackendInterface";
import {useEffect, useState} from "react";
import './LatestWork.css';
import DrawingWithBanner from "@/app/components/DrawingWithBanner";

export default function LatestWork() {
    const [drawing, setDrawing] = useState({});

    useEffect(() => {
        getDrawings().then(drawings => {
            console.log(`use effect: drawings: ${drawings}`);
            if (drawings === undefined || drawings === null) {
                drawings = [{}];
            } else {
                // only keep first drawing
                drawings = drawings[drawings.length - 1];
            }
            setDrawing(drawings);
        });
    }, []);

    return (<div className={"latest-work"}><DrawingWithBanner drawing={drawing}/></div>);
}